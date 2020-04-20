<template>
	<div class="wrapper top-page">
		<div id="top">
			<top-menu/>
		</div>

		<video-component/>

		<div id="bottom">
			<bottom-menu/>
		</div>

		<div class="wrapper-container">
			<div class="page-footer">
				<div class="btn-back">
					<router-link to="/page">
						<img src="../assets/img/icons/btn-back.svg" alt="back page"/>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VideoComponent from '../components/common/VideoComponent'
	import TopMenu from '../components/menupage/TopMenu'
	import BottomMenu from '../components/menupage/BottomMenu'

	export default {
		name: 'Menu',

		components: {
			BottomMenu,
			TopMenu,
			VideoComponent
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/top.scss";
</style>
