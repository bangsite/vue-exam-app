<template>
  <div class="page">
    <h2>産経新聞の考えるNIE</h2>

    <video />

    <Footer qr-text="産経新聞の教育コンテンツは</br>こちらからアクセス出来ます" />
  </div>
</template>

<script>
  import Video from "../components/common/Video";
  import Footer from "../components/common/Footer";

  export default {
    name: "NieIntro",
    components: {
      Video, Footer

    }
  }
</script>

<style scoped>

</style>
