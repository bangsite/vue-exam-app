<template>
      <div class="layout-main">
        <!--main title-->
        <div class="layout-main-wrap">
          <div class="layout-main-title">
            <div class="layout-main-title-wrap">
              <p id="main-title">{{news.title}}</p>
            </div>
          </div>
        </div>
        <div class="layout-maincontent">
          <div class="layout-maincontent-left">
            <div class="layout-image">
              <div class="layout-image-wrap">
                <!--Event handler img-->
                <div id="bg-layout-img" class="layout-image-load" :style="{ 'background-image': 'url(' + news.cropImg + ')' }"></div>
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
  import NewspaperMixin from "../../mixins/newspaper";
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "PreviewContent",

    components: {},

    data() {
      return {
        postData: {
          content_url: ''
        },
        news: ''
      }
    },

    mixins: [NewspaperMixin("preview")],

    computed: {
      ...mapGetters['question', ['item']],
    },

    mounted() {
      this.news = JSON.parse(sessionStorage.getItem("newspaper")) || {};
    },

    methods: {
      ...mapActions('newspaper', ['postNews']),
    }
  };
</script>

<style scoped lang="scss">
  .layout {
    margin: auto;

    &-main {
      padding-right: 32px;
      padding-left: 32px;

      &-title {
        border: none;
        width: 100%;
        height: 300px;
        flex-basis: 100%;
        font-weight: 700;
        overflow: hidden;
        -ms-flex-preferred-size: 100%;
        z-index: 0;
        margin: 0;
        position: relative;

        p {
          font-size: 175px;
          //width: 100%;
          width: 1495px;
          margin: auto;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          // height: 201px;
          overflow: hidden;
        }
      }
    }

    &-maincontent {
      @include flex;
      flex-direction: row;
      align-items: stretch;
      margin-bottom: 33px;
      width: 100%;

      &-left {
        order: 0;
        width: 72%;
        margin-right: 5px;

        .layout-image {
          position: relative;
        }

        //.layout-image-wrap {
        //  width: 90%;
        //  margin-right: 4px;
        //}

        .layout-image-load {
          background-size: cover;
          background-repeat: no-repeat;
          border: none;
          margin-bottom: 5px;
          //width: 88.4%;
          order: 0;
          width: 918px;
          height: 975px;

          @media #{$info-phone} {
            //padding-top: 100%;
          }
        }

        .layout-image-summary {
          margin-bottom: 0;
          position: absolute;
          right: 0;
          top: 0;
          //height: 95.5%;
          height: 975px;
          //width: 9.4%;
          width: 102px;

          &-wrap {
            border: none;
            height: 975px;
            .layout-image-caption-text {
              p {
                font-size: 1.5em;
              }
            }
          }

          &-text {
            width: 100%;
            height: 100%;
            //left:0;
            overflow: hidden;

            p.text-vertical {
              margin: 0;
              -ms-writing-mode: tb-rl;
              -webkit-writing-mode: vertical-rl;
              writing-mode: vertical-rl;
              text-orientation: upright;
              line-height: 1.2;
              // font-size: 20px;
              letter-spacing: 0;
              font-size: 22px;
            }
            p.text-horizontal {
              font-size: 1.5em;
            }
          }
        }

        .layout-image-caption {
          bottom: 0;
          height:30px;
          margin-bottom: 0;

          &-wrap {
            border: none;
          }

          &-text {
            width: 100%;
            //top: 27px;
            top: 14px;
            position: relative;

            p {
              height: 30px;
              letter-spacing: 2.5px;
              font-size: 20px;
              word-break: break-all;
            }
          }
        }


        .layout-content-text {
          height: 350px;
          max-height: 350px;
          position: relative;
          overflow: hidden;

          &-wrap {
            border: none;
            padding: 0;
            height: 350px;
            p {
              margin: 10px 0 0;
              height: 349px;
              width: 100%;
              max-height: 350px;
              word-break: break-all;
              line-height: 1.3;
              width: 100%;
              //line-height: 27px;
              color: #373A3C;
              overflow: unset;
              letter-spacing: 0;
              -ms-writing-mode: tb-rl;
              -webkit-writing-mode: vertical-rl;
              writing-mode: vertical-rl;
              text-orientation: upright;
              font-size: 1.6em;
            }
          }
        }
      }

      &-right {
        @include flex;
        width: 28%;
        flex-direction: row;
        margin-bottom: 0;

        .layout-content-right-wrap-1, .layout-content-right-wrap-2 {
          border: none;
          height: 1375px;

        }

        .layout-content-right-wrap-1 {
          //height: 100%;
          width: 35%;
          border-radius: 4px;
          position: relative;
          order:0;
          overflow: hidden;
        }

        .layout-content-right-wrap-2 {
          width: 48%;
          //height: 100%;
          position: relative;
          overflow: initial;
          border-radius: 4px;
          margin-left: 10px;
        }

        .layout-subtitle-wrap-1, .layout-subtitle-wrap-2 {
          p {
            color: #373A3C;
            letter-spacing: 0;
            margin: 0;
            height: 1375px;

          }
        }

        .layout-subtitle-wrap-1 {
          border: 0;
          overflow: hidden;
          height: 100%;

          p {
            line-height: 1;
            font-size: 120px;
            width: 100%;
            word-break: break-all;
            writing-mode: vertical-rl;
            -ms-writing-mode: vertical;
            /* for IE */
            -webkit-writing-mode: vertical;
            /* for Webkit */
            text-align: center;
            text-orientation: upright;
            -webkit-text-orientation: upright; /* for Webkit */
            margin-left: 10px;

          }
        }

        .layout-subtitle-wrap-2 {
          height: 100%;
          border: none;
          margin-right: 0;

          p {
            font-size: 170px;
            width: 100%;
            line-height: 1;
            word-break: break-all;
            -ms-writing-mode: vertical-rl;
            /* for IE */
            -webkit-writing-mode: vertical-rl;
            /* for Webkit */
            writing-mode: vertical-rl;
            text-align: left;
            text-orientation: upright;
            -webkit-text-orientation: upright; /* for Webkit */
            display: flex;
            align-items: flex-start;
          }
        }
      }
    }
  }
</style>
