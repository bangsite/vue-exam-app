<template>
  <div>
    <div class="layout-main">
      <!--main title-->
      <div class="layout-main-wrap">
        <p class="label">主見出しを入力（７〜１０文字）</p>
        <div class="layout-main-title">
          <div class="layout-main-title-wrap" :class="{'layout-main-title-wrap-black':isBlack}">
            <input
              type="text"
              maxlength="10"
              v-model="headerTitle"
              placeholder="主見出しを入力（７〜１０文字）"
              id="main-title"
              @keyup="setFontSize"
            />
          </div>
        </div>
      </div>
      <div class="layout-main-title-change" id="changeBackground" @click="changeBackground">背景を変更</div>
      <div class="layout-maincontent">
        <div class="layout-maincontent-left">
          <div class="layout-image">
            <div class="layout-image-wrap">
              <!--Event handler img-->
              <div class="layout-image-load">
                <p class="label">写真をアップロード</p>
                <form class="layout-upload-form">
                  <!--upload image-->
                  <input id="file-upload"
                         type="file"
                         name="file-upload"
                         ref="input"
                         accept="image/*"
                         @change="setImage" />
                  <label for="file-upload" class="custom-file-upload">写真を選ぶ</label>
                  <vue-cropper
                    v-if="imgSrc"
                    ref="cropper"
                    class="crop-wrap"
                    :src="imgSrc"
                    :autoCropArea="1"
                    :viewMode="3"
                    :modal="false"
                    :cropBoxMovable="true"
                    :cropBoxResizable="true"
                    :guides="false"
                    :restore="false"
                    :hightlight="false"
                    :background="false"
                    :zoomable="true"
                    :toggleDragModeOnDblclick="false"
                  ></vue-cropper>
                  <!--list button event handler image -->
                  <div :class="{ hidden: selected }" id="btn-editor">
                    <div class="btn-editor-img">
                      <!--Zoom delete image-->
                      <div class="btn" id="reset" @click="resetImage">
                        <span>リセット</span>
                        <i class="fa fa-repeat" />
                      </div>
                      <!--Upload new image-->
                      <label class="btn" for="file-upload" id="upload">
                        <span>アップロード</span>
                        <i class="fa fa-upload" />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <!--/.Event handler img-->

              <!--Image text summary-->
              <div class="layout-image-summary">
                <p class="label">リード文を入力（約１９０文字）</p>
                <div class="layout-image-summary-wrap">
                  <div class="layout-image-summary-text">
                    <InputText
                      @setInputValue="setInputValue"
                      :title="newspaper.leadSentence"
                      :placeholder="`リード文を入力（約 <span class='num'>１９０</span>文字）`"
                      :max-length="190"
                      :field-name="'leadSentence'"
                      :text-horizontal="false"
                    />
                  </div>
                </div>
              </div>
              <!--/.Image text summary-->

              <!--Caption to image-->
              <div class="layout-image-caption">
                <p class="label">絵解きを入力（４０文字以内）</p>
                <div class="layout-image-caption-wrap">
                  <div class="layout-image-caption-text">
                    <InputText
                      @setInputValue="setInputValue"
                      :title="newspaper.imgTitle"
                      :placeholder="`絵解きを入力（４０文字以内）`"
                      :max-length="40"
                      :field-name="'imgTitle'"
                      :text-horizontal="true"
                    />
                  </div>
                </div>
              </div>
              <!--/.Caption to image-->
            </div>
          </div>
          <!-- Content text 500 -->
          <div class="layout-content-text">
            <p class="label">記事を入力（約５４０文字）</p>

            <div class="layout-content-text-wrap">
              <InputText
                @setInputValue="setInputValue"
                :title="newspaper.articleTitle"
                :placeholder="`記事を入力（約 <span class='num'>５４０</span>文字）`"
                :max-length="540"
                :field-name="'articleTitle'"
                :text-horizontal="''"
                id="main-content"
              />
            </div>
          </div>
        </div>
        <div class="layout-maincontent-right">
          <div class="layout-content-right-wrap-1">
            <p class="label">見出しを入力（７〜１０文字）</p>
            <div class="layout-subtitle-wrap-1">
              <InputText
                @setInputValue="setInputValue"
                :title="newspaper.headline"
                :placeholder="`主見出しを入力（７〜 <span class='num'>１０</span>文字）`"
                :max-length="10"
                :field-name="'headline'"
                :text-horizontal="false"
              />
            </div>
          </div>

          <div class="layout-content-right-wrap-2">
            <p class="label">袖見出しを入力（７〜８文字）</p>

            <div class="layout-subtitle-wrap-2">
              <InputText
                @setInputValue="setInputValue"
                :title="newspaper.sleeveTitle"
                :placeholder="`見出しを入力（７〜８文字）`"
                :max-length="8"
                :field-name="'sleeveTitle'"
                :text-horizontal="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click.prevent="rotateNumber" id="rotate" @focus.prevent v-if="mainContentFocus === true">縦中横</button>
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
        mainContentFocus: true,
        isBlack: false
      }
    },
    computed: {
      headerTitle: {
        get() {
          const data = JSON.parse(sessionStorage.getItem('newspaper')) || {}
          console.log(data)
          return 'title' in data ? data.title : ''
        },
        set(value) {
          let newspaper = JSON.parse(sessionStorage.getItem('newspaper')) || {}

          newspaper.title = value;
          this.newspaper = newspaper;
        }
      },
      newspaper: {
        get() {
          return JSON.parse(sessionStorage.getItem('newspaper')) || {}
        },
        set(value) {
          console.log(value)
          sessionStorage.setItem('newspaper', JSON.stringify(value))
        }
      },
      beforeRouteLeave(to, from, next) {
        console.log(to.name);
        if (to.name !== 'NewspaperPrivew') {
          sessionStorage.removeItem('newspaper')
        }
        next()
      }

    },
    create() {
      const hasSSNewsPaper = _.key(this.newspaper).length > 0;
      console.log(hasSSNewsPaper)
      if (hasSSNewsPaper) {
        this.imgSrc = this.newspaper.cropImg
      }
    },
    mounted() {
      this.setFontSize();
      if (this.imgSrc) {
        this.selected = false;
      }

      if (sessionStorage.getItem('backgroundBlack')) {
        this.isBlack = JSON.parse(sessionStorage.getItem('backgroundBlack'))
      }
    },
    methods: {
      setFontSize() {
        if (this.newspaper['title']) {
          let inputLength = this.newspaper['title'].length;
        }
      },
      setInputValue(elHTML, valName) {
        let newspaper = JSON.parse(sessionStorage.getItem('newspaper')) || {}
        newspaper[valName] = elHTML;
        this.newspaper = newspaper
      },
      setImage(e) {
        if (e.target.files.length > 0) {
          const file = e.target.files[0];
          if (file.type.indexOf('image/') === -1) {
            alert("Please select an image file");
            return
          }

          if (typeof FileReader === 'function') {
            const reader = new FileReader();

            reader.onload = ev => {
              this.imgSrc = ev.target.result;
              this.originalSrc = this.imgSrc;
              this.selected = false;

              // rebuild cropperjs with the updated source
              this.$refs.cropper.replace(ev.target.result)
            };
            reader.readAsDataURL(file)
          } else {
            alert('Sorry, FileReader API not supported')
          }
        }
      },
      handleCropImg() {
        const cropCanvas = this.$refs.cropper.getCroppedCanvas();
        if (cropCanvas) {
          this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
        }
        let newspaper = JSON.parse(sessionStorage.getItem('newspaper')) || {};

        newspaper.cropImg = this.cropImg
        this.newspaper = newspaper
      },
      b64toBlob(dataURI) {
        let byteString = atob(dataURI.split(',')[1]);
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);

        }
        return new Blob([ab], {type: 'image/png'})
      },

      resetImage() {
        this.$refs.cropper.reset();
      },
      setFontSize() {

      },
      selectHTML() {

      },
      rotateNumber() {

      },
      changeBackground() {
        this.isBlack = !this.isBlack
        sessionStorage.setItem('backgroundBlack', this.isBlack)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/layout";
  @import "src/assets/styles/pages/newspaper";

  #rotate {
    font-size: 20px;
    position: fixed;
    top: 60%;
    background-color: #d7d7d7;
    padding: 10px;
    right: 0;
    cursor: pointer;
    z-index: 3;
  }

  .layout-main-title-change {
    position: absolute;
    top: 0;
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #06517B;
    color: #06517B;
    font-size: 20px;
  }

  #changeBackground {
    position: absolute;
    top: 0;
    padding: 10px;
    background-color: #fff;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #06517B;
    color: #06517B;
    font-size: 20px;
  }


  .layout-main-title-wrap-black {
    background: #000000;

    input[type="text"] {
      color: #ffffff;
    }
  }

</style>
