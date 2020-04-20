<template>
	<div class="detail">
		<HeaderComponent post-title="産経新聞のワークシート"/>

		<div class="newspaper-img" v-if="item.id">
			<img :src="item.imgSrc" alt="">
		</div>

		<FooterComponent qr-text="このワークシートは<br/>こちらからアクセス出来ます"/>
	</div>
</template>

<script>
	import tabData from '../data/worksheet'
	import _ from 'lodash'

	export default {
		name: 'WorksheetDetail',

		beforeRouteEnter (to, from, next) {
			const data = _.find(tabData, (value) => {
				return value.id === parseInt(to.params.tabId)
			})

			next(vm => {
				vm.item = data
			})
		},

		data () {
			return {
				item: {
					id: null,
					imgSrc: ''
				}

			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/ h2 {
		width: 100%;
		background-color: #06517B;
		text-align: center;
		font-size: 3rem;
		margin: 0 0 5%;
		color: #ffffff;
		padding: 2% 0;
	}

	.newspaper-img {
		img {
			width: 100%;
		}
	}
</style>
