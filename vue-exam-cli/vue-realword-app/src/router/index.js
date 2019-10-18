import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routers:[
    {
      path:"/",
      component:()=>import("../views/Home"),
    },
    {
      name:"login",
      path:"/login",
      component:()=>import("../views/Login.vue")
    },
    {
      name:"register",
      path:"/register",
      component:()=>import("../views/Register.vue")
    },
  ]
})
