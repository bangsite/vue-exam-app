// import Core
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// plugins
import './plugins/globalComponent'
import './plugins/validator'
import './plugins/moment'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')