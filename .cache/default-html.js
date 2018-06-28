"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var HTML =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return _react.default.createElement("html", this.props.htmlAttributes, _react.default.createElement("head", null, _react.default.createElement("meta", {
      charSet: "utf-8"
    }), _react.default.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), this.props.headComponents), _react.default.createElement("body", this.props.bodyAttributes, this.props.preBodyComponents, _react.default.createElement("div", {
      key: "body",
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  };

  return HTML;
}(_react.default.Component);

exports.default = HTML;
HTML.propTypes = {
  htmlAttributes: _propTypes.default.object,
  headComponents: _propTypes.default.array,
  bodyAttributes: _propTypes.default.object,
  preBodyComponents: _propTypes.default.array,
  body: _propTypes.default.string,
  postBodyComponents: _propTypes.default.array
};