<template>
	<div class="detail">
		<HeaderComponent post-title="産経新聞のワークシート"/>

		<div id="top">
			<div class="wrapper-container">
				<div class="plan">
					<h3>指導案（授業構成）</h3>

					<div class="plan-list">
						<ul v-for="item in dataTab" :key="item.id" v-show="item.id === tab">
							<li v-for="itemData in item.children" :key="itemData.title">
								<img src="../assets/img/img-sample.jpg" alt="image worksheet">

								<div>
									<h4>{{itemData.title}}</h4>
									<p>{{itemData.content}}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<VideoComponent/>

		<div id="bottom" class="">
			<div class="sample">
				<ul>
					<li v-for="item in dataTab"
							:key="item.id"
							:class="{'active': tab === item.id}"
							@click="oneClick(item.id)">
						<img :src="item.imgSrc"/>
					</li>
				</ul>
			</div>
		</div>

		<FooterComponent qr-text="ワークシートは<br/>こちらからアクセス出来ます"/>
	</div>
</template>

<script>
	import VideoComponent from '../components/common/VideoComponent'
	import tabData from '../data/worksheet'

	export default {
		name: 'Worksheet',

		components: { VideoComponent },

		data () {
			return {
				tab: 1,
				dataTab: [],
				counter: 0,
				clicks: 0,
				result: [],
				timer: null
			}
		},
		methods: {
			oneClick: function (id) {
				this.clicks++

				if (this.clicks !== 1) {
					this.$router.push({
						name: 'WorksheetDetail',
						params: { tabId: id }
					})
				}

				let self = this

				this.timer = setTimeout(function () {
					self.tab = id
					self.clicks = 0
				}, 200)
			}
		},

		mounted () {
			this.dataTab = tabData
		}
	}
</script>

<style scoped lang="scss">
	.detail {
		position: relative;
		height: 100vh;
	}

	#top {
		width: 100%;
		position: absolute;
		top: 8%;

		.wrapper-container {
			padding: 0 5%;
		}

		.plan {
			h3 {
				font-size: 2.5rem;
				color: #000;
				//margin: 0 0 3%;
				margin-top: 15px;
				margin-bottom: 15px;
				font-weight: bold;
			}

			&-list {
				position: relative;

				ul {
					display: flex;
					justify-content: center;
					width: 100%;
					padding: 0;
					position: absolute;
					margin: 0;

					li {
						width: 25%;
						position: relative;
						background-color: #ffffff;

						&:not(:last-child) {
							position: relative;
							margin-right: 5%;

							&:before {
								content: '';
								width: 15%;
								height: 15%;
								background: url('../assets/img/icons/icon-arrow.png') no-repeat;
								background-size: contain;
								position: absolute;
								top: 50%;
								right: -20%;
								transform: translateY(-50%);
							}
						}

						img {
							width: 100%;
							height: 100%;
						}

						div {
							position: absolute;
							top: 0;
							width: 100%;
							text-align: center;
							color: #000;

							h4 {
								font-size: 1.5rem;
								margin: 10px;
								font-weight: 700;
							}

							p {
								font-size: 0.7rem;
								padding: 0 10%;
								text-align: justify;
								font-weight: 500;
								color: #000;
							}

						}

					}
				}
			}
		}
	}

	#bottom {
		position: absolute;
		width: 100%;
		bottom: 13%;

		.sample {
			ul {
				width: 100%;
				padding-left: 0;
				display: flex;
				height: auto;
				justify-content: space-around;
				margin: 0;
				overflow: hidden;

				li {
					width: 17%;
					padding: 2%;
					background-color: transparent;

					&.active {
						border: 4px solid #06517B;
						width: calc(17% - 4px);
					}

					img {
						width: 100%;
					}
				}
			}
		}
	}
</style>
