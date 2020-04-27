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
        console.log("confirmNew")
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/layout";

</style>
