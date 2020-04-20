<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Index",
    created () {
      console.log('a')
    }
  }
</script>

<style scoped >

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
</style>
