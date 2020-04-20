<template>
  <div id="movie">
    <router-link to="/Menu">
      <div class="cover" />
    </router-link>

    <video width="100%" controls autoplay loop>
      <source src="../../assets/video/Japan-Cherry-Blossoms.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
  export default {
    name: "Video"
  }
</script>

<style scoped lang="scss">
  #movie {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    iframe {
      height: 34vh;
      width: 100%;
      z-index: -1;
    }

    .cover {
      width: 100%;
      height: 100%;
      cursor: pointer;
      position: absolute;
      z-index: 1;
      display: block;
    }
  }
</style>
