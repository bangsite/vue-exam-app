<template>
	<div class="detail">
		<div class="questionaire">
			<HeaderComponent post-title="産経新聞 NIEアンケート"/>

			<h3 v-if="errorsAll" class="error error-top">
				エラーが発生しました。<br/>
				入力内容を確認してください。
			</h3>

			<p class="title">
				アンケートを送信すると<br>
				ディスプレイに反映されます。
			</p>

			<div class="questionaire-wrapper">
				<ValidationObserver tag="form" ref="observer" @submit.prevent="validateBeforeSubmit()">
					<!-- 1 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="性別"
															rules="requiredRadio"
															v-slot="{ errors }">
						<p class="label">１ 性別</p>

						<ul class="row">
							<li>
								<input type="radio" v-model="inputData.gender" id="sex1" name="sex" value="男性">
								<label for="sex1">男性</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.gender" id="sex2" name="sex" value="女性">
								<label for="sex2">女性</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.gender" id="sex3" name="sex" value="そのほか">
								<label for="sex3">そのほか</label>
							</li>
						</ul>

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 2 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="年齢"
															rules="requiredRadio"
															v-slot="{ errors }">
						<p class="label">２ 年齢</p>

						<ul>
							<li>
								<input type="radio" v-model="inputData.age" id="age1" name="age" value="20代">
								<label for="age1">20代</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.age" id="age2" name="age" value="30代">
								<label for="age2">30代</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.age" id="age3" name="age" value="40代">
								<label for="age3">40代</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.age" id="age4" name="age" value="50代">
								<label for="age4">50代</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.age" id="age5" name="age" value="60代">
								<label for="age5">60代</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.age" id="age6" name="age" value="そのほか">
								<label for="age6">そのほか</label>
							</li>
						</ul>

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 3 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="担当"
															rules="requiredRadio"
															v-slot="{ errors }">
						<p class="label">３ 担当</p>

						<ul class="row">
							<li>
								<input type="radio" v-model="inputData.charge" id="charge1" name="charge" value="小学校">
								<label for="charge1">小学校</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.charge" id="charge2" name="charge" value="中学校">
								<label for="charge2">中学校</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.charge" id="charge3" name="charge" value="高校">
								<label for="charge3">高校</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.charge" id="charge4" name="charge" value="そのほか">
								<label for="charge4">そのほか</label>
							</li>
						</ul>

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 4 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="お名前"
															rules="required"
															v-slot="{ errors }">
						<p class="label" for="name">４ お名前</p>

						<input type="text" v-model="inputData.name" placeholder="例）産経太郎">

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 5 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="勤務先"
															rules="required"
															v-slot="{ errors }">
						<p class="label" for="place">５ 勤務先</p>

						<input type="text" id="place" v-model="inputData.workspace" placeholder="例）千代田区立産経小学校">

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 6 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="役職"
															rules="required"
															v-slot="{ errors }">
						<p class="label" for="position">６ 役職</p>

						<input type="text" id="position" v-model="inputData.position" placeholder="例）５年の担任、教務、校長など">

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 7 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="メールアドレス"
															rules="required|email"
															v-slot="{ errors }">
						<p class="label" for="mail">7 メールアドレス</p>

						<input type="text" id="mail" v-model="inputData.email" placeholder="例）sankei.taro@chiyoda.ed.jp">

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 8 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="NIEの実践現状"
															rules="requiredRadio"
															v-slot="{ errors }">
						<p class="label">8 NIEの実践現状</p>

						<ul>
							<li>
								<input type="radio" v-model="inputData.practice" id="practice1" name="practice" value="5">
								<label for="practice1">うまくいっている</label>
							</li>
							<li>
								<input
										type="radio"
										v-model="inputData.practice"
										id="practice2"
										name="practice"
										value="4">
								<label for="practice2">どちらかといえばうまくいっている</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.practice" id="practice3" name="practice" value="3">
								<label for="practice3">どちらかといえばうまくいっていない</label>
							</li>
							<li>
								<input
										type="radio"
										v-model="inputData.practice"
										id="practice4" name="practice"
										value="2">
								<label for="practice4">うまくいっていない</label>
							</li>
							<li>
								<input type="radio" v-model="inputData.practice" id="practice5" name="practice" value="1">
								<label for="practice5">おこなっていない</label>
							</li>
						</ul>

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 9 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="NIE教育の課題"
															rules="required"
															v-slot="{ errors }">
						<p class="label">9 NIE実践の課題</p>

						<textarea id="education" v-model="inputData.education_issue"></textarea>

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!-- 10 -->
					<ValidationProvider tag="div"
															class="form-group"
															name="産経新聞への要望"
															rules="required"
															v-slot="{ errors }">
						<p class="label">10 産経新聞への要望</p>

						<textarea id="request" v-model="inputData.request"></textarea>

						<p class="error" v-if="errors[0]">
							{{ errors[0] }}
						</p>
					</ValidationProvider>

					<!--Submit Form-->
					<div class="submit">
						<button type="submit" value="send">送信</button>
					</div>
				</ValidationObserver>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'

	export default {
		name: 'Question',

		data () {
			return {
				errorsAll: false,
				inputData: {
					gender: '',
					age: '',
					charge: '',
					name: '',
					workspace: '',
					position: '',
					email: '',
					practice: '',
					education_issue: '',
					request: '',
					content_url: ''
				}
			}
		},

		methods: {

			...mapMutations('question', ['SET_ITEM']),

			async validateBeforeSubmit () {
				const isValid = await this.$refs.observer.validate()

				if (isValid) {
					this.showDataPreview()
				} else {
					window.scrollTo(0, 0)
					this.errorsAll = true
				}
			},

			showDataPreview () {
				this.SET_ITEM(this.inputData)

				this.$router.push({ name: 'QuestionPreview' })

			}
		}
	}
