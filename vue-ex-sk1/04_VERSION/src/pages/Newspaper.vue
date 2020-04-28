<template>
  <div class="page">
    <Header post-title="新聞ジェネレーター" />
    <!-- Add your site or application content here -->
    <NewspaperPCInput ref="confirm" />

    <section class="btn">
      <a class="btn-red btn-preview" @click.prevent="confirmNews" href="#">作った新聞を確認</a>
      <a class="btn-blue" href="#">トップに戻る</a>
    </section>
    <footer>
      <p>©2020 The Sankei Shimbun All rights reserved.</p>
    </footer>
    <!-- <Footer qr-text="新聞ジェネレーターは<br/>こちらからアクセス出来ます" />-->
  </div>
</template>

<script>
  import NewspaperPCInput from "../components/newspaper/NewspaperPCInput";

  export default {
    name: "Newspaper",
    components: {
      NewspaperPCInput
    }, methods: {
      confirmNews() {
        this.$refs.confirm.confirmNews();
      }
    }
  }
</script>

<style scoped lang="scss">

  .btn-blue {
    background-color: #06517b;
  }

  .btn {
    a {
      width: 300px;
    }
  }

  footer p {
    font-size: 1.8vw;
    text-align: center;
    color: #000000;
    font-weight: bold;
    margin: 0;
  }
</style>
