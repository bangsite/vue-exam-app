<template>
	<div class="wrapper instruction">
		<HeaderComponent post-title="新聞ジェネレーター"/>

		<div class="wrapper-container">
			<div class="instruction-title">
				<h3 class="titles">
					オリジナルの新聞が<br/>
					無料で簡単に作れます
				</h3>
			</div>

			<div class="instruction-one">
				<p>１ フォームを埋めるだけ完成</p>

				<div class="instruction-wrap">
					<img src="../assets/img/instruction-1.png" alt="instruction tep one">

					<i class="fa fa-chevron-right"/>

					<img src="../assets/img/instruction-2.png" alt="instruction tep one">
				</div>

			</div>

			<div class="instruction-two">
				<p>２ 様々な場面で活用出来ます</p>

				<div class="instruction-wrap">
					<img src="../assets/img/instruction-3.png" alt="instruction tep two">
					<img src="../assets/img/instruction-4.png" alt="instruction tep two">
					<img src="../assets/img/instruction-5.png" alt="instruction tep two">
				</div>

			</div>

			<div class="instruction-three">
				<p>３ 画像やPDFでダウンロード可能</p>

				<div class="instruction-wrap">
					<img src="../assets/img/instruction-6.png" alt="instruction tep three">
					<img src="../assets/img/instruction-7.png" alt="instruction tep three">
				</div>
			</div>
		</div>

		<FooterComponent qr-text="新聞ジェネレーターは<br>こちらからアクセス出来ます"/>
	</div>

</template>

<script>
	export default {
		name: 'Instruction',
	}
</script>

<style scoped lang="scss">
	@import "../assets/styles/pages/instruction.scss";

	.instruction {

		&-one {
			.fa-chevron-right {
				color: #06517B;
				margin-right: 20px;
				font-size: 90px;
			}
		}

		&-two {

		}

		&-three {

		}
	}
</style>
