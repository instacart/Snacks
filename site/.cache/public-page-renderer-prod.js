"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pageRenderer = _interopRequireDefault(require("./page-renderer"));

var _loader = _interopRequireDefault(require("./loader"));

var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;

  var pageResources = _loader.default.getResourcesForPathname(location.pathname);

  return _react.default.createElement(_pageRenderer.default, {
    location: location,
    pageResources: pageResources
  });
};

ProdPageRenderer.propTypes = {
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = ProdPageRenderer;
exports.default = _default;