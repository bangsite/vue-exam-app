<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    created() {
      debugger
    }
  }
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap');
  @import url('http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css');

  html, body {
    font-family: 'Noto Sans JP', sans-serif;
  }

  a {
    color: inherit;
  }
</style>
