<template>
  <div class="wrapper">
    <Header post-title="新聞ジェネレーター" />

    <div class="container">
      <!-- Add your site or application content here -->
      <section class="layout" id="layout">
        <div class="layout-wrap scalable" id="layout-scale">
          <NewspaperHeader />
          <NewspaperContent ref="news" />
          <div class="layout-footer"></div>
        </div>
      </section>

      <div class="footer-text">
        &copy; 産業経済新聞社
      </div>

      <section class="btn">
        <a class="btn-blue btn-preview" @click.prevent="confirmNews" href="#">作った新聞を確認</a>
      </section>
    </div>

    <Footer qr-text="新聞ジェネレーターは<br/>こちらからアクセス出来ます" />
  </div>
</template>

<script>
  import NewspaperHeader from "../ver2/NewspaperHeader";
  import NewspaperMixin from "../../mixins/newspaper"
  import NewspaperContent from "../newspaper/Content"
  import _ from 'lodash'

  export default {
    name: "NewspaperPCInput",
    mixin:[NewspaperMixin('layout-scale')],
    components: {
      NewspaperHeader,
      NewspaperContent
    },
    data() {
      return {
        imgSrc: '',
        selected: true
      }
    },
    methods: {
      confirmNews() {
        console.log("confirmNew")
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/layout";

  .footer-text {
    display: block;
    margin: 0 30px;
    text-align: right;
  }
</style>
