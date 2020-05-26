"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomePage = _interopRequireDefault(require("../components/HomePage.vue"));

var _LoginPage = _interopRequireDefault(require("../components/LoginPage"));

var _Register = _interopRequireDefault(require("../components/Register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: "/",
    component: _HomePage["default"]
  }, {
    path: "/login",
    component: _LoginPage["default"]
  }, {
    path: "/register",
    component: _Register["default"]
  }, {
    path: "*",
    redirect: "/"
  }]
});
exports.router = router;
router.beforeEach(function (to, from, next) {
  var publicPages = ["/login", "/register"];
  var authRequired = !publicPages.includes(to.path);
  var loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});