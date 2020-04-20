<script>
	import { Pie } from 'vue-chartjs'
	import 'chartjs-plugin-datalabels'

	export default {
    name: "PieChart",
		extends: Pie,
		props: {
			chartData: {
				type: Array,
				default: () => {
				}
			}
		},
		data () {
			return {
				chartdata: {
					datasets: [
						{
							backgroundColor: [
								'#06517B',
								'#518D1D',
								'#4A4A0B',
								'#FA9927',
								'#B20D0A',
								'#FF0E0A'
							],
							borderWidth: 0
						}
					]
				},
				options: {
					animation: {
						animation: {
							duration: 10000
						}
					},
					tooltips: {
						enabled: false
					},
					plugins: {
						datalabels: {
							formatter: (value) => {
								let percentage = value + '%'
								if (percentage === '0%')
									percentage = ''
								return percentage
							},
							color: '#fff',
							anchor: 'center',
							font: {
								size: 12
							},
							align: 'end',
							offset: 8
						}
					}
				}
			}
		},

		mounted () {
			this.chartdata.datasets[0].data = [...this.$props.chartData]
			this.renderChart(this.chartdata, this.options)
		}
	}
</script>
