<template>
  <div class="layout-main">
    <!--main title-->
    <div class="layout-main-wrap">
      <div class="layout-main-title">
        <div class="layout-main-title-wrap" :class="{'layout-main-title-wrap-black': blackBG}">
          <p id="main-title">{{news.title}}</p>
        </div>
      </div>
    </div>
    <div class="layout-maincontent">
      <div class="layout-maincontent-left">
        <div class="layout-image">
          <div class="layout-image-wrap">
            <!--Event handler img-->
            <div id="bg-layout-img" class="layout-image-load"
                 :style="{ 'background-image': 'url(' + news.cropImg + ')' }"></div>
            <!--/.Event handler img-->

            <!--Caption to image-->
            <div class="layout-image-caption">
              <div class="layout-image-caption-wrap">
                <div class="layout-image-caption-text">
                  <p class="text-horizontal" v-html="news.imgTitle"></p>
                </div>
              </div>
            </div>
            <!--/.Caption to image-->
          </div>

          <!--Image text summary-->
          <div class="layout-image-summary">
            <div class="layout-image-summary-wrap">
              <div class="layout-image-summary-text">
                <p class="text-vertical" v-html="news.leadSentence"></p>
              </div>
            </div>
          </div>
          <!--/.Image text summary-->
        </div>

        <!-- Content text 500 -->
        <div class="layout-content-text">
          <div class="layout-content-text-wrap">
            <p v-html="news.articleTitle"></p>
          </div>
        </div>
      </div>
      <div class="layout-maincontent-right">
        <div class="layout-content-right-wrap-1">
          <div class="layout-subtitle-wrap-1">
            <p v-html="news.headline"></p>
          </div>
        </div>

        <div class="layout-content-right-wrap-2">
          <div class="layout-subtitle-wrap-2">
            <p class="layout-subtitle">
              <span v-html="news.sleeveTitle"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NewspaperMixin from '../../mixins/newspaper'

  export default {
    name: "Content",
    data(){
      return {
        postData:{
          content_url:''
        },
        news:''

      }
    },
    mixins:[NewspaperMixin("preview")],

    computed:{
      blackBG(){
        return JSON.parse(sessionStorage.getItem('backgroundBlack'))
      }
    },
    mounted(){
      this.news=JSON.parse(sessionStorage.getItem('newspaper'))||{}
    },
    methods:{
      
    }
  }
</script>

<style scoped>

</style>
