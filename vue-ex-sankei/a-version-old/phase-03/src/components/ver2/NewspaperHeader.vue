<template>
	<div>
		<div class="layout-header">

			<!-- header date-->
			<div class="layout-header-date">
				<div class="layout-header-date-wrap">
					<div class="layout-header-date-text">
						<p class="text-horizontal" contenteditable="true">
							{{ imperialYear }}{{getCurrentMonth}}（{{getCurrentDay}}）
						</p>
					</div>
				</div>
			</div>

			<!-- header logo brand-->
			<div class="layout-header-brand">
				<div class="layout-header-brand-wrap">
					<div class="layout-header-brand-logo">
						<img
								id="layout-header-logo"
								:src="logoUrl"
								alt="Sankei logo"
								@click="selectImage">

						<input type='file' id="chooseLogo" @change="onFileChange" ref="myBtn"/>
					</div>
				</div>
			</div>

			<!-- header info-->
			<div class="layout-header-info">
				<div class="layout-header-info-wrap">
					<div class="layout-header-info-text">
						<InputText
								@setInputValue="setInputValue"
								:title="newspaper.issuer"
								:placeholder="'発行者を入力'"
								:max-length="10"
								:field-name="'issuer'"
								:text-horizontal="true"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import InputText from '../newspaper/InputText'
	import defaultLogo from '../../assets/img/logos/logo-sankei-main.png'

	export default {
		name: 'NewspaperHeader',

		components: {
			InputText
		},

		beforeRouteLeave (to, from, next) {
			if (to.name !== 'NewspaperPreview') {
				sessionStorage.removeItem('newspaper')
			}

			next()
		},

		data () {
			return {
				logoUrl: defaultLogo,
				currentDate: new Date()
			}
		},

		computed: {
			newspaper () {
				return JSON.parse(sessionStorage.getItem('newspaper')) || {}
			},

			getCurrentMonth () {
				return this.$moment(new Date()).format('MMM Do')
			},

			getCurrentDay () {
				return this.$moment(new Date()).format('dd')
			},

			imperialYear () {
				return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', { era: 'long' }).format(Date.now()).substr(0, 3) + '年'
			}
		},

		methods: {
			onFileChange (e) {
				const file = e.target.files[0]

				this.logoUrl = URL.createObjectURL(file)
			},

			selectImage () {
				this.$refs.myBtn.click()
			},

			// eslint-disable-next-line no-unused-vars
			setInputValue (elHTML, valName) {
				// NOTED
				// need to emit to parent Component
				// OR set to localStorage
			}
		}
	}
</script>

