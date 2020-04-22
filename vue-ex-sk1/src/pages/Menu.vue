<template>
  <div class="wrapper top-page">
    <div id="top">
      <top-menu />
    </div>

    <app-video />

    <div id="bottom">
      <bottom-menu />
    </div>

    <div class="wrapper-container">
      <div class="page-footer">
        <div class="btn-back">
          <router-link to="/home">
            <img src="../assets/img/icons/btn-back.png" alt="back page" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Video from "../components/common/Video";
  import TopMenu from "../components/menu/TopMenu";
  import BottomMenu from "../components/menu/BottomMenu";

  export default {
    name: "Menu",
    components: {
      topMenu: TopMenu,
      appVideo: Video,
      bottomMenu: BottomMenu
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/top";

</style>
