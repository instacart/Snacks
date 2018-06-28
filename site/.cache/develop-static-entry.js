"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _lodash = require("lodash");

var _apiRunnerSsr = _interopRequireDefault(require("./api-runner-ssr"));

// import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = require("../src/html");
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = require("./default-html");
  } else {
    console.log("There was an error requiring \"src/html.js\"\n\n", err, "\n\n");
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var _default = function _default(pagePath, callback) {
  var headComponents = [];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};
  var htmlStr;

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = (0, _lodash.merge)(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = (0, _lodash.merge)(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = (0, _lodash.merge)({}, bodyProps, props);
  };

  (0, _apiRunnerSsr.default)("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps
  });

  var htmlElement = _react.default.createElement(Html, (0, _extends2.default)({}, bodyProps, {
    body: "",
    headComponents: headComponents.concat([_react.default.createElement("script", {
      key: "io",
      src: "/socket.io/socket.io.js"
    })]),
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents.concat([_react.default.createElement("script", {
      key: "commons",
      src: "/commons.js"
    })])
  }));

  htmlStr = (0, _server.renderToStaticMarkup)(htmlElement);
  htmlStr = "<!DOCTYPE html>" + htmlStr;
  callback(null, htmlStr);
};

exports.default = _default;