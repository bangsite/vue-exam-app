<template>
	<div class="page">
		<h2>産経新聞の考えるNIE</h2>

		<video-component/>

		<FooterComponent qr-text="産経新聞の教育コンテンツは</br>こちらからアクセス出来ます"/>
	</div>
</template>

<script>
	import VideoComponent from '../components/common/VideoComponent'

	export default {
		name: 'NIEIntro',

		data () {
			return {
				tab: 'hinh1'
			}
		},

		components: { VideoComponent }
	}
</script>

<style scoped lang="scss">
	h2 {
		font-size: 3rem;
		position: absolute;
		width: 100%;
		text-align: center;
		margin: 0;
		top: 26%;
		transform: translateY(-26%);
	}
</style>
