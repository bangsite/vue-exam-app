// Define a custom filter called "currency"

Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2);
});

 new Vue({
  el: '#app',
  data: {
    services: [
      {
        name: 'Web Development',
        price: 300,
        active: true,
      }, {
        name: 'Design',
        price: 400,
        active: false,
      }, {
        name: 'Integration',
        price: 250,
        active: false,
      }, {
        name: 'Tranning',
        price: 250,
        active: false,
      },
    ],
  },
    methods: {
      toggleActive: function (event) {
        event.active = !event.active;
      },
      total: function () {
        let total = 0;
        this.services.forEach(function (event) {
          if (event.active) {
            total += event.price;
          }
        });
        return total;
      },
    },
   // filters:{
   //  currency:function(value){
   //    return '$' + value.toFixed(2);
   //  }
   // }

});
