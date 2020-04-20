<template>
  <div class="menu">
    <router-link class="menu-item" to="/classvisit">
      <span class="menu-item-text">出前授業</span>
    </router-link>

    <router-link class="menu-item" to="/nieintro">
      <span class="menu-item-text">産経新聞のNIE</span>
    </router-link>

    <router-link class="menu-item" to="/companyvisit">
      <span class="menu-item-text">会社見学</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "TopMenu"
    }
</script>

<style scoped>
  @import "src/assets/styles/pages/_top.scss";

</style>
