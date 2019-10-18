new Vue({
  el: '#app',
  data: {
    showToolTip: false,
    textContent: 'Click Edit Me!!!',
  },
  methods: {
    hideToolTip: function () {
      this.showToolTip = false;
    },
    toggleToolTip: function () {
      this.showToolTip = !this.showToolTip;
    }
  }

});