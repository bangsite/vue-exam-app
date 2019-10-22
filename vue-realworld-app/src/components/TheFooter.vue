<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{name:'home',params:{}}">conduit</router-link>
    </div>
    <span class="attribution">
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
