// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// plugins
import './plugins/globalComponent'
import './plugins/moment'
import './plugins/lodash'
import './plugins/domtoimage'
import './plugins/jspdf'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')