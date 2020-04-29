 import Vue from 'vue'
 import domToImage from 'dom-to-image'

 Object.defineProperty(Vue.prototype, '$domToImage', { value: domToImage })
