<template>
  <div>
    <p
      :class="[textHorizontal ===''? '':textHorizontal?'text-horizontal':'text-vertical',
      isMobile===true? 'mobile':'',
      isSummary===true? 'summary':'',
      isContent===true?'content':'']"
      contenteditable="true"
      @keyup="hidePlaceholder"
      @keyup.enter.prevent="editableContentChanged($event,maxLength,fieldName)"
      @blur="editableContentChanged($event,maxLength,fieldName)"
      @keydown.enter.prevent="addNewLine($event)"
      @keydown="arrowHandle($event)"
      v-html="title"
    >
    </p>
    <div class="place-holder place-holder-vertical"
         :class="[title && title !== '' ? 'hide' : '']"
         v-html="placeholder"
    ></div>
  </div>
</template>

<script>
  export default {
    name: "InputText",
    props: {
      title: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      fieldName: {
        type: String,
        default: ''
      },
      maxLength: {
        type: Number,
        default: 0
      },
      textHorizontal: {
        type: Boolean,
        default: false
      },
      isMobile: {
        type: Boolean,
        default: false
      },
      isSummary: {
        type: Boolean,
        default: false
      },
      isContent: {
        type: Boolean,
        default: false
      },

    },
    methods: {
      hidePlaceholder(e) {

      },
      editableContentChanged() {

      },
      arrowHandle(e) {

      },
      moveCarret() {

      },
      addNewLine() {

      }
    }
  }
</script>

<style scoped lang="scss">

    .layout {
      &-header {

      }

      &-main {
        .place-holder-vertical {
          writing-mode: vertical-rl;
        }
      }

      &-maincontent {

        &-left {

          .layout-image {

            &-summary {

              &-text {

                p.text-vertical {
                  margin: 0;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  height: 100%;
                  width: 100%;
                  font-family: 'Noto Serif JP', serif;
                  writing-mode: vertical-rl;
                  text-orientation: upright;
                  word-break: break-all;
                  line-height: 1.2;
                  color: #333333;
                  font-size: 22px;
                  transform: translate(-50%, -50%);
                }

                .place-holder {

                }
              }
            }

            &-caption {
              &-text {
                p {
                  font-size: 20px;
                }
              }

              .place-holder {
                font-size: 24px;
                text-align: left;
                margin: 0;
                width: 100%;
                writing-mode: unset;
              }
            }
          }

          .layout-content-text {
            &-wrap {
              p {
                margin: 0;
                height: 342px;
                width: 100%;
                max-height: 350px;
                word-break: break-all;
                /*line-height: 1.3;*/
                font-family: 'Noto Serif JP', serif;
                font-size: 22px;
                padding-top: 4px;
                padding-right: 6px;
                line-height: 1.25;
                letter-spacing: 1.5px;
                writing-mode: vertical-rl;
                text-orientation: upright;
                position: initial;
                transform: none;
                white-space: initial;
              }

              .place-holder {
                height: 100%;
                margin-top: 4px;
                letter-spacing: -2px;
                text-align: left;
              }
            }
          }
        }

        &-right {
          .layout-content-right {
            &-wrap-1 {
              p {
                font-size: 118px;
                margin: 15px 0;
                letter-spacing: 1vw;
                text-orientation: upright;
                font-family: 'Noto Serif JP', serif;

              }
            }
          }

          .layout-subtitle {
            &-wrap-1 {
              .place-holder {
                height: 100%;
                width: auto;
                font-size: 90px;

                /*top:50%;*/
              }
            }

            &-wrap-2 {
              p {
                font-size: 160px;
                margin: 0;
                letter-spacing: 10px;
                line-height: unset;
                font-family: "Noto Sans JP", sans-serif;
              }

              .place-holder {
                height: 100%;
                width: auto;
                font-size: 96px;
              }
            }
          }
        }
      }

      &-upload {
        &-form {
          height: 320px;
        }
      }
    }

    p {
      &.text-horizontal {
        margin: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        white-space: nowrap;
        letter-spacing: 4px;
        transform: translate(-50%, -50%);
        color: #000;
        &.mobile {
          position: initial;
          transform: none;
          writing-mode: initial;
          left: 0;
          border: 1px solid #ddd;
          border-radius: 4px;
          display: block;
          height: 52px;
          width: 100%;
          font-size: 1.25rem;
          overflow: scroll;
          padding: 10px;
          box-sizing: border-box;
          &.summary {
            height: 165px;
          }
          &.content {
            height: 350px;
          }
        }
      }

      &.label {
        display: none;
      }

      &.text-vertical {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 100%;
        writing-mode: vertical-rl;
        text-orientation: upright;
        word-break: break-all;
        line-height: 1.3;
        color: #000;
        transform: translate(-50%, -50%);
        &.mobile {
          position: initial;
          transform: none;
          writing-mode: initial;
          left: 0;
          border: 1px solid #ddd;
          border-radius: 4px;
          display: block;
          height: 52px;
          width: 100%;
          font-size: 1.25rem;
          overflow: scroll;
          padding: 10px;
          box-sizing: border-box;
          &.summary {
            height: 165px;
          }
          &.content {
            height: 350px;
          }
        }
      }
    }

    .place-holder {
      position: absolute;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      text-align: center;
      font-size: 41px;
      color: #818a91;
      font-weight: 500;

      &.hide {
        display: none;
      }
    }



  ::placeholder {
    font-size: 71px;
  }
</style>
