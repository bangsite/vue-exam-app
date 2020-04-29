<template>
  <div class="menu">
    <router-link class="menu-item" to="/home">
      <span class="menu-item-text">出前授業</span>
    </router-link>

    <router-link class="menu-item" to="/home">
      <span class="menu-item-text">産経新聞のNIE</span>
    </router-link>

    <router-link class="menu-item" to="/home">
      <span class="menu-item-text">会社見学</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "TopMenu"
    }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/top";

</style>
