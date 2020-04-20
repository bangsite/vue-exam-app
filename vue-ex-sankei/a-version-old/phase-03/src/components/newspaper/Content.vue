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
					<div class="layout-image">
						<div class="layout-image-wrap">
							<!--Event handler img-->
							<div class="layout-image-load">
								<p class="label">写真をアップロード</p>
								<form class="layout-upload-form">
									<!--upload image-->
									<input
											id="file-upload"
											type="file"
											name="file-upload"
											ref="input"
											accept="image/*"
											@change="setImage"
									/>
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
												<i class="fa fa-repeat"/>
<!--												<i class="fa fa-sync"></i>-->
											</div>

											<!--Upload new image-->
											<label class="btn" for="file-upload" id="upload">
												<span>アップロード</span>

												<i class="fa fa-upload"/>
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
												:placeholder="`リード文を入力（約 <span class='num'>１７６</span>文字）`"
												:max-length="176"
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
	// Components
	import InputText from '../../components/newspaper/InputText'

	// supporter
	import VueCropper from 'vue-cropperjs'
	import 'cropperjs/dist/cropper.css'
	import NewspaperMixin from '../../mixins/newspaper'
	import _ from 'lodash'

	export default {
		name: 'Content',

		mixins: [NewspaperMixin('layout-scale')],

		components: {
			VueCropper,
			InputText
		},

		data () {
			return {
				imgSrc: '', originalSrc: '',
				cropImg: '',
				selected: true,
				mainTitleLength: '',
				mainContentFocus: true
			}
		},

		computed: {
			newspaper () {
				return JSON.parse(sessionStorage.getItem('newspaper')) || {}
			}
		},

		beforeRouteLeave (to, from, next) {
			if (to.name !== 'NewspaperPreview') {
				sessionStorage.removeItem('newspaper')
			}
			next()
		},

		created () {
			const hasSSNewsPaper = _.keys(this.newspaper).length > 0

			if (hasSSNewsPaper) {
				this.imgSrc = this.newspaper.cropImg
			}
		},

		mounted () {
			this.setFontSize()
			console.log(this.mainContentFocus)
		},

		methods: {
			setCaret (el, max) {
				let range = document.createRange(),
						sel = window.getSelection()

				range.setStart(el.childNodes[0], max)
				range.collapse(true)
				sel.removeAllRanges()
				sel.addRange(range)
				el.focus()
			},

			setInputValue (elHTML, valName) {
				this.newspaper[valName] = elHTML
			},

			setImage (e) {
				if (e.target.files.length > 0) {
					const file = e.target.files[0]

					if (file.type.indexOf('image/') === -1) {
						alert('Please select an image file')
						return
					}

					if (typeof FileReader === 'function') {
						const reader = new FileReader()

						reader.onload = event => {
							this.imgSrc = event.target.result
							this.originalSrc = this.imgSrc
							this.selected = false

							// rebuild cropperjs with the updated source
							this.$refs.cropper.replace(event.target.result)
						}

						reader.readAsDataURL(file)
					} else {
						alert('Sorry, FileReader API not supported')
					}
				}
			},

			handleCropImg () {
				const cropCanvas = this.$refs.cropper.getCroppedCanvas()
				if (cropCanvas) {
					this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
					// let blobImg = this.b64toBlob(this.cropImg);
					// let blobUrl = URL.createObjectURL(blobImg);
				}

				this.newspaper.cropImg = this.cropImg

				sessionStorage.setItem('newspaper', JSON.stringify(this.newspaper))
			},

			b64toBlob (dataURI) {
				let byteString = atob(dataURI.split(',')[1])
				let ab = new ArrayBuffer(byteString.length)
				let ia = new Uint8Array(ab)

				for (let i = 0; i < byteString.length; i++) {
					ia[i] = byteString.charCodeAt(i)
				}
				return new Blob([ab], { type: 'image/png' })
			},

			resetImage () {
				this.$refs.cropper.reset();
			},

			setFontSize () {
				if (this.newspaper['title']) {
					let inputLength = this.newspaper['title'].length,
							scaleY = inputLength > 8 ? 2 : 1.5,
							containerWidth = document.getElementsByClassName('layout-main-title')[0].offsetWidth,
							fontSize = containerWidth / inputLength > 180 ? 180 : containerWidth / inputLength
					document.getElementById('main-title').style.cssText = 'font-size: ' + fontSize +
							'px; transform: translate(-50%, -50%) scaleY(' + scaleY + ')'
					// let parent = document.getElementById('main-title').parentElement;
					// parent.style.height = (parent.offsetHeight * scaleY) + 'px'
					// console.log(parent.offsetHeight)
				}
			},

			selectHTML () {
				try {
					if (window.ActiveXObject) {
						let c = document.selection.createRange()
						return c.htmlText
					}

					let nNd = document.createElement('span'),
							w = getSelection().getRangeAt(0)
					nNd.classList.add('num')

					w.surroundContents(nNd)
					return nNd.innerHTML
				} catch (e) {
					if (window.ActiveXObject) {
						return document.selection.createRange()
					} else {

						// let p = document.getElementById('main-content'),
						//     s = window.getSelection(),
						//     r = document.createRange();
						// r.setStart(p, 0);
						// r.setEnd(p, 0);
						// s.removeAllRanges();
						// s.addRange(r);
						return getSelection()
					}
				}
			},

			rotateNumber () {
				this.selectHTML()
				let el = document.getElementById('main-content').childNodes[0]
				let range = document.createRange()
				let sel = window.getSelection()

				range.setStart(el, 0)
				range.collapse(true)
				sel.removeAllRanges()
				sel.addRange(range)
				el.focus()
			}
		}
	}
