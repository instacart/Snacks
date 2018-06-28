"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.publicLoader = void 0;

var _getIterator2 = _interopRequireDefault(require("@babel/runtime/core-js/get-iterator"));

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var _create = _interopRequireDefault(require("@babel/runtime/core-js/object/create"));

var _findPage = _interopRequireDefault(require("./find-page"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _stripPrefix = _interopRequireDefault(require("./strip-prefix"));

var _apiRunnerBrowser = require("./api-runner-browser");

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var prefetcher;
var inInitialRender = true;
var hasFetched = (0, _create.default)(null);
var syncRequires = {};
var asyncRequires = {};
var jsonDataPaths = {};
var fetchHistory = [];
var fetchingPageResourceMapPromise = null;
var fetchedPageResourceMap = false;
var failedPaths = {};
var failedResources = {};
var MAX_HISTORY = 5;
var jsonPromiseStore = {};
/**
 * Fetch resource map (pages data and paths to json files with results of
 *  queries)
 */

var fetchPageResourceMap = function fetchPageResourceMap() {
  if (!fetchingPageResourceMapPromise) {
    fetchingPageResourceMapPromise = new _promise.default(function (resolve) {
      asyncRequires.data().then(function (_ref) {
        var pages = _ref.pages,
            dataPaths = _ref.dataPaths;
        // TODO — expose proper way to access this data from plugins.
        // Need to come up with an API for plugins to access
        // site info.
        window.___dataPaths = dataPaths;
        queue.addPagesArray(pages);
        queue.addDataPaths(dataPaths);
        resolve(fetchedPageResourceMap = true);
      });
    });
  }

  return fetchingPageResourceMapPromise;
};

var fetchResource = function fetchResource(resourceName) {
  // Find resource
  var resourceFunction;

  if (resourceName.slice(0, 12) === "component---") {
    resourceFunction = asyncRequires.components[resourceName];
  } else {
    if (resourceName in jsonPromiseStore) {
      resourceFunction = function resourceFunction() {
        return jsonPromiseStore[resourceName];
      };
    } else {
      resourceFunction = function resourceFunction() {
        var fetchPromise = new _promise.default(function (resolve, reject) {
          var url = __PATH_PREFIX__ + "/static/d/" + jsonDataPaths[resourceName] + ".json";
          var req = new XMLHttpRequest();
          req.open("GET", url, true);
          req.withCredentials = true;

          req.onreadystatechange = function () {
            if (req.readyState == 4) {
              if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
              } else {
                reject();
              }
            }
          };

          req.send(null);
        });
        jsonPromiseStore[resourceName] = fetchPromise;
        return fetchPromise;
      };
    }
  } // Download the resource


  hasFetched[resourceName] = true;
  return new _promise.default(function (resolve) {
    var fetchPromise = resourceFunction();
    var failed = false;
    return fetchPromise.catch(function () {
      failed = true;
    }).then(function (component) {
      fetchHistory.push({
        resource: resourceName,
        succeeded: !failed
      });

      if (!failedResources[resourceName]) {
        failedResources[resourceName] = failed;
      }

      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
      resolve(component);
    });
  });
};

var getResourceModule = function getResourceModule(resourceName) {
  return fetchResource(resourceName).then(preferDefault);
}; // Prefetcher logic


if (process.env.NODE_ENV === "production") {
  prefetcher = require("./prefetcher")({
    fetchNextResource: function fetchNextResource() {
      var next = queue.dequeue();
      return next && fetchResource(next);
    }
  });

  _emitter.default.on("onPreLoadPageResources", function (e) {
    prefetcher.onPreLoadPageResources(e);
  });

  _emitter.default.on("onPostLoadPageResources", function (e) {
    prefetcher.onPostLoadPageResources(e);
  });
}

var appearsOnLine = function appearsOnLine() {
  var isOnLine = navigator.onLine;

  if (typeof isOnLine === "boolean") {
    return isOnLine;
  } // If no navigator.onLine support assume onLine if any of last N fetches succeeded


  var succeededFetch = fetchHistory.find(function (entry) {
    return entry.succeeded;
  });
  return !!succeededFetch;
};

var handleResourceLoadError = function handleResourceLoadError(path, message) {
  if (!failedPaths[path]) {
    failedPaths[path] = message;
  }

  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
    window.location.pathname = path;
  }
}; // Note we're not actively using the path data atm. There
// could be future optimizations however around trying to ensure
// we load all resources for likely-to-be-visited paths.
// let pathArray = []
// let pathCount = {}


var resourcesCount = (0, _create.default)(null);

var sortResourcesByCount = function sortResourcesByCount(a, b) {
  if (resourcesCount[a] > resourcesCount[b]) return 1;else if (resourcesCount[a] < resourcesCount[b]) return -1;else return 0;
};

