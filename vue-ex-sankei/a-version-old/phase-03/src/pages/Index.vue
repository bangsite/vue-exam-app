<template>
	<div class="main">
		<router-view/>
	</div>
</template>

<script>
	// import Json
	import menus from '../data/menu'

	export default {
		name: 'Index',

		data () {
			return {
				menus: menus
			}
		}
	}
</script>

<style lang="scss">
	body {
		margin: 0;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style-type: none;
	}
</style>
