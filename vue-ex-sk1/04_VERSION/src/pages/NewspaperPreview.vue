<template>
  <div class="page">
    <Header post-title="新聞ジェネレーター" />
    <div class="container">
      <section id="layout" class="preview">
        <div class="container scalable" id="preview">
          <div id="preview-page">
            <div class="layout-header preview-header">
              <!-- header date-->
              <div class="layout-header-date">
                <div class="layout-header-date-wrap">
                  <div class="layout-header-date-text">
                    <p>{{news.date}}</p>
                  </div>
                </div>
              </div>

              <!-- header logo brand-->
              <div class="layout-header-brand">
                <div class="layout-header-brand-wrap">
                  <div class="layout-header-brand-logo">
                    <div id="logoHeader">
                      <div class="left">
                        新聞
                      </div>
                      <div class="right">
											<span :class=classBinding>
												{{logoText}}
											</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- header info-->
              <div class="layout-header-info">
                <div class="layout-header-info-wrap">
                  <div class="layout-header-info-text">
                    <p class="text-horizontal">{{news.issuer}}</p>
                  </div>
                </div>
              </div>
            </div>
            <PreviewContent></PreviewContent>
            <div class="layout-footer"></div>
          </div>
        </div>
      </section>
      <div class="footer-text">
        &copy; 産業経済新聞社
      </div>

      <section id="button" class="btn btn-row btn-function">
        <a href="#" class="btn-red" id="btn-pdf" @click.prevent="downloadAsPDF">PDFとしてダウンロード</a>
        <a href="#" class="btn-blue" id="btn-image" @click.prevent="downloadAsImage">画像としてダウンロード</a>
      </section>

      <section class="btn">
        <a class="btn-blue btn-preview" @click.prevent="createNewspaper" href="#">作った新聞を保存</a>
      </section>
    </div>

    <Footer qr-text="新聞ジェネレーターは<br/>こちらからアクセス出来ます" />
  </div>
</template>

