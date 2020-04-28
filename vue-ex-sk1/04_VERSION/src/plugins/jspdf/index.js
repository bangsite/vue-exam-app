import Vue from 'vue'
import jspdf from 'jspdf'

Object.defineProperty(Vue.prototype, '$jspdf', { value: jspdf })
