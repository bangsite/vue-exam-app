<template>
	<div class="newspaper-img">
		<img src="../../assets/img/img-news01.jpg"/>
	</div>
</template>

<script>
	export default {
		name: 'Content',
		props: ['postID'],
		mounted () {
			console.log(this.postID)
		}
	}
</script>

<style scoped lang="scss">
	.newspaper {
		&-img {
			img {
				width: 100%;
			}
		}
	}
</style>
