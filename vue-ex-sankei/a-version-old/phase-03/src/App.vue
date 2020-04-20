<template>
	<router-view/>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap');
	@import url('http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css');

	html, body {
		font-family: 'Noto Sans JP', sans-serif;
	}

	a {
		color: inherit;
	}

	[contenteditable] {
		outline: 0 solid transparent;
	}

</style>
