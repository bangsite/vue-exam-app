<template>
	<div class="page">
		<HeaderComponent post-title="新聞ジェネレーター"/>
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
										<img
												id="layout-header-logo"
												src="../assets/img/logos/logo-sankei-main.png"
												alt="Sankei logo"
										/>
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

		<FooterComponent qr-text="新聞ジェネレーターは<br/>こちらからアクセス出来ます"/>
	</div>
</template>

<script>
	// import component
	import PreviewContent from '../components/newspaperpreview/Content'
	import NewspaperMixin from '../mixins/newspaper'

	// supporter
	import html2canvas from 'html2canvas'
	import jspdf from 'jspdf'
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'NewspaperPreview',
		components: { PreviewContent },
		data () {
			return {
				postData: {
					content_url: ''
				},
				news: ''
			}
		},

		mixins: [NewspaperMixin('preview')],

		computed: {
			...mapGetters['question', ['item']]
		},

		mounted () {
			this.news = JSON.parse(sessionStorage.getItem('newspaper')) || {}
			if (this.news) {
				let inputLength = this.news.title.length,
						scaleY = inputLength > 8 ? 2 : 1.5,
						containerWidth = document.getElementsByClassName('layout-main-title')[0].offsetWidth,
						fontSize = containerWidth / inputLength > 180 ? 180 : containerWidth / inputLength
				document.getElementById('main-title').style.cssText = 'font-size: ' + fontSize +
						'px; transform: translate(-50%, -50%) scaleY(' + scaleY + ')'
				let parent = document.getElementById('main-title').parentElement
				parent.style.height = (parent.offsetHeight * scaleY) + 'px'
			}
		},

		methods: {
			...mapActions('newspaper', ['postNews']),

			downloadAsPDF () {
				// PDFとしてダウンロード button
				let previewImage = document.getElementById('preview')
				window.scrollTo(0, 0)
				html2canvas(previewImage, {}).then((canvas) => {
					this.postData.content_url = canvas.toDataURL('image/jpeg')
					let doc = new jspdf()
					let pdfWidth = doc.internal.pageSize.getWidth()
					let pdfHeight = doc.internal.pageSize.getHeight()
					doc.addImage(this.postData.content_url, 'JPEG', 0, 0, pdfWidth, pdfHeight)
					doc.save(this.news.title + '.pdf')
				})

			},

			downloadAsImage () {
				// 画像としてダウンロード button
				let previewImage = document.getElementById('preview')
				window.scrollTo(0, 0)
				html2canvas(previewImage, {}).then((canvas) => {
					let link = document.createElement('a')
					link.download = this.news.title + '.jpeg'
					link.href = canvas.toDataURL('image/jpeg')
					link.click()
				})

			},

			createNewspaper () {
				let previewImage = document.getElementById('preview')
				window.scrollTo(0, 0)
				html2canvas(previewImage, {}).then((canvas) => {
					this.postData.content_url = canvas.toDataURL('image/jpeg')
					return this.postNews(this.postData)
				}).then(() => this.$router.push({ name: 'Page' }))
			},

			setFontSize () {
				if (this.newspaper['title']) {
					let inputLength = this.newspaper['title'].length,
							scaleY = inputLength > 8 ? 2 : 1.5,
							containerWidth = document.getElementsByClassName('layout-main-title')[0].offsetWidth,
							fontSize = containerWidth / inputLength > 180 ? 180 : containerWidth / inputLength
					document.getElementById('main-title').style.cssText = 'font-size: ' + fontSize +
							'px; transform: translate(-50%, -50%) scaleY(' + scaleY + ')'

				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/preview.scss";

	.page {
		.header {
			margin: 0 0 18px;
		}

		.btn {
			a {
				margin-bottom: 20px;
			}
		}
	}

	.container {
		.preview {
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
			&-main {
				&-title {
					&-wrap {
						height: 100%
					}
				}
			}
		}

		.layout {
			&-header {
				background-color: #F2F4F3;

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
	}

	.footer-text {
		display: block;
		margin: 0 30px 10px;
		text-align: right;
	}
</style>
