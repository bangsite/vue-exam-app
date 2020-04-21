<template>
  <div class="wrapper top-page">
    <div id="top">
      <top-menu />
    </div>

    <video />

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
  import TopMenu from "../components/menu/TopMenu";
  import BottomMenu from "../components/menu/BottomMenu";
  import Video from "../components/common/Video";

  export default {
    name: "Menu",
    components: {
      topMenu: TopMenu,
      bottomMenu: BottomMenu,
      video: Video
    }
  }
</script>

<style scoped>
  @import "../assets/styles/pages/_top.scss";
</style>
