<template>
	<div id="top">
		<div class="cover">
			<slick ref="slick" :options="slickOptions">
				<router-link v-for="item in list" :key="item.id" :to="{ name: 'NewspaperDetail', params: { postID: item.id }}">
					<img :src="item.thumbnail_url" alt="image new"/>
				</router-link>
			</slick>
		</div>

		<router-link to="/newspaper">
			<div class="button">
			<span>
				新聞<br/>アプリ
			</span>
			</div>
		</router-link>
	</div>

</template>

<script>
	import { mapGetters } from 'vuex'
	import Slick from 'vue-slick'

	export default {
		name: 'TopSlider',

		components: { Slick },
		data () {
			return {
				slickOptions: {
					speed: 3000,
					autoplay: true,
					autoplaySpeed: 0,
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					swipeToSlide: true,
					centerMode: true,
					focusOnSelect: true,
					variableWidth: true
					// Any other options that can be got from plugin documentation
				}
			}
		},

		computed: {
			...mapGetters('newspaper', ['list'])
		},

		methods: {
			next () {
				this.$refs.slick.next()
			},

			prev () {
				this.$refs.slick.prev()
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../node_modules/slick-carousel/slick/slick.css';

	.page {
		#top {
			position: absolute;
			width: 100%;
			top: 10%;

			.cover {
				padding-left: 0;
				display: flex;
				height: auto;
				justify-content: space-around;
				width: 70%;
				margin: 0 -10vw 0 0;
				overflow: hidden;

				/deep/ .slick-slider {
					.slick-arrow {
						display: none !important;
					}
				}

				/deep/ .slick-slide {
					background: #F4F2F2;
					position: relative;
					margin-left: 10vw;
					width: 20vw;

					img {
						width: 100%;
					}
				}
			}

			ul {
				padding-left: 0;
				display: flex;
				height: auto;
				justify-content: space-around;
				width: 70%;
				margin: 0;
				overflow: hidden;

				li {
					width: 30%;
					background: #F4F2F2;
					position: relative;

					img {
						width: 100%;
					}
				}
			}

			.button {
				font-size: 5vw;
				color: #333333;
				text-align: center;
				font-weight: bold;
				position: absolute;
				top: 50%;
				width: 20%;
				transform: translateY(-50%);
				height: 100%;
				background: #F4F2F2;
				right: 5%;

				span {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					width: 100%;
					left: 0;
				}
			}

			.slick-slide {
				margin-left: 10vw;
				width: 20vw;
			}

			/* the parent */
			.slick-list {
				// margin: 0 -4vw;
				margin-left: -10vw;
			}

			.menu {
				display: flex;
				justify-content: space-around;

				&-item {
					width: 25%;
					padding-top: 25%;
					text-align: center;
					position: relative;
					border-radius: 50%;
					background-color: #F4F2F2;
					border: 1px solid #06517B;
					cursor: pointer;

					a {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						font-size: 1.8rem;
						width: 100%;
						margin: 0;
						color: #06517B;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
