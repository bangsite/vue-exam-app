"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _store = require("./store");

var _index = require("./helpers/index");

var _veeValidate = _interopRequireDefault(require("vee-validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue["default"].use(_veeValidate["default"]);

_vue["default"].config.productionTip = false;
/* eslint-disable no-new */

new _vue["default"]({
  el: "#app",
  router: _index.router,
  store: _store.store,
  components: {
    App: _App["default"]
  }
});