</script>

<style scoped lang="scss">
	.questionaire {

		.header {
			width: 100%;
			text-align: center;
			font-size: 20px;
			color: #ffffff;
			background-color: #06517B;
			margin: 0;
			padding: 20px 0;
		}

		&-wrapper {
			width: 90%;
			max-width: 350px;
			margin: auto;
		}

		.title {
			text-align: center;
			font-size: 15px;
			margin: 20px 0 30px;
		}

		form {
			padding-bottom: 40px;

			div {
			}

			ul {
				padding-left: 15px;
				margin: 25px 0;

				&.row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-wrap: wrap;
					margin-bottom: 0;

					li {
						margin-bottom: 20px;
						flex-basis: 33.3%;
					}
				}

				li {
					font-size: 16px;
					margin-bottom: 20px;
				}
			}

			input {
				position: initial;
				transform: none;
				margin: 0 0 25px;
				width: 100%;
				height: 45px;
				border: 1px solid #DDDDDD;
				font-size: 16px;
				padding: 12px 20px;
				box-sizing: border-box;
				/*color: #959595;*/
				font-weight: 400;
				font-family: "Noto Sans JP", sans-serif;

				&:before {
					content: none;
				}

				&::placeholder {
					font-size: 16px;
				}
			}

			textarea {
				width: 100%;
				height: 208px;
				border: 1px solid #d7d7d7;
				margin-bottom: 15px;
				font-family: "Noto Sans JP", sans-serif;

			}

			.label {
				font-size: 30px;
				font-weight: 500;
				margin: 0 0 25px;
				display: block;
				font-family: "Noto Sans JP", sans-serif;
			}

			.submit {
				width: 100%;
				text-align: center;

				button {
					background-color: #06517B;
					color: #ffffff;
					font-size: 14px;
					font-weight: bold;
					padding: 15px 30px;
				}
			}


			[type="radio"]:checked,
			[type="radio"]:not(:checked) {
				position: absolute;
				left: -9999px;
			}

			[type="radio"]:checked + label,
			[type="radio"]:not(:checked) + label {
				position: relative;
				padding-left: 35px;
				cursor: pointer;
				line-height: 20px;
				display: inline-block;
				color: #666;
			}

			[type="radio"]:checked + label:before,
			[type="radio"]:not(:checked) + label:before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 20px;
				height: 20px;
				border: 1px solid #ddd;
				border-radius: 100%;
				background: #fff;
			}

			[type="radio"]:checked + label:after,
			[type="radio"]:not(:checked) + label:after {
				content: '';
				width: 14px;
				height: 14px;
				background: #06517B;
				position: absolute;
				top: 4px;
				left: 4px;
				border-radius: 100%;
				-webkit-transition: all 0.2s ease;
				transition: all 0.2s ease;
			}

			[type="radio"]:not(:checked) + label:after {
				opacity: 0;
				-webkit-transform: scale(0);
				transform: scale(0);
			}

			[type="radio"]:checked + label:after {
				opacity: 1;
				-webkit-transform: scale(1);
				transform: scale(1);
			}
		}

		.error {
			text-align: center;
			color: #FF0000;
			margin: 0 0 10px;

			&-top {
				padding: 10px 20px;
				border: 4px solid #FF0000;
				margin: 10px 15px;
				font-size: 16px;
				line-height: 1.8;
				letter-spacing: 1px;
			}
		}
	}
</style>
