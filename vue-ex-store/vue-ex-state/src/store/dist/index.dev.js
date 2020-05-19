"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _link = _interopRequireDefault(require("./modules/link.module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Modules
var modules = {
  link: _link["default"]
};

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  /**
   * Assign the modules to the store.
   */
  modules: modules
});

exports["default"] = _default;