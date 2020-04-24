<template>
  <div>
    <div class="layout-main">
      <!--main title-->
      <div class="layout-main-wrap">
        <p class="label">主見出しを入力（７〜１０文字）</p>
        <div class="layout-main-title">
          <div class="layout-main-title-wrap">
            <input
              type="text"
              maxlength="10"
              v-model="newspaper['title']"
              placeholder="主見出しを入力（７〜１０文字）"
              id="main-title"
              @keyup="setFontSize"
            />
          </div>
        </div>
      </div>
      <div class="layout-maincontent">
        <div class="layout-maincontent-left">
        </div>
        <div class="layout-maincontent-right">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // Component
  import InputText from '../../components/newspaper/InputText';

  // Supporter
  import VueCropper from 'vue-cropperjs'
  import 'cropperjs/dist/cropper.css'
  import NewspaperMixin from '../../mixins/newspaper'
  import _ from 'lodash'

  export default {
    name: "Content",

    mixins: [NewspaperMixin('layout-scale')],

    components: {
      VueCropper,
      InputText
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
    computed() {
      newspaper()
      {
        return JSON.parse(sessionStorage.getItem('newspaper')) || {}
      }
    },
    create() {

    },
    mounted() {
    },
    methods: {
      setFontSize() {
        if (this.newspaper['title']) {
          let inputLength = this.newspaper['title'].length;
          console.log(inputLength)
        }
      }
    }
  }
</script>

<style scoped>

</style>
