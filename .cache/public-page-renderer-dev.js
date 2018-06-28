"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pages = _interopRequireDefault(require("./pages.json"));

var _loader = _interopRequireDefault(require("./loader"));

var _jsonStore = _interopRequireDefault(require("./json-store"));

var DevPageRenderer = function DevPageRenderer(_ref) {
  var location = _ref.location;

  var pageResources = _loader.default.getResourcesForPathname(location.pathname);

  return _react.default.createElement(_jsonStore.default, {
    pages: _pages.default,
    location: location,
    pageResources: pageResources
  });
};

DevPageRenderer.propTypes = {
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = DevPageRenderer;
exports.default = _default;