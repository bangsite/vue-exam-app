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
				<img :src="item.imgSrc" alt=" visiting 1">
			</div>

			<div class="wrapper-container">
				<div class="visiting-detail">
					<div class="visiting-detail-para">
						<h4>授業構成</h4>

						<ul v-if="item.org.length">
							<li v-for="(item) in item.org" :key="item">
								{{item}}
							</li>
						</ul>

						<p> {{item.content}}</p>
					</div>
				</div>
			</div>
		</template>

		<FooterComponent qr-text="ウェブページでも<br/>授業依頼を受け付け中"/>
	</div>

</template>

<script>
	import classData from '../data/class'

	// supporter
	import _ from 'lodash'

	export default {
		name: 'ClassVisitDetail',

		beforeRouteEnter (to, from, next) {
			const data = _.find(classData, (value) => {
				return value.id === parseInt(to.params.classID)
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
					org: [],
					content: ''
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/classvisiting";
</style>
