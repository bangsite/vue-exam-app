"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router")),_Index=_interopRequireDefault(require("../pages/Index")),_home=_interopRequireDefault(require("./routes/home.route")),_class=_interopRequireDefault(require("./routes/class.route")),_company=_interopRequireDefault(require("./routes/company.route")),_nieintro=_interopRequireDefault(require("./routes/nieintro.route")),_detail=_interopRequireDefault(require("./routes/detail.route")),_menu=_interopRequireDefault(require("./routes/menu.route")),_newspaper=_interopRequireDefault(require("./routes/newspaper.route")),_newspaperdetail=_interopRequireDefault(require("./routes/newspaperdetail.route"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vueRouter.default);var router=new _vueRouter.default({mode:"history",base:"/",routes:[{path:"",redirect:_home.default,name:"Index",component:_Index.default,children:[_home.default,_detail.default,_menu.default,_class.default,_company.default,_nieintro.default,_newspaper.default,_newspaperdetail.default]}]}),_default=router;exports.default=_default;