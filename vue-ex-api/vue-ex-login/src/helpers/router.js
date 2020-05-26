import Vue from "vue";
import Router from "vue-router";

import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/Register";

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/register",
      component: RegisterPage
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
