import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from './services/api.service.js';
import { CHECK_AUTH } from './store/actions.type';

ApiService.init();

Vue.config.productionTip = false;

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next),
);
// Vue.use (axios)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