</script>

<style scoped lang="scss">

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

	#top,
	#bottom {
		position: absolute;
		width: 100%;
	}

	#top {
		top: 10%;
	}

	#bottom {
		bottom: 10%;
	}

	.layout {
		padding: 10px 0;
		border: 1px solid #707070;
		margin: 0 auto 10px;

		&-wrap {
			width: 1495px;
			max-width: 1495px;
			padding: 0;
		}

		&-header {
			display: flex;
			position: relative;
			background-size: contain;
			height: 220px;
			flex-direction: row;
			margin-bottom: 2%;
			background: #F2F4F3 url(../../assets/img/bg-header.png);

			p {
				border: 1px solid #000;
				height: 68px;
			}

			&-date {
				margin-bottom: 0;
				height: 100%;
				width: 40%;

				&-text {
					font-size: 41px;
					height: 100%;
					width: 96%;
					position: relative;
					left: 50%;
					top: 50%;
					overflow: hidden;
					transform: translate(-50%, -50%);
				}

				&-wrap {
					position: relative;
					height: 100%;
					border: none;
					overflow: hidden;
				}
			}

			&-brand {
				width: 20%;
				height: 100%;
				background: #fff;
				border: 3px solid #fff;

				&-wrap {
					width: 100%;
					max-width: 275px;
					/*height: 275px;*/
					height: 250px;
					max-height: 275px;
					top: -4px;
					left: 0;
					right: 0;
					margin: 0 auto;
					position: relative;
					z-index: 2;
				}

				&-logo {
					width: 100%;
					height: 100%;

					img {
						height: 100%;
						width: 100%;
						cursor: move;
					}

					#chooseLogo {
						top: 100%;
						bottom: 0;
						opacity: 0;
					}
				}
			}

			&-info {
				margin-bottom: 0;
				height: 100%;
				width: 40%;

				&-wrap {
					position: relative;
					height: 100%;
					border: none;
					overflow: hidden;
				}

				&-text {
					height: 100%;
					width: 96%;
					position: relative;
					left: 50%;
					top: 50%;
					overflow: hidden;
					-webkit-transform: translate(-50%, -50%);
					transform: translate(-50%, -50%);
				}

				&-logo {
					display: none;
					width: 20%;
					text-align: center;
				}
			}
		}

		&-main {
			padding-right: 32px;
			padding-left: 32px;

			&-wrap {
				width: 100%;
			}

			&-title {
				width: 100%;
				height: 300px;
				flex-basis: 100%;
				overflow: hidden;
				z-index: 0;
				border: 1px solid #dddddd;
				border-radius: 4px;
				position: relative;
				margin-bottom: 10px;

				&-wrap {
					position: relative;
					width: 100%;
					height: 100%;

					input[type="text"] {
						box-sizing: border-box;
						border: none;
						background-color: transparent;
						font-size: 180px;
						text-align: center;
						height: 100%;
					}
				}
			}
		}

		&-maincontent {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			margin-bottom: 33px;
			width: 100%;

			&-left {
				-webkit-box-ordinal-group: 1;
				-ms-flex-order: 0;
				order: 0;
				width: 72%;
				margin-right: 5px;

				.layout-image {
					width: 100%;
					border-radius: 4px;
					position: relative;
					padding-top: 100%;

					&-wrap {
						left: 0;
						top: 0;
						position: absolute;
						width: 100%;
						height: 100%;
					}

					&-load {
						margin-bottom: 0;
						width: 89.4%;
						height: 95%;

						.layout-upload-form {
							background: #f4f4f4;
							border-radius: 4px;
							border: 1px solid #dddddd;
							margin: 0 auto;
							text-align: center;
							position: relative;
							width: 100%;
							height: 100%;

							input {
								color: #ffffff;

								&[type="file"] {
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
									width: 109px;
									height: 40px;
									outline: none;
									border-radius: 4px;
									z-index: 1;
									opacity: 0;
									cursor: pointer;
								}
							}

							.custom-file-upload {
								color: #373a3c;
								display: inline-block;
								background-color: #ffffff;
								border: 1px solid #95989a;
								padding: 8px;
								outline: none;
								white-space: nowrap;
								cursor: pointer;
								text-shadow: 1px 1px #fff;
								font-weight: 700;
								font-size: 16px;
								text-align: center;
								position: absolute;
								top: 50%;
								left: 50%;
								-webkit-transform: translate(-50%, -50%);
								transform: translate(-50%, -50%);
							}

							.crop-wrap {
								width: 100%;
								height: 100%;
								position: relative;
								overflow: hidden;

								#canvas {
									display: none;
								}

								.hidden {
									display: none;
								}
							}
						}
					}

					&-summary {
						margin-bottom: 0;
						position: absolute;

						right: 0;
						top: 0;
						height: 95%;
						width: 10%;

						&-wrap {
							border: 1px solid #ddd;
							border-radius: 4px;
							width: 100%;
							height: 975px;
							position: relative;
						}

						&-text {
							position: relative;
							left: 50%;
							top: 50%;
							width: 100%;
							height: 100%;
							overflow: hidden;
							transform: translate(-50%, -50%);

							p.text-vertical {
								margin: 0;
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
								font-size: 1.4rem;
								display: inline-block;
							}

							.place-holder {
								height: 100%;
								width: auto;
							}
						}
					}

					&-caption {
						margin-bottom: 0;
						position: relative;
						left: 0;
						height: 4.6%;
						width: 89.4%;

						&-wrap {
							border: 1px solid #ddd;
							display: block;
							overflow: hidden;
							width: 100%;
							height: 100%;
							position: relative;
						}

						&-text {
							height: 100%;
							width: 97%;
							position: relative;
							left: 50%;
							top: 50%;
							overflow: hidden;
							transform: translate(-50%, -50%);

							p {
								font-size: 20px;
							}
						}
					}
				}

				.layout-content-text {
					height: 350px;
					max-height: 350px;
					position: relative;
					overflow: hidden;

					&-wrap {
						border: 1px solid #dddddd;
						border-radius: 4px;
						position: relative;
						overflow: hidden;

						p {
							margin: 0;
							height: 342px;
							width: 100%;
							max-height: 350px;
							font-size: 23px;
							word-break: break-all;
							line-height: 1.3;
							padding-right: 6px;
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
				display: flex;
				width: 28%;
				flex-direction: row;
				margin-bottom: 0;

				.layout-content-right {
					&-wrap-1 {
						width: 40%;
						border: 1px solid #dddddd;
						border-radius: 4px;
						position: relative;
						overflow: hidden;
						height: 1375px;
					}

					&-wrap-2 {
						width: 60%;
						height: 1375px;
						position: relative;
						overflow: hidden;
						border: 1px solid #dddddd;
						border-radius: 4px;
					}
				}

				.layout-subtitle {
					&-wrap-1 {
						margin-right: 10%;
						position: relative;
						overflow: hidden;
						height: 100%;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}

					&-wrap-2 {
						position: relative;
						overflow: hidden;
						height: 100%;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}

		&-footer {
			@include flex;
			text-align: center;
			justify-content: space-between;
			@include font-size(28px);
			color: #373A3C;
			font-weight: bold;
			border-bottom: 9px solid #085282;
			padding-bottom: 32px;
		}
	}

	input[type="file"] {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 109px;
		height: 40px;
		outline: none;
		border-radius: 4px;
		z-index: 1;
		opacity: 0;
		cursor: pointer;
	}

	input[type="text"] {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		font-family: "Noto Sans JP", sans-serif;
		font-weight: 700;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 100%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	::placeholder {
		font-size: 71px;
	}

	.hidden {
		display: none;
	}

	.btn-editor {
		&-img {
			display: flex;
			justify-content: center;
			align-content: center;
			margin: 0 auto;
			text-align: center;
			position: absolute;
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10;

			.btn {
				display: flex;
				justify-content: center;
				align-content: center;
				color: #1c7cd5;
				border: 1px solid #1c7cd5;
				background: #fff;
				margin-right: 4px;
				padding: 4px;
				border-radius: 4px;
				cursor: pointer;
				outline: none;
				width: 30px;
				transition: all 0.5s;

				&:hover {
					color: #fff;
					background: #1c7cd5;

					i {
						color: #fff;
					}

					span {
						bottom: 50px;
						display: block;
						opacity: 1;
					}
				}

				@media only screen and (min-width: 769px) {
					width: 38px;
					height: 38px;
				}
			}

			i {
				font-size: 14px;
			}

			span {
				background: #fff;
				color: #1c7cd5;
				font-size: 1rem;
				position: absolute;
				bottom: 0;
				width: 100%;
				padding: 8px 4px;
				display: none;
				opacity: 0;
				transition: all 0.4s;

				&::before {
					content: "";
					border-left: 5px solid transparent;
					border-right: 5px solid transparent;
					border-top: 5px solid #fff;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: -5px;
				}
			}
		}

		#upload {
			span {
				width: 100px;
			}
		}
	}

	.num {
		text-combine-upright: all;
		vertical-align: top;
	}

	.scalable {
		transform-origin: top left;
	}

	*[contenteditable="true"] {
		display: inline-block;
	}
</style>
