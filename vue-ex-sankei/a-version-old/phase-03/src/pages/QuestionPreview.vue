<template>
	<div class="detail">
		<HeaderComponent post-title="NIEアンケート"/>

		<div class="preview-answer">
			<div class="preview-text">
				<p>
					回答頂きありがとうございました。<br/>
					ディスプレイに反映されますのでご覧ください。<br/>
					後日、集計結果をメールにてお送りします。
				</p>
			</div>

			<div class="container">

				<section id="layout" class="preview">
					<div class="container scalable" id="preview" ref="printMe">
						<div>
							<div id="preview-page">
								<div class="layout-header preview-header">

									<!-- header date-->
									<div class="layout-header-date">
										<div class="layout-header-date-wrap">
											<p id="date-format">
												{{ imperialYear }}{{getCurrentMonth}}（{{getCurrentDay}}）
											</p>
										</div>
									</div>

									<!-- header logo brand-->
									<div class="layout-header-brand">
										<div class="layout-header-brand-wrap">
											<img
													id="layout-header-logo"
													src="../assets/img/logos/logo-sankei-main.png"
													alt="Sankei logo">
										</div>
									</div>

									<!-- header info-->
									<div class="layout-header-info">
										<div class="layout-header-info-wrap">
											<p>アンケート</p>
										</div>
									</div>

								</div>

								<div class="layout-main">
									<!--main title-->
									<div class="layout-main-title">
										<div class="layout-main-title-wrap">
											<h3>{{item.charge}} {{item.age}} {{item.gender}}</h3>
										</div>
									</div>


									<div class="layout-main-content">

										<div class="layout-image">
											<div class="layout-image-wrap">
												<img :src="mainImg" alt="image review">
											</div>
										</div>


										<div class="layout-text">
											<div class="layout-text-wrap">
												<h3>NIE実践の課題</h3>

												<p>
													{{item.education_issue}}
												</p>
											</div>

											<div class="layout-text-wrap">
												<h3>産経新聞への要望</h3>

												<p>
													{{item.request}}
												</p>
											</div>


										</div>
										<div class="rating layout-text-wrap ">
											<h3>NIEの状況</h3>

											<div class="star">
												<div class="empty__stars"/>

												<div class="full__stars" :style="{ width: (practice * 100) / 5 + '%'}"/>
											</div>
										</div>
									</div>
								</div>

								<div class="layout-footer"></div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<section class="btn" id="button">
				<a class="btn-blue btn-preview" @click.prevent="submitData" href="#">産経新聞NIEページへ</a>
			</section>

		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import previewImg from '../data/previewImg'
	import _ from 'lodash'
	import html2canvas from 'html2canvas'
	import store from '../store'
	import router from '../router'

	export default {
		name: 'QuestionPreview',

		data () {
			return {
				windowWidth: 0,
				windowHeight: 0,
				imperialYear: '',
				practice: '',
				mainImg: ''
			}
		},

		beforeRouteEnter (to, from, next) {
			// eslint-disable-next-line no-undef
			if (_.isEmpty(store.getters['question/item'])) {
				router.push({ name: 'Question' })
			} else {
				next()
			}
		},

		mounted () {
			this.imperialYear = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', { era: 'long' }).format(Date.now()).
																																													substr(0, 3) + '年'

			this.practice = parseInt(this.item.practice)
			this.$nextTick(function () {
				window.addEventListener('resize', this.getWindowWidth)
				window.addEventListener('resize', this.getWindowHeight)
				window.addEventListener('resize', this.rescale)

				//Init
				this.getWindowWidth()
				this.getWindowHeight()
				this.rescale()

				this.mainImg = this.getRandomImg()
			})
		},

		computed: {
			...mapGetters('question', ['item']),

			getCurrentMonth () {
				return this.$moment(new Date()).format('MMM Do')
			},

			getCurrentDay () {
				return this.$moment(new Date()).format('dd')
			}

		},

		methods: {
			...mapActions('question', ['postQuestion']),

			getWindowWidth () {
				this.windowWidth = document.documentElement.clientWidth
			},

			getWindowHeight () {
				this.windowHeight = document.documentElement.clientHeight
			},

			rescale () {
				let elem = document.getElementById('preview')
				let height = 1811,
						width = 1200,
						ratio = this.windowWidth > 1200 ? 1 : (this.windowWidth) / 1280

				elem.style.transform = 'scale(' + ratio + ')'
				elem.parentElement.style.height = (height * ratio) + 'px'
				elem.parentElement.style.width = (width * ratio) + 'px'
			},

			async submitData () {
				const previewImage = document.getElementById('preview')

				window.scrollTo(0, 0)

				await html2canvas(previewImage, {
					scrollX: 0,
					scrollY: 0
				}).then((canvas) => {
					this.item.content_url = canvas.toDataURL('image/jpeg')
					return this.postQuestion(this.item)
				}).then(() => this.$router.push({ name: 'Page' }))
			},

			getRandomImg () {
				let radNum = Math.floor(Math.random() * (10 - 1)) + 1
				let index = _.filter(previewImg, (o) => {
					return o.id === parseInt(radNum)
				})
				return index[0].imgSrc //The maximum is exclusive and the minimum is inclusive
			}
		}
	}
