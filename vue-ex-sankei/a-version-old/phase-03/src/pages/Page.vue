<template>
	<div class="page">
		<TopSlider/>
		<video-component/>
		<BottomSlider/>
	</div>
</template>

<script>
	import store from '../store'
	import VideoComponent from '../components/common/VideoComponent'
	import TopSlider from '../components/top/TopSlider'
	import BottomSlider from '../components/top/BottomSlider'

	export default {
		name: 'TopPage',

		components: { BottomSlider, TopSlider, VideoComponent },

		beforeRouteEnter (to, from, next) {
			return Promise.all([
				store.dispatch('question/getList', { limit: 6 }),
				store.dispatch('newspaper/getList', { limit: 6 })
			]).then(() => next())
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/top.scss";
</style>
