<template>
  <div id="movie">
    <router-link to="/menu">
      <div class="cover" />
    </router-link>

    <video width="100%" controls  loop>
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

</style>