</script>

<style scoped lang="scss">
	html {
		scroll-behavior: smooth;
	}

	img {
		margin: auto;
	}

	.header {
		width: 100%;
		text-align: center;
		font-size: 20px;
		color: #ffffff;
		background-color: #06517B;
		margin: 0;
		padding: 20px 0;
	}

	.preview {
		margin: auto;

		.container {
			/*width: 1200px;*/
			/*max-width: 1200px;*/
			/*padding: 0;*/
		}

		.layout-main {
			padding-right: 32px;
			padding-left: 32px;
		}

		.layout-header {
			display: flex;
			position: relative;
			background: url(../assets/img/bg-header.png);
			background-size: contain;
			height: 220px;
			flex-direction: row;
			margin-bottom: 8%;

			&-date {
				margin-bottom: 0;
				height: 100%;
				width: 40%;
				position: relative;

				&-wrap {
					position: relative;
					height: 100%;
					border: none;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;

					p {
						font-size: 3rem;
						box-sizing: border-box;
						color: #333;
						outline: none;
						display: block;
					}
				}
			}

			&-brand {
				width: 20%;
				height: 100%;
				background: #fff;
				border: 3px solid #fff;
				margin-bottom: 15px;

				&-wrap {
					width: 100%;
					max-width: 275px;
					height: 100%;
					top: -4px;
					left: 0;
					right: 0;
					margin: 0 auto;
					position: relative;
					z-index: 2;

					img {
						width: 100%;
						height: 250px;
					}
				}
			}

			&-info {
				margin-bottom: 0;
				height: 100%;
				width: 40%;
				position: relative;

				&-wrap {
					position: relative;
					height: 100%;
					border: none;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;

					p {
						border: 2px solid #000;
						font-size: 3rem;
						font-weight: 400;
						color: #000;
						padding: 10px;
					}
				}
			}
		}

		.layout-footer {
			display: flex;
			text-align: center;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			font-size: 1.75rem;
			color: #373A3C;
			font-weight: bold;
			border-bottom: 9px solid #085282;
			padding-bottom: 32px;
		}

		&-answer {
			width: 100%;
			margin: 0 auto;
			padding: 0;

			.header {
				margin: 0;
				text-align: center;
				width: 100%;
				background-color: #06517B;
				@include font-size(40px);
				color: #ffffff;
				padding: 4% 0;
			}

			.preview-text {
				margin: 20px auto;

				p {
					text-align: center;
					@include font-size(19px);
					line-height: 1.4;
					color: #000;
					font-weight: 400;
				}
			}

			.preview {
				margin-bottom: 25px;

				.container {
					width: 1200px;
					max-width: 1200px;
					padding: 0;
				}
			}

			.layout-header {
				margin-bottom: 5%;

				&-date {
					&-wrap {
						display: flex;
						justify-content: center;
						align-items: center;

						p {
							@include font-size(48px);
						}
					}
				}

				&-brand {
					&-wrap {
						img {
							width: 100%;
							height: 250px;
						}
					}
				}

				&-info {
					&-wrap {
						display: flex;
						justify-content: center;
						align-items: center;

						p {
							border: 2px solid #000;
							@include font-size(48px);
							font-weight: 400;
							color: #000;
							padding: 10px;
						}
					}
				}
			}

			.layout-main {
				&-title {
					width: 100%;
					height: 100%;
					margin: 0;

					h3 {
						@include font-size(130px);
						text-align: center;
						margin: 55px 0;
						min-height: 100px;
					}
				}

				&-content {
					display: block;
					width: 100%;

					.layout-image {
						&-wrap {
							width: 100%;

							img {
								width: 100%;
							}
						}
					}

					.layout-text {
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						height: 300px;

						&-wrap {
							display: block;
							flex: 0 0 48%;

							h3 {
								@include font-size(44px);
								color: #000;
							}

							p {
								@include font-size(38px);
								font-weight: 400;
								color: #000;
							}
						}
					}

					.rating {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-start;

						h3 {
							margin-right: 30px;
						}
					}

					#rating {
						i {
							-webkit-tap-highlight-color: transparent;
							font-size: 40px;
							cursor: pointer;
						}

						.checked {
							color: #f1c40f;
						}

						.unchecked {
							color: #ddd;
						}
					}
				}
			}

			.btn {
				.btn-blue {
					padding: 12px;
					background: #06517B;
				}
			}
		}
	}

	#preview {
		transform-origin: top left;

		&-page {
			background-color: #ffffff;
			border: 1px solid #707070;
			padding: 10px 0;
		}
	}

	.star {
		position: relative;
		font-size: 3rem;

		.empty__stars {
			color: #BBBBBB;

			&:before {
				content: "★ ★ ★ ★ ★ ";
			}
		}

		.full__stars {
			position: absolute;
			top: 0;
			left: 0;
			color: #FFD055;
			white-space: nowrap;
			overflow: hidden;

			&:before {
				content: "★ ★ ★ ★ ★ ";
			}
		}
	}
</style>