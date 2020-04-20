<template>
	<h2 class="header">{{ postTitle }}</h2>
</template>

<script>
	export default {
		name: 'HeaderComponent',
		props: ['postTitle']
	}
</script>

<style scoped lang="scss">
	.header {
		width: 100%;
		background-color: #06517B;
		text-align: center;
		font-size: 3rem;
		margin: 0 0 5%;
		color: #ffffff;
		padding: 2% 0;
	}
</style>