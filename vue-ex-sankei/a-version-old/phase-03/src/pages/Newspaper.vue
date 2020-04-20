<template>
	<div class="page">
		<HeaderComponent post-title="新聞ジェネレーター"/>

		<div class="container">
			<!-- Add your site or application content here -->
			<section class="layout" id="layout">
				<div class="layout-wrap scalable" id="layout-scale">
					<NewspaperHeader></NewspaperHeader>
					<NewsContent ref="news"></NewsContent>
					<div class="layout-footer"></div>
				</div>
			</section>

			<div class="footer-text">
				&copy; 産業経済新聞社
			</div>

			<section class="btn">
				<a class="btn-blue btn-preview" @click.prevent="confirmNews" href="#">作った新聞を確認</a>
			</section>
		</div>

		<FooterComponent qr-text="新聞ジェネレーターは<br/>こちらからアクセス出来ます"/>
	</div>
</template>

<script>
	import NewspaperHeader from '../components/ver2/NewspaperHeader'
	import NewspaperMixin from '../mixins/newspaper'
	import NewsContent from '../components/newspaper/Content'
	import _ from 'lodash'

	export default {
		name: 'Newspaper',

		mixins: [NewspaperMixin('layout-scale')],

		components: {
			NewspaperHeader,
			NewsContent
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

		data () {
			return {
				imgSrc: '',
				originalSrc: '',
				cropImg: '',
				selected: true,
				mainTitleLength: '',
				mainContentFocus: true
			}
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

			confirmNews () {
				this.$refs.news.handleCropImg()

				this.$router.push({ name: 'NewspaperPreview' })
			}
		}
	}
</script>

<style scoped lang="scss">
	body {
		margin: 0;
	}

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

	.page {
		height: 100vh;
	}

	.container {
		margin-right: auto;
		margin-left: auto;
		width: 100%;

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
				background: url(../../../assets/img/bg-header.png);
				background-size: contain;
				height: 220px;
				flex-direction: row;
				margin-bottom: 2%;
				background-color: #F2F4F3;

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

			&-footer {
				@include flex;
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

		.btn {
			display: flex;
			flex-flow: column;
			align-items: center;

			a {
				color: #ffffff;
				font-weight: bold;
				padding: 15px;
				font-size: 20px;
				width: 220px;
				text-align: center;
				border-radius: 4px;
				margin-bottom: 60px;
			}

			&-blue {
				background-color: #06517b;
			}
		}

		*[contenteditable="true"] {
			display: inline-block;
		}

		.footer-text {
			display: block;
			margin: 0 30px;
			text-align: right;
		}
	}
</style>
