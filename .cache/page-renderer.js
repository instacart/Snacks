"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _loader = _interopRequireWildcard(require("./loader"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _shallowCompare = _interopRequireDefault(require("shallow-compare"));

var _apiRunnerBrowser = require("./api-runner-browser");

// Pass pathname in as prop.
// component will try fetching resources. If they exist,
// will just render, else will render null.
var PageRenderer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PageRenderer, _React$Component);

  function PageRenderer(props) {
    var _this;

    _this = _React$Component.call(this) || this;
    var location = props.location; // Set the pathname for 404 pages.

    var pathname = _this.getPathName(location);

    _this.state = {
      lastPathname: location.pathname,
      pageResources: _loader.default.getResourcesForPathname(pathname)
    };
    return _this;
  }

  PageRenderer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var pageResources = _ref.pageResources,
        location = _ref.location;
    var nextState = {
      lastPathname: location.pathname
    };

    if (process.env.NODE_ENV !== "production" && pageResources && pageResources.json) {
      nextState.pageResources = pageResources;
    }

    if (prevState.lastPathname !== location.pathname) {
      var _pageResources = _loader.default.getResourcesForPathname(location.pathname);

      if (_pageResources) {
        nextState.pageResources = _pageResources;
      }
    }

    return nextState;
  };

  var _proto = PageRenderer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Listen to events so when our page gets updated, we can transition.
    // This is only useful on delayed transitions as the page will get rendered
    // without the necessary page resources and then re-render once those come in.
    _emitter.default.on("onPostLoadPageResources", function (e) {
      var page = _loader.default.getPage(_this2.props.location.pathname);

      if (page && e.page.path === page.path) {
        _this2.setState({
          pageResources: e.pageResources
        });
      }
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this3 = this;

    if (prevProps === this.props) return;
    var location = this.props.location;
    var pathName = this.getPathName(location);
    if (!_loader.default.getResourcesForPathname(pathName)) // Page resources won't be set in cases where the browser back button
      // or forward button is pushed as we can't wait as normal for resources
      // to load before changing the page.
      _loader.default.getResourcesForPathname(pathName, function (pageResources) {
        // The page may have changed since we started this, in which case doesn't update
        if (_this3.props.location.pathname !== location.pathname) {
          return;
        }

        _this3.setState({
          pageResources: pageResources
        });
      });
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // 404
    if (!nextState.pageResources) {
      return true;
    } // Check if the component or json have changed.


    if (!this.state.pageResources && nextState.pageResources) {
      return true;
    }

    if (this.state.pageResources.component !== nextState.pageResources.component) {
      return true;
    }

    if (this.state.pageResources.json !== nextState.pageResources.json) {
      return true;
    } // Check if location has changed on a page using internal routing
    // via matchPath configuration.


    if (this.props.location.key !== nextProps.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
      return true;
    }

    return (0, _shallowCompare.default)(this, nextProps, nextState);
  };

  _proto.getPathName = function getPathName(location) {
    return !_loader.default.getPage(location.pathname) ? "/404.html" : location.pathname;
  };

  _proto.render = function render() {
    if (!this.state.pageResources) return null;
    var pathContext = process.env.NODE_ENV !== "production" ? this.props.pageContext : this.state.pageResources.json.pageContext;
    var props = (0, _extends2.default)({}, this.props, this.state.pageResources.json, {
      pathContext: pathContext
    });

    var _apiRunner = (0, _apiRunnerBrowser.apiRunner)("replaceComponentRenderer", {
      props: props,
      loader: _loader.publicLoader
    }),
        replacementComponent = _apiRunner[0];

    return replacementComponent || (0, _react.createElement)(this.state.pageResources.component, props);
  };

  return PageRenderer;
}(_react.default.Component);

PageRenderer.propTypes = {
  location: _propTypes.default.object,
  pageResources: _propTypes.default.object,
  pageContext: _propTypes.default.object
};

var _default = (0, _reactLifecyclesCompat.polyfill)(PageRenderer);

exports.default = _default;