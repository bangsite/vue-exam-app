<template>
    <div class="page">
      <h1>Home</h1>
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

<style scoped>

</style>
