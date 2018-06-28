"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _createBrowserHistory = _interopRequireDefault(require("history/createBrowserHistory"));

var _apiRunnerBrowser = require("./api-runner-browser");

var basename = __PATH_PREFIX__;
var pluginResponses = (0, _apiRunnerBrowser.apiRunner)("replaceHistory", {
  basename: basename
});
var replacementHistory = pluginResponses[0];
var history = replacementHistory || (0, _createBrowserHistory.default)({
  basename: basename
});
var _default = history;
exports.default = _default;