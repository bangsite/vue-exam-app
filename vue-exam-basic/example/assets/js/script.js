let app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!',
  },
});

let app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on' + new Date().toLocaleTimeString(),
  },
});

let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  },
});

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'Learn Javascript'},
      {text: 'Learn Vue'},
      {text: 'Build something awesome'},
    ],
  },
});

let app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
});

let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!',
  },
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>',
});
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id: 0, text: 'Vegetables'},
      {id: 1, text: 'Cheese'},
      {id: 2, text: 'Whatever else humans are supose to eat '},
    ],
  },
});

// var obj = {
//   foo: 'bar',
// };
// Object.freeze(obj);
// new Vue({
//   el: '#app',
//   data: obj,
// });

var data = {a: 1};
var vm = new Vue({
  el: '#example',
  data: data,
});

vm.$data === data;
vm.$el === document.getElementById('app');
vm.$watch('a', function (newValue, oldValue) {
  return vm.a;
});

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
  },

  // firstName: function (val) {
  //   this.fullName = val + ' ' + this.lastName;
  // },
  // lastName: function (val) {
  //   this.fullName = this.firstName + ' ' + val;
  // },
  computed: {
    fullName: {
      // return this.firstName + ' ' + this.lastName;

      get: function () {
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
});

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give an answer until you ask a question!  ',
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing ...';
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {

      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions ususally contain a question mark';
        return;
      }
      this.answer = 'Think....';
      var vm = this;
      axios.get('https://yesno.wtf/api').then(function (reponse) {
        vm.answer = _.capitalize(reponse.data.answer);
      }).catch(function (error) {
        vm.answer = 'Error! Could not reach the API. ' + error;
      });
    },
  },
});

