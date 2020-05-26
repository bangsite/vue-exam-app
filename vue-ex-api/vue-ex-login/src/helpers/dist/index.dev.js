"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require("./router");

Object.keys(_router).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _router[key];
    }
  });
});

var _authHeader = require("./auth-header");

Object.keys(_authHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authHeader[key];
    }
  });
});