"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

var _history = _interopRequireDefault(require("./history"));

var _apiRunnerBrowser = require("./api-runner-browser");

var _syncRequires = _interopRequireDefault(require("./sync-requires"));

var _pages = _interopRequireDefault(require("./pages.json"));

var _redirects = _interopRequireDefault(require("./redirects.json"));

var _loader = _interopRequireDefault(require("./loader"));

var _reactHotLoader = require("react-hot-loader");

var _jsonStore = _interopRequireDefault(require("./json-store"));

var ErrorOverlay = _interopRequireWildcard(require("react-error-overlay"));

// Report runtime errors
ErrorOverlay.startReportingRuntimeErrors({
  onError: function onError() {},
  filename: "/commons.js"
});
ErrorOverlay.setEditorHandler(function (errorLocation) {
  return window.fetch("/__open-stack-frame-in-editor?fileName=" + window.encodeURIComponent(errorLocation.fileName) + "&lineNumber=" + window.encodeURIComponent(errorLocation.lineNumber || 1));
});

if (window.__webpack_hot_middleware_reporter__ !== undefined) {
  // Report build errors
  window.__webpack_hot_middleware_reporter__.useCustomOverlay({
    showProblems: function showProblems(type, obj) {
      if (type !== "errors") {
        ErrorOverlay.dismissBuildError();
        return;
      }

      ErrorOverlay.reportBuildError(obj[0]);
    },
    clear: function clear() {
      ErrorOverlay.dismissBuildError();
    }
  });
}

_loader.default.addPagesArray(_pages.default);

_loader.default.addDevRequires(_syncRequires.default);

window.___loader = _loader.default; // Convert to a map for faster lookup in maybeRedirect()

var redirectMap = _redirects.default.reduce(function (map, redirect) {
  map[redirect.fromPath] = redirect;
  return map;
}, {}); // Check for initial page-load redirect


maybeRedirect(location.pathname); // Call onRouteUpdate on the initial page load.

(0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", {
  location: _history.default.location,
  action: _history.default.action
});

function attachToHistory(history) {
  if (!window.___history) {
    window.___history = history;
    history.listen(function (location, action) {
      if (!maybeRedirect(location.pathname)) {
        (0, _apiRunnerBrowser.apiRunner)("onPreRouteUpdate", {
          location: location,
          action: action
        });
        (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", {
          location: location,
          action: action
        });
      }
    });
  }
}

function maybeRedirect(pathname) {
  var redirect = redirectMap[pathname];

  if (redirect != null) {
    var pageResources = _loader.default.getResourcesForPathname(pathname);

    if (pageResources != null) {
      console.error("The route \"" + pathname + "\" matches both a page and a redirect; this is probably not intentional.");
    }

    _history.default.replace(redirect.toPath);

    return true;
  } else {
    return false;
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

var push = function push(to) {
  window.___history.push(to);
};

var replace = function replace(to) {
  window.___history.replace(to);
};

window.___push = push;
window.___replace = replace;
var AltRouter = (0, _apiRunnerBrowser.apiRunner)("replaceRouterComponent", {
  history: _history.default
})[0];

var Root = function Root() {
  return (0, _react.createElement)(AltRouter ? AltRouter : _reactRouterDom.Router, {
    basename: __PATH_PREFIX__,
    history: !AltRouter ? _history.default : undefined
  }, (0, _react.createElement)(_gatsbyReactRouterScroll.ScrollContext, {
    shouldUpdateScroll: shouldUpdateScroll
  }, (0, _react.createElement)(_reactRouterDom.Route, {
    // eslint-disable-next-line react/display-name
    render: function render(routeProps) {
      attachToHistory(routeProps.history);
      var pathname = routeProps.location.pathname;

      var pageResources = _loader.default.getResourcesForPathname(pathname);

      var isPage = !!(pageResources && pageResources.component);

      if (isPage) {
        return (0, _react.createElement)(_jsonStore.default, (0, _extends2.default)({
          pages: _pages.default
        }, routeProps, {
          pageResources: pageResources
        }));
      } else {
        var dev404Page = _pages.default.find(function (p) {
          return /^\/dev-404-page/.test(p.path);
        });

        return (0, _react.createElement)(_reactRouterDom.Route, {
          key: "404-page",
          // eslint-disable-next-line react/display-name
          component: function component(props) {
            return (0, _react.createElement)(_syncRequires.default.components[dev404Page.componentChunkName], (0, _extends2.default)({
              pages: _pages.default
            }, routeProps));
          }
        });
      }
    }
  })));
}; // Let site, plugins wrap the site e.g. for Redux.


var WrappedRoot = (0, _apiRunnerBrowser.apiRunner)("wrapRootComponent", {
  Root: Root
}, Root)[0];

var _default = (0, _reactHotLoader.hot)(module)(WrappedRoot);

exports.default = _default;