new Vue({
  el: '#app',
  data: function () {
    return {
      visible: false,
      activeIndex: '1',
      active:'home',
      
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    makeActive: function (item) {
      this.active = item;
    }
  }

});