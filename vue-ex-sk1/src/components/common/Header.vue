<template>
  <h2 class="header">{{postTitle}}</h2>
</template>

<script>
  export default {
    name: "Header",
    props: ['postTitle']
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/layout/header";
</style>
