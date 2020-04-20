<template>
	<div class="detail">
		<HeaderComponent post-title="産経新聞の会社見学"/>

		<div class="wrapper-container company-visiting">
			<div class="visiting">
				<div class="visiting-wrap ">
					<h3 class="titles">編集会議</h3>
					<router-link :to="{ name: 'CompanyVisitDetail', params: { companyID: 1 }}">
						<img src="../assets/img/companyvisiting-1.png" alt="company visiting ">
					</router-link>
				</div>
				<div class="visiting-wrap visiting-wrap--right">
					<h3 class="titles">整理部</h3>

					<router-link :to="{ name: 'CompanyVisitDetail', params: { companyID: 2 }}">
						<img src="../assets/img/companyvisiting-2.png" alt="company visiting ">
					</router-link>
				</div>
			</div>
		</div>
		<VideoComponent/>
		<div class="wrapper-container company-visiting ">
			<div class="visiting visiting--bottom">
				<div class="visiting-wrap visiting-wrap--left">
					<h3 class="titles">編集会議</h3>
					<router-link :to="{ name: 'CompanyVisitDetail', params: { companyID: 3 }}">
						<img src="../assets/img/companyvisiting-3.png" alt="company visiting ">
					</router-link>
				</div>
				<div class="visiting-wrap visiting-wrap--right">
					<h3 class="titles">整理部</h3>
					<router-link :to="{ name: 'CompanyVisitDetail', params: { companyID: 4 }}">
						<img src="../assets/img/companyvisiting-4.png" alt="company visiting ">
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
		name: 'CompanyVisit',

		components: {
			VideoComponent
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/companyvisiting.scss";

</style>
