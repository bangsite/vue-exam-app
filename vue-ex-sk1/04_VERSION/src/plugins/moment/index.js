import Vue from 'vue'
import moment from 'moment'

moment.locale('ja')

Object.defineProperty(Vue.prototype, '$moment', {
  value: moment
})
