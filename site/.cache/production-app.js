"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _apiRunnerBrowser = require("./api-runner-browser");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

var _domready = _interopRequireDefault(require("domready"));

var _history = require("history");

var _history2 = _interopRequireDefault(require("./history"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _redirects = _interopRequireDefault(require("./redirects.json"));

var _pageRenderer = _interopRequireDefault(require("./page-renderer"));

var _asyncRequires = _interopRequireDefault(require("./async-requires"));

var _loader = _interopRequireDefault(require("./loader"));

var _loader$addDataPaths;

window.___history = _history2.default;
window.___emitter = _emitter.default;
window.asyncRequires = _asyncRequires.default;
window.___emitter = _emitter.default;
window.___loader = _loader.default;
window.matchPath = _reactRouterDom.matchPath;

_loader.default.addPagesArray([window.page]);

_loader.default.addDataPaths((_loader$addDataPaths = {}, _loader$addDataPaths[window.page.jsonName] = window.dataPath, _loader$addDataPaths));

_loader.default.addProdRequires(_asyncRequires.default); // Convert to a map for faster lookup in maybeRedirect()


var redirectMap = _redirects.default.reduce(function (map, redirect) {
  map[redirect.fromPath] = redirect;
  return map;
}, {});

var maybeRedirect = function maybeRedirect(pathname) {
  var redirect = redirectMap[pathname];

  if (redirect != null) {
    _history2.default.replace(redirect.toPath);

    return true;
  } else {
    return false;
  }
}; // Check for initial page-load redirect


maybeRedirect(window.location.pathname); // Let the site/plugins run code very early.

(0, _apiRunnerBrowser.apiRunnerAsync)("onClientEntry").then(function () {
  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if ((0, _apiRunnerBrowser.apiRunner)("registerServiceWorker").length > 0) {
    require("./register-service-worker");
  }

  var lastNavigateToLocationString = null;

  var navigate = function navigate(to, replace) {
    var location = (0, _history.createLocation)(to, null, null, _history2.default.location);
    var pathname = location.pathname;
    var redirect = redirectMap[pathname]; // If we're redirecting, just replace the passed in pathname
    // to the one we want to redirect to.

    if (redirect) {
      pathname = redirect.toPath;
    }

    var wl = window.location; // If we're already at this location, do nothing.

    if (wl.pathname === location.pathname && wl.search === location.search && wl.hash === location.hash) {
      return;
    }

    var historyNavigateFunc = replace ? window.___history.replace : window.___history.push;
    var historyNavigateAction = replace ? "REPLACE" : "PUSH"; // Start a timer to wait for a second before transitioning and showing a
    // loader in case resources aren't around yet.

    var timeoutId = setTimeout(function () {
      _emitter.default.emit("onDelayedLoadPageResources", {
        pathname: pathname
      });

      (0, _apiRunnerBrowser.apiRunner)("onRouteUpdateDelayed", {
        location: location,
        action: historyNavigateAction
      });
    }, 1000);
    lastNavigateToLocationString = "" + location.pathname + location.search + location.hash;
    (0, _apiRunnerBrowser.apiRunner)("onPreRouteUpdate", {
      location: location,
      action: historyNavigateAction
    });

    var loaderCallback = function loaderCallback(pageResources) {
      if (!pageResources) {
        // We fetch resources for 404 page in page-renderer.js. Calling it
        // here is to ensure that we have needed resouces to render page 
        // before navigating to it
        _loader.default.getResourcesForPathname("/404.html", loaderCallback);
      } else {
        clearTimeout(timeoutId);
        historyNavigateFunc(location);
      }
    };

    _loader.default.getResourcesForPathname(pathname, loaderCallback);
  }; // window.___loadScriptsForPath = loadScriptsForPath


  window.___push = function (to) {
    return navigate(to, false);
  };

  window.___replace = function (to) {
    return navigate(to, true);
  }; // Call onRouteUpdate on the initial page load.


  (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", {
    location: _history2.default.location,
    action: _history2.default.action
  });
  var initialAttachDone = false;

  function attachToHistory(history) {
    if (!window.___history || initialAttachDone === false) {
      window.___history = history;
      initialAttachDone = true;
      history.listen(function (location, action) {
        if (!maybeRedirect(location.pathname)) {
          // Check if we already ran onPreRouteUpdate API
          // in navigateTo function
          if (lastNavigateToLocationString !== "" + location.pathname + location.search + location.hash) {
            (0, _apiRunnerBrowser.apiRunner)("onPreRouteUpdate", {
              location: location,
              action: action
            });
          } // Make sure React has had a chance to flush to DOM first.


          setTimeout(function () {
            (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", {
              location: location,
              action: action
            });
          }, 0);
        }
      });
    }
  }

  function shouldUpdateScroll(prevRouterProps, _ref) {
    var pathname = _ref.location.pathname;
    var results = (0, _apiRunnerBrowser.apiRunner)("shouldUpdateScroll", {
      prevRouterProps: prevRouterProps,
      pathname: pathname
    });

    if (results.length > 0) {
      return results[0];
    }

    if (prevRouterProps) {
      var oldPathname = prevRouterProps.location.pathname;

      if (oldPathname === pathname) {
        return false;
      }
    }

    return true;
  }

  var AltRouter = (0, _apiRunnerBrowser.apiRunner)("replaceRouterComponent", {
    history: _history2.default
  })[0];

  _loader.default.getResourcesForPathname(window.location.pathname, function () {
    var Root = function Root() {
      return (0, _react.createElement)(AltRouter ? AltRouter : _reactRouterDom.Router, {
        basename: __PATH_PREFIX__,
        history: !AltRouter ? _history2.default : undefined
      }, (0, _react.createElement)(_gatsbyReactRouterScroll.ScrollContext, {
        shouldUpdateScroll: shouldUpdateScroll
      }, (0, _react.createElement)((0, _reactRouterDom.withRouter)(_reactRouterDom.Route), {
        render: function render(routeProps) {
          attachToHistory(routeProps.history);

          if (_loader.default.getPage(routeProps.location.pathname)) {
            return (0, _react.createElement)(_pageRenderer.default, (0, _extends2.default)({
              isPage: true
            }, routeProps));
          } else {
            return (0, _react.createElement)(_pageRenderer.default, {
              isPage: true,
              location: {
                pathname: "/404.html"
              }
            });
          }
        }
      })));
    };

    var NewRoot = (0, _apiRunnerBrowser.apiRunner)("wrapRootComponent", {
      Root: Root
    }, Root)[0];
    var renderer = (0, _apiRunnerBrowser.apiRunner)("replaceHydrateFunction", undefined, _reactDom.default.hydrate)[0];
    (0, _domready.default)(function () {
      renderer(_react.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0, function () {
        (0, _apiRunnerBrowser.apiRunner)("onInitialClientRender");
      });
    });
  });
});