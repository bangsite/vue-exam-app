import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { CHECK_AUTH } from './store/actions.type';
import ApiService from './services/api.service.js';

Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;
ApiService.init();

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next),
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');