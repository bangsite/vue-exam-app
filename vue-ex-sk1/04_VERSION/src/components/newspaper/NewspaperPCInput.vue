<template>
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
  </div>
</template>

<script>
  import NewspaperHeader from "../../components/newspaper/NewspaperHeader";
  import NewspaperContent from "../newspaper/Content"

  // Supporter
  import NewspaperMixin from "../../mixins/newspaper"
  import _ from 'lodash'

  export default {
    name: "NewspaperPCInput",
    mixins: [NewspaperMixin('layout-scale')],
    components: {
      NewspaperHeader,
      NewspaperContent
    },
    computed: {
      newspaper() {
        return JSON.parse(sessionStorage.getItem('newspaper')) || {}
      }
    },
    data() {
      return {
        imgSrc: '',
        originalSrc: '',
        cropImg: '',
        selected: true,
        mainTitleLength: '',
        mainContentFocus: true
      }
    },
    created() {
    },
    methods: {
      confirmNews() {
        this.$refs.news.handleCropImg()
        this.$router.push({name: 'NewspaperPreview'})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/layout";
  @import "src/assets/styles/pages/newspaper";

  .footer-text {
    display: block;
    margin: 0 30px;
    text-align: right;
  }
</style>
