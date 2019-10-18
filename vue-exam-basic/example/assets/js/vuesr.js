// new Vue({
//   el: '#obj',
//   data: {
//     count: 0,
//     x: 0,
//     y: 0,
//   },
//   methods: {
//     tangGiaTri: function () {
//       this.count++;
//     },
//     tinhToaDo: function (event) {
//       this.x = event.clientX;
//       this.y = event.clientY;
//     },
//     banPhim:function () {
//       alert("Hello window!!");
//     }
//   },
// });

new Vue({
  el: '#app',
  data: {
    dataValue: 'This is content',
    name: 'Black Key',
    a:0,
    b:0,
  },
  computed:{
    tanga:function () {
      console.log("Computed");
      console.log("Goi function a");
      return this.a;
    },
    tangb:function () {
      console.log("Computed");
      console.log("Goi function b");
      return this.b;
    }
  },
  methods: {
    changeValue: function (event) {
      this.dataValue = event.target.value;
    },
    tangaf:function () {
      console.log("Goi function a");
      return this.a;
    },
    tangbf:function () {
      console.log("Goi function b");
      return this.b;
    }
  },
});
