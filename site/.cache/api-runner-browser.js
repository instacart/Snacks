"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime/core-js/promise"));

var plugins = require("./api-runner-browser-plugins");

exports.apiRunner = function (api, args, defaultReturn) {
  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);
    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else if (defaultReturn) {
    return [defaultReturn];
  } else {
    return [];
  }
};

exports.apiRunnerAsync = function (api, args, defaultReturn) {
  return plugins.reduce(function (previous, next) {
    return next.plugin[api] ? previous.then(function () {
      return next.plugin[api](args, next.options);
    }) : previous;
  }, _promise.default.resolve());
};