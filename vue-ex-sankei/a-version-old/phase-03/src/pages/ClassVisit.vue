<template>
	<div class="detail">
		<HeaderComponent post-title="産経新聞の３つの出前授業"/>

		<div class="wrapper-container class-visiting">
			<div class="visiting">
				<div class="visiting-wrap">
					<h3 class="titles">新聞の読み方講座</h3>

					<router-link :to="{ name: 'ClassVisitDetail', params: { classID: 1 }}">
						<img src="../assets/img/classvisiting-1.png" alt=" visiting 1">

					</router-link>
				</div>
				<div class="visiting-wrap visiting-wrap--right">
					<h3 class="titles">作文講座</h3>

					<router-link :to="{ name: 'ClassVisitDetail', params: { classID: 2 }}">
						<img src="../assets/img/classvisiting-2.png" alt=" visiting 2">

					</router-link>
				</div>

			</div>
		</div>

		<VideoComponent/>

		<div class="wrapper-container class-visiting">
			<div class="visiting visiting--bottom">
				<div class="visiting-wrap">
					<h3 class="titles">新聞の読み方講座</h3>

					<router-link :to="{ name: 'ClassVisitDetail', params: { classID: 3 }}">
						<img src="../assets/img/classvisiting-3.png" alt="visiting 1">

					</router-link>
				</div>
			</div>
		</div>

		<FooterComponent qr-text="ウェブページでも<br/>授業依頼を受け付け中"/>
	</div>
</template>

<script>
	import VideoComponent from '../components/common/VideoComponent'

	export default {
		name: 'ClassVisitPage',

		components: {
			VideoComponent
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/classvisiting.scss";
</style>
