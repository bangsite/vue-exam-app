<template>
	<div class="detail">
		<HeaderComponent post-title="新聞ジェネレーター"/>

		<div class="newspaper-img">
			<img :src="detail.content_url"/>
		</div>

		<FooterComponent qr-text="号外ジェネレーターは<br/>こちらから"/>
	</div>
</template>

<script>
	import store from '../store'
	import { mapGetters } from 'vuex'

	export default {
		name: 'NewspaperDetail',

		beforeRouteEnter (to, from, next) {
			const id = to.params.postID || from.params.postID

			store.dispatch('newspaper/getDetail', id).then(() => next())
		},

		computed: {
			...mapGetters('newspaper', ['detail'])
		}
	}
</script>

<style scoped lang="scss">
	/deep/ body {
		margin: 0;
	}

	.detail {
		height: 100vh;
	}

	.newspaper {
		&-img {
			img {
				width: 100%;
			}
		}
	}
</style>
