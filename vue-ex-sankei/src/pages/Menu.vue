<template>
  <div class="wrapper top-page">
    <div id="top">
      <app-top-menu />
    </div>

    <app-video />

    <div id="bottom">
      <app-bottom-menu />
    </div>

    <div class="wrapper-container">
      <div class="page-footer">
        <div class="btn-back">
          <router-link to="/page">
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
      appVideo: Video,
      appTopMenu: TopMenu,
      appButtomMenu: BottomMenu,

    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/top.scss";
</style>