var findPage;
var pathScriptsCache = {};
var resourcesArray = [];
var mountOrder = 1;
var prefetchTriggered = {};
var disableCorePrefetching = (0, _apiRunnerBrowser.apiRunner)("disableCorePrefetching");
var queue = {
  empty: function empty() {
    resourcesCount = (0, _create.default)(null);
    resourcesArray = [];
  },
  addPagesArray: function addPagesArray(newPages) {
    findPage = (0, _findPage.default)(newPages, __PATH_PREFIX__);
  },
  addDevRequires: function addDevRequires(devRequires) {
    syncRequires = devRequires;
  },
  addProdRequires: function addProdRequires(prodRequires) {
    asyncRequires = prodRequires;
  },
  addDataPaths: function addDataPaths(dataPaths) {
    jsonDataPaths = dataPaths;
  },
  dequeue: function dequeue() {
    return resourcesArray.pop();
  },
  // Hovering on a link is a very strong indication the user is going to
  // click on it soon so let's start prefetching resources for this
  // pathname.
  hovering: function hovering(rawPath) {
    var path = (0, _stripPrefix.default)(rawPath, __PATH_PREFIX__);
    queue.getResourcesForPathname(path);
  },
  enqueue: function enqueue(rawPath) {
    var path = (0, _stripPrefix.default)(rawPath, __PATH_PREFIX__); // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.

    if (!prefetchTriggered[path]) {
      (0, _apiRunnerBrowser.apiRunner)("onPrefetchPathname", {
        pathname: path
      });
      prefetchTriggered[path] = true;
    } // If a plugin has disabled core prefetching, stop now.


    if (disableCorePrefetching.some(function (a) {
      return a;
    })) {
      return false;
    } // Check if the page exists.


    var page = findPage(path);

    if (process.env.NODE_ENV === "production" && !page && !fetchedPageResourceMap) {
      // If page wasn't found check and we didn't fetch resources map for
      // all pages, wait for fetch to complete and try find page again
      return fetchPageResourceMap().then(function () {
        return queue.enqueue(rawPath);
      });
    }

    if (!page) {
      return false;
    }

    var mountOrderBoost = 1 / mountOrder;
    mountOrder += 1;

    function enqueueResource(resourceName) {
      if (!resourceName) return;

      if (!resourcesCount[resourceName]) {
        resourcesCount[resourceName] = 1 + mountOrderBoost;
      } else {
        resourcesCount[resourceName] += 1 + mountOrderBoost;
      } // Before adding, checking that the resource isn't either
      // already queued or been downloading.


      if (hasFetched[resourceName] || resourcesArray.includes(resourceName)) return;
      resourcesArray.unshift(resourceName);
    } // Add resources to queue.


    enqueueResource(page.jsonName);
    enqueueResource(page.componentChunkName); // Sort resources by resourcesCount.

    resourcesArray.sort(sortResourcesByCount);

    if (process.env.NODE_ENV === "production") {
      prefetcher.onNewResourcesAdded();
    }

    return true;
  },
  getPage: function getPage(pathname) {
    return findPage(pathname);
  },
  getResourcesForPathname: function getResourcesForPathname(path, cb) {
    if (cb === void 0) {
      cb = function cb() {};
    }

    if (inInitialRender && navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.state === "activated") {
      // If we're loading from a service worker (it's already activated on
      // this initial render) and we can't find a page, there's a good chance
      // we're on a new page that this (now old) service worker doesn't know
      // about so we'll unregister it and reload.
      if (!findPage(path)) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          // We would probably need this to
          // prevent unnecessary reloading of the page
          // while unregistering of ServiceWorker is not happening
          if (registrations.length) {
            for (var _iterator = registrations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator2.default)(_iterator);;) {
              var _ref2;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref2 = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref2 = _i.value;
              }

              var registration = _ref2;
              registration.unregister();
            }

            window.location.reload();
          }
        });
      }
    }

    var doingInitialRender = inInitialRender;
    inInitialRender = false; // In development we know the code is loaded already
    // so we just return with it immediately.

    if (process.env.NODE_ENV !== "production") {
      var _page = findPage(path);

      if (!_page) {
        cb();
        return null;
      }

      var pageResources = {
        component: syncRequires.components[_page.componentChunkName],
        page: _page
      };
      cb(pageResources);
      return pageResources;
    } // Production code path


    if (failedPaths[path]) {
      handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
      cb();
      return null;
    }

    var page = findPage(path);

    if (!page && !fetchedPageResourceMap) {
      // If page wasn't found check and we didn't fetch resources map for
      // all pages, wait for fetch to complete and try to get resources again
      fetchPageResourceMap().then(function () {
        queue.getResourcesForPathname(path, cb);
      });
      return null;
    }

    if (!page) {
      console.log("A page wasn't found for \"" + path + "\"");
      cb();
      return null;
    } // Use the path from the page so the pathScriptsCache uses
    // the normalized path.


    path = page.path; // Check if it's in the cache already.

    if (pathScriptsCache[path]) {
      _promise.default.resolve().then(function () {
        cb(pathScriptsCache[path]);

        _emitter.default.emit("onPostLoadPageResources", {
          page: page,
          pageResources: pathScriptsCache[path]
        });
      });

      return pathScriptsCache[path];
    }

    _emitter.default.emit("onPreLoadPageResources", {
      path: path
    }); // Nope, we need to load resource(s)


    _promise.default.all([getResourceModule(page.componentChunkName), getResourceModule(page.jsonName)]).then(function (_ref3) {
      var component = _ref3[0],
          json = _ref3[1];
      var pageResources = {
        component: component,
        json: json,
        page: page
      };
      pathScriptsCache[path] = pageResources;
      cb(pageResources);

      _emitter.default.emit("onPostLoadPageResources", {
        page: page,
        pageResources: pageResources
      });

      if (doingInitialRender) {
        // We got all resourecs needed for first mount,
        // we can fetch resoures for all pages.
        fetchPageResourceMap();
      }
    });

    return null;
  },
  // for testing
  ___resources: function ___resources() {
    return resourcesArray.slice().reverse();
  }
};
var publicLoader = {
  getResourcesForPathname: queue.getResourcesForPathname
};
exports.publicLoader = publicLoader;
var _default = queue;
exports.default = _default;