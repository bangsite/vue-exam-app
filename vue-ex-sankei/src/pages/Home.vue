<template>
  <div>a</div>
<!--  <div class="page">-->
<!--    <TopSlider/>-->
<!--    <Video/>-->
<!--    <BottomSlider/>-->
<!--  </div>-->
</template>

<script>
  import TopSlider from "../components/top/TopSlider";
  import Video from "../components/common/Video";
  import BottomSlider from "../components/top/BottomSlider";

  export default {
    name: "Home",
    components: {
      TopSlider,
      Video,
      BottomSlider,
    }
  }
</script>

<style scoped>
  /*@import "src/assets/styles/pages/_top.scss";*/

</style>
