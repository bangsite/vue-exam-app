<template>
  <div class="menu">
    <router-link class="menu-item" to="/home">
      <span class="menu-item-text">新聞<br>ジェネレーター</span>
    </router-link>

    <router-link class="menu-item" to="/home">
      <span class="menu-item-text">ワークシート</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "BottomMenu"
  }
</script>

<style scoped lang="scss">

  /*.top-page {*/
  /*  #bottom {*/
  /*    bottom: 10%;*/
  /*  }*/
  /*}*/

</style>
