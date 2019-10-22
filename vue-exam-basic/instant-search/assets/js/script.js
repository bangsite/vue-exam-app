// Define a custom filter called "currency"

new Vue({
  el: '#app',
  data: {
    searchString: '',
    articles:[
      {
        'title':'What You Need To Know About CSS Variables',
        'url':'https://www.google.com/',
        'image':'../img/css-variables.jpg'
      },
      {
        'title':'Freebie: 4 Great Looking Pricing Tables',
        'url':'https://www.google.com/',
        'image':'../img/great-tables.jpg'
      },
      {
        'title':'20 Interesting JavaScript and CSS Libraries for February 2016',
        'url':'https://www.google.com/',
        'image':'../img/interesting-resources.jpg'
      },
      {
        'title':'Quick Tip: The Easiest Way To Make Responsive Headers',
        'url':'https://www.google.com/',
        'image':'../img/quick-tip-responsive.png'
      },
      {
        'title':'Learn SQL In 20 Minutes',
        'url':'https://www.google.com/',
        'image':'../img/learn-sql.png'
      },
      {
        'title':'Creating Your First Desktop App With HTML, JS and Electron',
        'url':'https://www.google.com/',
        'image':'../img/desktop-app.png'
      },

    ]
  },
  methods: {},
  // filters:{
  //  currency:function(value){
  //    return '$' + value.toFixed(2);
  //  }
  // }

});
