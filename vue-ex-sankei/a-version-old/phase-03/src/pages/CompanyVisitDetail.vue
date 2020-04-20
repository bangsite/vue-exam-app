<template>
	<div class="detail">
		<HeaderComponent post-title="産経新聞の３つの出前授業"/>

		<template v-if="item.id">
			<div class="wrapper-container">
				<div class="visiting-detail">
					<div class="visiting-detail-title">
						<h3 class="titles">{{item.title}}</h3>
					</div>
				</div>
			</div>

			<div class="visiting-detail-img">
				<img :src="item.imgSrc" alt="visiting 1">
			</div>

			<div class="wrapper-container">
				<div class="visiting-detail">
					<div class="visiting-detail-para">
						<p>{{item.content}}</p>
					</div>
				</div>
			</div>
		</template>

		<FooterComponent qr-text="ウェブページでも<br/>会社見学を受け付け中"/>
	</div>
</template>

<script>
	import companyData from '../data/company'

	// supporter
	import _ from 'lodash'

	export default {
		name: 'CompanyVisitDetail',

		beforeRouteEnter (to, from, next) {
			const data = _.find(companyData, (value) => {
				return value.id === parseInt(to.params.companyID)
			})

			next(vm => {
				vm.item = data
			})
		},

		data () {
			return {
				item: {
					id: null,
					title: '',
					imgSrc: '',
					content: ''
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/companyvisiting.scss";
</style>
