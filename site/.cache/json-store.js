"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _pageRenderer = _interopRequireDefault(require("./page-renderer"));

var _gatsby = require("gatsby");

var _socketIo = _interopRequireWildcard(require("./socketIo"));

var getPathFromProps = function getPathFromProps(props) {
  var _props$pageResources, _props$pageResources$;

  return (_props$pageResources = props.pageResources) === null || _props$pageResources === void 0 ? void 0 : (_props$pageResources$ = _props$pageResources.page) === null || _props$pageResources$ === void 0 ? void 0 : _props$pageResources$.path;
};

var JSONStore =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(JSONStore, _React$Component);

  function JSONStore(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMittEvent", function (type, event) {
      if (process.env.NODE_ENV !== "production") {
        _this.setState({
          staticQueryData: (0, _socketIo.getStaticQueryData)(),
          pageQueryData: (0, _socketIo.getPageQueryData)()
        });
      }
    });
    _this.state = {
      staticQueryData: (0, _socketIo.getStaticQueryData)(),
      pageQueryData: (0, _socketIo.getPageQueryData)(),
      path: null
    };

    if (process.env.NODE_ENV !== "production") {
      _this.socket = (0, _socketIo.default)();
    }

    return _this;
  }

  var _proto = JSONStore.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (process.env.NODE_ENV !== "production") {
      this.registerPath(getPathFromProps(this.props));

      ___emitter.on("*", this.handleMittEvent);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (process.env.NODE_ENV !== "production") {
      this.unregisterPath(this.state.path);

      ___emitter.off("*", this.handleMittEvent);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var path = this.state.path;
    var newPath = getPathFromProps(this.props);

    if (path !== newPath) {
      this.unregisterPath(path);
      this.registerPath(newPath);
    }
  };

  _proto.registerPath = function registerPath(path) {
    if (process.env.NODE_ENV !== "production") {
      this.setState({
        path: path
      });
      this.socket.emit("registerPath", path);
    }
  };

  _proto.unregisterPath = function unregisterPath(path) {
    if (process.env.NODE_ENV !== "production") {
      this.setState({
        path: null
      });
      this.socket.emit("unregisterPath", path);
    }
  };

  _proto.render = function render() {
    var data = this.state.pageQueryData[getPathFromProps(this.props)]; // eslint-disable-next-line

    var _this$props = this.props,
        pages = _this$props.pages,
        propsWithoutPages = (0, _objectWithoutProperties2.default)(_this$props, ["pages"]);

    if (!data) {
      return _react.default.createElement("div", null);
    }

    return _react.default.createElement(_gatsby.StaticQueryContext.Provider, {
      value: this.state.staticQueryData
    }, _react.default.createElement(_pageRenderer.default, (0, _extends2.default)({}, propsWithoutPages, data)));
  };

  return JSONStore;
}(_react.default.Component);

var _default = JSONStore;
exports.default = _default;