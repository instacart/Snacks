"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime/core-js/json/stringify"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = require("react");

var fs = require("fs");

var _require = require("path"),
    join = _require.join;

var _require2 = require("react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = require("react-router-dom"),
    StaticRouter = _require3.StaticRouter,
    Route = _require3.Route;

var _require4 = require("lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = require("./api-runner-ssr");

var syncRequires = require("./sync-requires");

var _require5 = require("./data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8")); // const testRequireError = require("./test-require-error")
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
    console.log("\n\nThere was an error requiring \"src/html.js\"\n\n", err, "\n\n");
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

function urlJoin() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return parts.reduce(function (r, next) {
    var segment = next == null ? "" : String(next).replace(/^\/+/, "");
    return segment ? r.replace(/\/$/, "") + "/" + segment : r;
  }, "");
}

var getPage = function getPage(path) {
  return pages.find(function (page) {
    return page.path === path;
  });
};

var createElement = React.createElement;

var _default = function _default(pagePath, callback) {
  var _postBodyComponents;

  var pathPrefix = __PATH_PREFIX__ + "/";
  var bodyHtml = "";
  var headComponents = [];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = "../public/" + dataPaths[page.jsonName];

    try {
      dataAndContext = JSON.parse(fs.readFileSync(process.cwd() + "/public/static/d/" + dataPaths[page.jsonName] + ".json"));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var AltStaticRouter = apiRunner("replaceStaticRouterComponent")[0];
  apiRunner("replaceStaticRouterComponent");
  var bodyComponent = createElement(AltStaticRouter || StaticRouter, {
    basename: pathPrefix.slice(0, -1),
    location: {
      pathname: pagePath
    },
    context: {}
  }, createElement(Route, {
    // eslint-disable-next-line react/display-name
    render: function render(routeProps) {
      return createElement(syncRequires.components[page.componentChunkName], (0, _extends2.default)({}, routeProps, dataAndContext, {
        pathContext: dataAndContext.pageContext
      }));
    }
  })); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    bodyHtml = renderToString(bodyComponent);
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: pathPrefix
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: urlJoin(pathPrefix, script.name)
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = pathPrefix + "static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      rel: "preload",
      key: dataPath,
      href: dataPath,
      as: "fetch",
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: urlJoin(pathPrefix, style.name)
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        type: "text/css",
        "data-href": urlJoin(pathPrefix, style.name),
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + (0, _stringify.default)(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + pathPrefix + (0, _stringify.default)(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, (0, _extends2.default)({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
};

exports.default = _default;