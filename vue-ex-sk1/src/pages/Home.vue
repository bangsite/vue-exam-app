<template>
    <div class="top-page">
      <TopSlider />
      <Video />
      <BottomSlider />
    </div>
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

<style scoped lang="scss">
@import "../assets/styles/pages/_top.scss";
</style>
