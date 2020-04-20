<template>
  <div>
    <p
      :class="[textHorizontal === '' ? '' : textHorizontal ? 'text-horizontal' : 'text-vertical']"
      contenteditable="true"
      @keyup="hidePlaceholder"
      @keyup.enter.prevent="editableContentChanged($event, maxLength, fieldName)"
      @blur="editableContentChanged($event, maxLength, fieldName)"
      @keydown.enter.prevent="addNewLine($event)"
      @keydown ="arrowHandle($event)"
      v-html="title"
    ></p>
    <div
      class="place-holder place-holder-vertical"
      :class="[title && title !== '' ? 'hide' : '']" v-html="placeholder"
    ></div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ["title", "placeholder", "maxLength", "fieldName", "textHorizontal"],
  methods: {
    hidePlaceholder(e) {
      let currElement = e.target;
      if (currElement.textContent !== "") {
        currElement.parentElement
          .querySelector(".place-holder")
          .classList.add("hide");
      } else {
        currElement.parentElement
          .querySelector(".place-holder")
          .classList.remove("hide");
      }
    },
    editableContentChanged(e, maxLength, valName) {
      let element = e.target;
      if (element.innerHTML.length >= maxLength) {
        element.innerHTML = element.innerHTML.substring(0, maxLength);
      }
      this.$emit('setInputValue', element.innerHTML, valName);
    },
    checkInput() {
      this.addNewLine();
    },
    arrowHandle(e) {
      switch(e.keyCode){
        case 37:
          e.preventDefault();
          console.log('left');
          this.moveCarret(14);
          break;
        case 38:
          e.preventDefault();
          console.log('up');
          this.moveCarret(-1);
          break;
        case 39:
          e.preventDefault();
          console.log('right');
          this.moveCarret(-14);
          break;
        case 40:
          e.preventDefault();
          console.log('down');
          this.moveCarret(1);
          break;
      }
      return false;
    },
    moveCarret(charCount) {
      let sel;
      if(window.getSelection) {
        sel = window.getSelection();
        if(sel.rangeCount > 0) {
          let textNode = sel.focusNode;
          let newOffset = sel.focusOffset + charCount;
          console.log('Selection', sel);
          console.log('textNode', textNode);
          console.log('Offset', newOffset);
          console.log('textNode Length', textNode.length);
          if (newOffset < 0)
          {
            console.log('ahuhuhuhuh');
            textNode = textNode.previousSibling;
          }
          sel.collapse(textNode, Math.min(textNode.length, newOffset));

          // if(textNode.length !== undefined) {
          // } else {
          //   console.log('OK fine');
          // }

        }
        else  {
          // if (sel.Type !== "Control") {
          //   range = sel.create()
          // }
        }
      }
    },

    addNewLine() {
      let sel, range;
      let html = "<br><br>";
      if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        console.log(sel)
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();

          // Range.createContextualFragment() would be useful here but is
          // non-standard and not supported in all browsers (IE9, for one)
          let el = document.createElement("div");
          el.innerHTML = html;
          let frag = document.createDocumentFragment(), node, lastNode;
          while ( (node = el.firstChild) ) {
            lastNode = frag.appendChild(node);
          }
          range.insertNode(frag);

          // Preserve the selection
          if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
      }
    }
  }
}
</script>

<style scoped lang="scss">

	.container {
		.layout {

			&-header {

				&-date {
					&-text {
						p.text-horizontal {
							font-family: 'Noto Serif JP', serif;
							padding-top: 5px;
							letter-spacing: -2px;
						}

						.place-holder {
							font-family: 'Noto Serif JP', serif;
						}
					}
				}

				&-info {

					&-text {

						p {
							font-size: 50px;
							text-align: center;
							height: 60px;
							padding-top: 5px;
						}

						.place-holder {
							font-family: "Noto Sans JP", sans-serif;
						}
					}
				}

				p {
					font-weight: 500;
					color: #707070;
					font-size: 41px;
					text-align: center;
					letter-spacing: 3px;
					border: 1px solid #000;
					height: 70px;
					overflow: hidden;

					&.label {
						display: none;
					}
				}

				.place-holder {
					text-align: center;
				}
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
									height: 100%;
									width: auto;
									top: 50%;
									font-size: 65px;
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
				color: #333333;
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
				color: #333333;
				transform: translate(-50%, -50%);
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

	}

	::placeholder {
		font-size: 71px;
	}

</style>

