import Vue from 'vue'
import Router from 'vue-router'

/* Route Modules */
import Index from "../pages/Index"
import HomeRoute from './routes/home.route'
import ClassVisitRoute from "./routes/class.route";
import CompanyVisitRoute from "./routes/company.route";
import NieIntroRoute from "./routes/nieintro.route";
import DetailRoute from "./routes/detail.route";
import MenuRoute from "./routes/menu.route";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '',
      redirect: HomeRoute,
      name: 'Index',
      component: Index,
      children: [
        HomeRoute,
        DetailRoute,
        MenuRoute,
        ClassVisitRoute,
        CompanyVisitRoute,
        NieIntroRoute
      ]
    }
  ]
})
export default router
