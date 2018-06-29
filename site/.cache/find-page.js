"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _reactRouterDom = require("react-router-dom");

var _stripPrefix = _interopRequireDefault(require("./strip-prefix"));

// TODO add tests especially for handling prefixed links.
var pageCache = {};

var _default = function _default(pages, pathPrefix) {
  if (pathPrefix === void 0) {
    pathPrefix = "";
  }

  return function (rawPathname) {
    var pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

    var trimmedPathname = (0, _stripPrefix.default)(pathname, pathPrefix); // Remove any hashfragment

    if (trimmedPathname.split("#").length > 1) {
      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
    } // Remove search query


    if (trimmedPathname.split("?").length > 1) {
      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
    }

    if (pageCache[trimmedPathname]) {
      return pageCache[trimmedPathname];
    }

    var foundPage; // Array.prototype.find is not supported in IE so we use this somewhat odd
    // work around.

    pages.some(function (page) {
      if (page.matchPath) {
        // Try both the path and matchPath
        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
          path: page.path
        }) || (0, _reactRouterDom.matchPath)(trimmedPathname, {
          path: page.matchPath
        })) {
          foundPage = page;
          pageCache[trimmedPathname] = page;
          return true;
        }
      } else {
        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
          path: page.path,
          exact: true
        })) {
          foundPage = page;
          pageCache[trimmedPathname] = page;
          return true;
        } // Finally, try and match request with default document.


        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
          path: page.path + "index.html"
        })) {
          foundPage = page;
          pageCache[trimmedPathname] = page;
          return true;
        }
      }

      return false;
    });
    return foundPage;
  };
};

exports.default = _default;