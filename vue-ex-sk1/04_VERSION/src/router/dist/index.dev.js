"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Index = _interopRequireDefault(require("../pages/Index"));

var _home = _interopRequireDefault(require("./routes/home.route"));

var _class = _interopRequireDefault(require("./routes/class.route"));

var _company = _interopRequireDefault(require("./routes/company.route"));

var _nieintro = _interopRequireDefault(require("./routes/nieintro.route"));

var _detail = _interopRequireDefault(require("./routes/detail.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

var _newspaper = _interopRequireDefault(require("./routes/newspaper.route"));

var _newspaperdetail = _interopRequireDefault(require("./routes/newspaperdetail.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Route Modules */
_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: "history",
  base: "/",
  routes: [{
    path: "",
    redirect: _home["default"],
    name: "Index",
    component: _Index["default"],
    children: [_home["default"], _detail["default"], _menu["default"], _class["default"], _company["default"], _nieintro["default"], _newspaper["default"], _newspaperdetail["default"]]
  }]
});
var _default = router;
exports["default"] = _default;