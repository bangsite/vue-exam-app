<template>

	<div class="page-footer">
		<div class="btn-back">
			<a @click="$router.go(-1)">
				<img src="../../assets/img/icons/btn-back.svg" alt="back page"/>
			</a>
		</div>
		<div class="qrcode">
			<p v-html="qrText">{{ qrText }}</p>

			<div class="qrcode-img">
				<img src="../../assets/img/img-QR.svg" alt="QR code"/>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'FooterComponent',
		props: ['qrText']
	}
</script>

<style lang="scss">

</style>
