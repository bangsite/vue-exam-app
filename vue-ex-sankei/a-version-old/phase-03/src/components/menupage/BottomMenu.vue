<template>
	<div class="menu">
		<router-link class="menu-item" to="/instruction">
			<span class="menu-item-text">新聞<br>ジェネレーター</span>
		</router-link>

		<router-link class="menu-item" to="/worksheet">
			<span class="menu-item-text">ワークシート</span>
		</router-link>
	</div>

</template>

<script>
	export default {
		name: 'BottomMenu'
	}
</script>

<style scoped lang="scss">
	.menu {
		display: flex;
		justify-content: space-around;

		&-item {
			width: 26%;
			padding-top: 26%;
			text-align: center;
			position: relative;
			border-radius: 50%;
			background-color: #F4F2F2;
			border: 1px solid #000;
			cursor: pointer;

			&-text {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				font-size: 1.4rem;
				width: 100%;
				margin: 0;
				color: #000;
				font-weight: bold;
			}
		}
	}

</style>
