"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _emitter = _interopRequireDefault(require("./emitter"));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(__PATH_PREFIX__ + "/sw.js").then(function (reg) {
    reg.addEventListener("updatefound", function () {
      // The updatefound event implies that reg.installing is set; see
      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
      var installingWorker = reg.installing;
      console.log("installingWorker", installingWorker);
      installingWorker.addEventListener("statechange", function () {
        switch (installingWorker.state) {
          case "installed":
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and the fresh content will
              // have been added to the cache.
              // We reload immediately so the user sees the new content.
              // This could/should be made configurable in the future.
              window.location.reload();
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a "Content is cached for offline use." message.
              console.log("Content is now available offline!");

              _emitter.default.emit("sw:installed");
            }

            break;

          case "redundant":
            console.error("The installing service worker became redundant.");
            break;
        }
      });
    });
  }).catch(function (e) {
    console.error("Error during service worker registration:", e);
  });
}