<style scoped lang="scss">

	#rotate {
		font-size: 20px;
		position: fixed;
		top: 60%;
		background-color: #d7d7d7;
		padding: 10px;
		right: 0;
		cursor: pointer;
		z-index: 3;
	}

	#top,
	#bottom {
		position: absolute;
		width: 100%;
	}

	#top {
		top: 10%;
	}

	#bottom {
		bottom: 10%;
	}

	.layout {
		padding: 10px 0;
		border: 1px solid #707070;
		margin: 0 auto 10px;

		&-wrap {
			width: 1495px;
			max-width: 1495px;
			padding: 0;
		}

		&-header {
			display: flex;
			position: relative;
			background-size: contain;
			height: 220px;
			flex-direction: row;
			margin-bottom: 2%;
			background: #F2F4F3 url(../../assets/img/bg-header.png);

			p {
				border: 1px solid #000;
				height: 68px;
			}

			&-date {
				margin-bottom: 0;
				height: 100%;
				width: 40%;

				&-text {
					font-size: 41px;
					height: 100%;
					width: 96%;
					position: relative;
					left: 50%;
					top: 50%;
					overflow: hidden;
					transform: translate(-50%, -50%);
				}

				&-wrap {
					position: relative;
					height: 100%;
					border: none;
					overflow: hidden;
				}
			}

			&-brand {
				width: 20%;
				height: 100%;
				background: #fff;
				border: 3px solid #fff;

				&-wrap {
					width: 100%;
					max-width: 275px;
					/*height: 275px;*/
					height: 250px;
					max-height: 275px;
					top: -4px;
					left: 0;
					right: 0;
					margin: 0 auto;
					position: relative;
					z-index: 2;
				}

				&-logo {
					width: 100%;
					height: 100%;

					img {
						height: 100%;
						width: 100%;
						cursor: move;
					}

					#chooseLogo {
						top: 100%;
						bottom: 0;
						opacity: 0;
					}
				}
			}

			&-info {
				margin-bottom: 0;
				height: 100%;
				width: 40%;

				&-wrap {
					position: relative;
					height: 100%;
					border: none;
					overflow: hidden;
				}

				&-text {
					height: 100%;
					width: 96%;
					position: relative;
					left: 50%;
					top: 50%;
					overflow: hidden;
					-webkit-transform: translate(-50%, -50%);
					transform: translate(-50%, -50%);
				}

				&-logo {
					display: none;
					width: 20%;
					text-align: center;
				}
			}
		}

		&-main {
			padding-right: 32px;
			padding-left: 32px;

			&-wrap {
				width: 100%;
			}

			&-title {
				width: 100%;
				height: 300px;
				flex-basis: 100%;
				overflow: hidden;
				z-index: 0;
				border: 1px solid #dddddd;
				border-radius: 4px;
				position: relative;
				margin-bottom: 10px;

				&-wrap {
					position: relative;
					width: 100%;
					height: 100%;

					input[type="text"] {
						box-sizing: border-box;
						border: none;
						background-color: transparent;
						font-size: 180px;
						text-align: center;
						height: 100%;
					}
				}
			}
		}

		&-maincontent {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			margin-bottom: 33px;
			width: 100%;

			&-left {
				-webkit-box-ordinal-group: 1;
				-ms-flex-order: 0;
				order: 0;
				width: 72%;
				margin-right: 5px;

				.layout-image {
					width: 100%;
					border-radius: 4px;
					position: relative;
					padding-top: 100%;

					&-wrap {
						left: 0;
						top: 0;
						position: absolute;
						width: 100%;
						height: 100%;
					}

					&-load {
						margin-bottom: 0;
						width: 89.4%;
						height: 95%;

						.layout-upload-form {
							background: #f4f4f4;
							border-radius: 4px;
							border: 1px solid #dddddd;
							margin: 0 auto;
							text-align: center;
							position: relative;
							width: 100%;
							height: 100%;

							input {
								color: #ffffff;

								&[type="file"] {
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
									width: 109px;
									height: 40px;
									outline: none;
									border-radius: 4px;
									z-index: 1;
									opacity: 0;
									cursor: pointer;
								}
							}

							.custom-file-upload {
								color: #373a3c;
								display: inline-block;
								background-color: #ffffff;
								border: 1px solid #95989a;
								padding: 8px;
								outline: none;
								white-space: nowrap;
								cursor: pointer;
								text-shadow: 1px 1px #fff;
								font-weight: 700;
								font-size: 16px;
								text-align: center;
								position: absolute;
								top: 50%;
								left: 50%;
								-webkit-transform: translate(-50%, -50%);
								transform: translate(-50%, -50%);
							}

							.crop-wrap {
								width: 100%;
								height: 100%;
								position: relative;
								overflow: hidden;

								#canvas {
									display: none;
								}

								.hidden {
									display: none;
								}
							}
						}
					}

					&-summary {
						margin-bottom: 0;
						position: absolute;

						right: 0;
						top: 0;
						height: 95%;
						width: 10%;

						&-wrap {
							border: 1px solid #ddd;
							border-radius: 4px;
							width: 100%;
							height: 975px;
							position: relative;
						}

						&-text {
							position: relative;
							left: 50%;
							top: 50%;
							width: 100%;
							height: 100%;
							overflow: hidden;
							transform: translate(-50%, -50%);

							p.text-vertical {
								margin: 0;
								position: absolute;
								top: 50%;
								left: 50%;
								height: 100%;
								width: 100%;
								writing-mode: vertical-rl;
								text-orientation: upright;
								word-break: break-all;
								line-height: 1.3;
								color: #333333;
								transform: translate(-50%, -50%);
								font-size: 1.4rem;
								display: inline-block;
							}

							.place-holder {
								height: 100%;
								width: auto;
							}
						}
					}

					&-caption {
						margin-bottom: 0;
						position: relative;
						left: 0;
						height: 4.6%;
						width: 89.4%;

						&-wrap {
							border: 1px solid #ddd;
							display: block;
							overflow: hidden;
							width: 100%;
							height: 100%;
							position: relative;
						}

						&-text {
							height: 100%;
							width: 97%;
							position: relative;
							left: 50%;
							top: 50%;
							overflow: hidden;
							transform: translate(-50%, -50%);

							p {
								font-size: 20px;
							}
						}
					}
				}

				.layout-content-text {
					height: 350px;
					max-height: 350px;
					position: relative;
					overflow: hidden;

					&-wrap {
						border: 1px solid #dddddd;
						border-radius: 4px;
						position: relative;
						overflow: hidden;

						p {
							margin: 0;
							height: 342px;
							width: 100%;
							max-height: 350px;
							font-size: 23px;
							word-break: break-all;
							line-height: 1.3;
							padding-right: 6px;
							writing-mode: vertical-rl;
							text-orientation: upright;
						}

						.place-holder {
							height: 100%;
							margin-top: 4px;
							letter-spacing: -2px;
							text-align: left;
						}
					}
				}
			}

			&-right {
				display: flex;
				width: 28%;
				flex-direction: row;
				margin-bottom: 0;

				.layout-content-right {
					&-wrap-1 {
						width: 40%;
						border: 1px solid #dddddd;
						border-radius: 4px;
						position: relative;
						overflow: hidden;
						height: 1375px;
					}

					&-wrap-2 {
						width: 60%;
						height: 1375px;
						position: relative;
						overflow: hidden;
						border: 1px solid #dddddd;
						border-radius: 4px;
					}
				}

				.layout-subtitle {
					&-wrap-1 {
						margin-right: 10%;
						position: relative;
						overflow: hidden;
						height: 100%;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}

					&-wrap-2 {
						position: relative;
						overflow: hidden;
						height: 100%;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}

		&-footer {
			@include flex;
			text-align: center;
			justify-content: space-between;
			@include font-size(28px);
			color: #373A3C;
			font-weight: bold;
			border-bottom: 9px solid #085282;
			padding-bottom: 32px;
		}
	}

	input[type="file"] {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 109px;
		height: 40px;
		outline: none;
		border-radius: 4px;
		z-index: 1;
		opacity: 0;
		cursor: pointer;
	}

	input[type="text"] {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		font-family: "Noto Sans JP", sans-serif;
		font-weight: 700;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 100%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	::placeholder {
		font-size: 71px;
	}

	.hidden {
		display: none;
	}

	.btn-editor {
		&-img {
			display: flex;
			justify-content: center;
			align-content: center;
			margin: 0 auto;
			text-align: center;
			position: absolute;
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 10;

			.btn {
				display: flex;
				justify-content: center;
				align-content: center;
				color: #1c7cd5;
				border: 1px solid #1c7cd5;
				background: #fff;
				margin-right: 4px;
				padding: 4px;
				border-radius: 4px;
				cursor: pointer;
				outline: none;
				width: 30px;
				transition: all 0.5s;

				&:hover {
					color: #fff;
					background: #1c7cd5;

					i {
						color: #fff;
					}

					span {
						bottom: 50px;
						display: block;
						opacity: 1;
					}
				}

				@media only screen and (min-width: 769px) {
					width: 38px;
					height: 38px;
				}
			}

			i {
				font-size: 14px;
			}

			span {
				background: #fff;
				color: #1c7cd5;
				font-size: 1rem;
				position: absolute;
				bottom: 0;
				width: 100%;
				padding: 8px 4px;
				display: none;
				opacity: 0;
				transition: all 0.4s;

				&::before {
					content: "";
					border-left: 5px solid transparent;
					border-right: 5px solid transparent;
					border-top: 5px solid #fff;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: -5px;
				}
			}
		}

		#upload {
			span {
				width: 100px;
			}
		}
	}

	.num {
		text-combine-upright: all;
		vertical-align: top;
	}

	.scalable {
		transform-origin: top left;
	}

	*[contenteditable="true"] {
		display: inline-block;
	}
</style>
