"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = socketIo;
exports.getIsInitialized = exports.getPageQueryData = exports.getStaticQueryData = void 0;

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var socket = null;
var staticQueryData = {};
var pageQueryData = {};
var isInitialized = false;

var getStaticQueryData = function getStaticQueryData() {
  return staticQueryData;
};

exports.getStaticQueryData = getStaticQueryData;

var getPageQueryData = function getPageQueryData() {
  return pageQueryData;
};

exports.getPageQueryData = getPageQueryData;

var getIsInitialized = function getIsInitialized() {
  return isInitialized;
};

exports.getIsInitialized = getIsInitialized;

function socketIo() {
  if (process.env.NODE_ENV !== "production") {
    if (!socket) {
      // Try to initialize web socket if we didn't do it already
      try {
        // eslint-disable-next-line no-undef
        socket = io();
        socket.on("message", function (msg) {
          if (msg.type === "staticQueryResult") {
            var _extends2;

            staticQueryData = (0, _extends4.default)({}, staticQueryData, (_extends2 = {}, _extends2[msg.payload.id] = msg.payload.result, _extends2));
          }

          if (msg.type === "pageQueryResult") {
            var _extends3;

            pageQueryData = (0, _extends4.default)({}, pageQueryData, (_extends3 = {}, _extends3[msg.payload.id ? msg.payload.id : msg.payload.path] = msg.payload.result, _extends3));
          }

          if (msg.type && msg.payload) {
            ___emitter.emit(msg.type, msg.payload);
          }
        });
      } catch (err) {
        console.error("Could not connect to socket.io on dev server.");
      }
    }

    return socket;
  } else {
    return null;
  }
}