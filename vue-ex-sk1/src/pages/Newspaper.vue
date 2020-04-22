<template>
  <div class="page">
    <Header post-title="新聞ジェネレーター" />

    <div class="container">
      <!-- Add your site or application content here -->
      <section class="layout" id="layout">
        <div class="layout-wrap scalable" id="layout-scale">
          <div class="layout-footer"></div>
        </div>
      </section>

      <div class="footer-text">
        &copy; 産業経済新聞社
      </div>

      <section class="btn">
        <!--        <a class="btn-blue btn-preview" @click.prevent="confirmNews" href="#">作った新聞を確認</a>-->
      </section>
    </div>

    <Footer qr-text="新聞ジェネレーターは<br/>こちらからアクセス出来ます" />
  </div>
</template>

<script>
  import Header from "../components/common/Header";
  import Footer from "../components/common/Footer";

  export default {
    name: "Newspaper",
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>

</style>
