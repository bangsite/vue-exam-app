<template>
<footer>
  <div class="container">
    <router-link>conduit</router-link>
  </div>
  <span class="attribution" :to="{name:'home',params:{}}">
    An interactive learning project from
        <a rel="noopener noreferrer" target="blank" href="#"
        >Vuejs@2019</a
        >. Code &amp; design licensed under MIT.
  </span>
</footer>
</template>

<script>
  export default {
    name: 'RwvFooter',
  };
</script>

<style scoped>

</style>