<script>
  import PreviewContent from '../components/newspaperpreview/Content'
  import NewspaperMixin from '../mixins/newspaper'

  // supporter
  import defaultLogo from '../assets/img/logos/logo-sankei-main.png'

  import jsPDF from "jspdf"
  import domToImage from 'dom-to-image'

  export default {
    name: "NewspaperPreview",
    components: {
      PreviewContent
    },
    data() {
      return {
        postData: {
          content_url: ''
        },
        logoUrl: defaultLogo,
        logoTextNum: 1
      }
    },
    mixins: [NewspaperMixin('preview')],
    computed: {
      news() {
        return JSON.parse(sessionStorage.getItem('newspaper')) || {}

      },
      logoText() {
        return localStorage.getItem('logoTxt')
      },
      classBinding: function () {
        switch (this.logoText.length) {
          case 1:
            return 'one';
            break;
          case 2:
            return 'two';
            break;
          case 3:
            return 'three';
            break;
          default:
            return 'four';
            break;
        }
      },
    },
    mounted() {
      if (this.new) {
        let inputLength = this.news.title.length,
          scaleY = inputLength > 8 ? 1.7 : 1.5,
          containerWidth = document.getElementsByClassName('layout-main-title')[0].offsetWidth,
          fontSize = containerWidth / inputLength > 180 ? 180 : containerWidth / inputLength
        document.getElementById('main-title').style.cssText = 'font-size: ' + fontSize +
          'px; transform: translate(-50%, -50%) scaleY(' + scaleY + ')'
        let parent = document.getElementById('main-title').parentElement
        parent.style.height = 300 + 'px';
      }
    },
    methods: {

      //Download PDF
      downloadAsPDF() {
        const imgTitle = this.news.title;
        domToImage.toPng(document.getElementById('preview'), {
          style: {
            'transform': 'scale(1)',
            'transform-origin': 'top left',// use original height of DOM element
          }
        }).then(function (dataUrl) {
          const img = new Image();
          img.src = dataUrl;

          const pdf = new jsPDF();
          pdf.addImage(
            img,
            'PNG',
            0,
            0,
            pdf.internal.pageSize.getWidth(),
            pdf.internal.pageSize.getHeight()
          );

          pdf.save(imgTitle + '.pdf');
        }).catch(function (e) {
          console.log(e);
        })

      },
      downloadAsImage() {
        const imgTitle = this.news.title;
        domToImage.toPng(document.getElementById('preview'), {
          style: {
            'transform': 'scale(1)',
            'transform-origin': 'top left',// use original height of DOM element
          }
        })
          .then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = imgTitle;
            link.href = dataUrl;
            link.click();
          })
          .catch(function (e) {
            console.log(e);
          })

      },
      createNewspaper() {
        const self = this;

        domToImage.toJpeg(document.getElementById('preview'), {
          style: {
            'transform': 'scale(1)',
            'transform-origin': 'top left',// use original height of DOM element
          }
        }).then((dataUrl) => {
          self.postData.content_url = dataUrl;
          return this.postNews(self.postData)
        }).then(() => this.$router.push({name: 'Page'}))
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
      },
      setFontSize() {
        if (this.newspaper['title']) {
          let inputLength = this.newspaper['title'].length,
            scaleY = inputLength > 8 ? 1.7 : 1.5,
            containerWidth = document.getElementsByClassName('layout-main-title')[0].offsetWidth,
            fontSize = containerWidth / inputLength > 180 ? 180 : containerWidth / inputLength
          document.getElementById('main-title').style.cssText = 'font-size: ' + fontSize +
            'px; transform: translate(-50%, -50%) scaleY(' + scaleY + ')'

        }
      },

    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/styles/pages/preview";

  .layout {
    &-header {
      background: url('../assets/img/bg-header.png');
    }
  }

  .page {
    .header {
      margin: 0 0 18px;
    }

    .btn {
      a {
        margin-bottom: 20px;
        width: 300px;
      }
    }
  }

  .layout-main-title-wrap {
    height: 100%;
  }

  .container {
    .preview {
      width: 1495px;
      max-width: 1495px;
      margin: 0 auto 10px;

      .layout-header-date-text {
        width: 100%;

        p {
          font-family: 'Noto Serif JP', serif;
        }
      }

      .layout-header-info-text {
        p {
          color: #000;
        }
      }

    }

    .layout {
      &-header {
        background-color: #F2F4F3;

      }

      &-main {
        &-title {
          height: auto;
        }
      }

      &-footer {
        display: flex;
        text-align: center;
        justify-content: space-between;
        font-size: 28px;
        color: #373A3C;
        font-weight: bold;
        border-bottom: 9px solid #085282;
        padding-bottom: 32px;
      }
    }
  }

  .footer-text {
    display: block;
    margin: 0 30px 10px;
    text-align: right;
  }

  .btn {
    &-preview {
      background: #08517C;
    }
  }

  #logoHeader {
    width: 250px;
    height: 250px;
    background-color: #08517C;
    display: flex;
    margin: auto;
    font-family: "Noto Serif JP", serif;
    padding: 5px;
    box-sizing: border-box;

    div {
      width: 50%;
      height: 100%;
      color: #ffffff;
      line-height: 1;
      position: relative;
      box-sizing: border-box;
      font-weight: bold;

      &.left {
        font-size: 120px;
      }

      &.right {
        font-size: 120px;
        overflow: hidden;
      }

      span {
        position: absolute;
        height: 100%;
        width: 100%;
        transform-origin: top;
        text-orientation: upright;
        word-break: break-all;
        text-align: center;

        &.two {
          transform: scale(1.2, 1);
        }

        &.three {
          transform: scale(1.2, 0.65);
        }

        &.four {
          transform: scale(1, 0.5);
        }
      }
    }
  }
</style>
