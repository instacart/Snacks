"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _getIterator2 = _interopRequireDefault(require("@babel/runtime/core-js/get-iterator"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _domready = _interopRequireDefault(require("domready"));

var _socketIo = _interopRequireDefault(require("./socketIo"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _apiRunnerBrowser = require("./api-runner-browser");

window.___emitter = _emitter.default; // Let the site/plugins run code very early.

(0, _apiRunnerBrowser.apiRunnerAsync)("onClientEntry").then(function () {
  // Hook up the client to socket.io on server
  var socket = (0, _socketIo.default)();

  if (socket) {
    socket.on("reload", function () {
      window.location.reload();
    });
  }
  /**
   * Service Workers are persistent by nature. They stick around,
   * serving a cached version of the site if they aren't removed.
   * This is especially frustrating when you need to test the
   * production build on your local machine.
   *
   * Let's unregister the service workers in development, and tidy up a few errors.
   */


  if (supportsServiceWorkers(location, navigator)) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (var _iterator = registrations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator2.default)(_iterator);;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var registration = _ref;
        registration.unregister();
      }
    });
  }

  var rootElement = document.getElementById("___gatsby");

  var Root = require("./root");

  if (Root.default) {
    Root = Root.default;
  }

  var renderer = (0, _apiRunnerBrowser.apiRunner)("replaceHydrateFunction", undefined, _reactDom.default.render)[0];
  (0, _domready.default)(function () {
    renderer(_react.default.createElement(Root, null), rootElement, function () {
      (0, _apiRunnerBrowser.apiRunner)("onInitialClientRender");
    });
  });
});

function supportsServiceWorkers(location, navigator) {
  if (location.hostname === "localhost" || location.protocol === "https:") {
    return "serviceWorker" in navigator;
  }

  return false;
}