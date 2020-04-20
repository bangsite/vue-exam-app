<template>
	<div class="detail">
		<HeaderComponent post-title="新聞ジェネレーター"/>

		<div class="newspaper-img" v-if="detail">
			<img :src="detail.content_url" alt=""/>
		</div>

		<FooterComponent qr-text="号外ジェネレーターは<br/>こちらから"/>
	</div>
</template>

<script>
	// store Vuex
	import store from '../store'
	import { mapGetters } from 'vuex'

	export default {
		name: 'Detail',

		data () {
			return {}
		},

		beforeRouteEnter (to, from, next) {
			const id = to.params.postID || from.params.postID

			store.dispatch('question/getDetail', id).then(() => next())
		},

		computed: {
			...mapGetters('question', ['detail'])
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

	.bounce-enter-active {
		animation: bounce-in .5s;
	}

	.bounce-leave-active {
		animation: bounce-in .5s reverse;
	}

	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
