<template>
  <div class="detail">
    <HeaderComponent post-title="NIEアンケート"/>

    <div class="wrapper-container">
      <div id="chartCharge" class="chart">
        <h3 class="title">回答者の担当</h3>

        <div class="chart-pie">
          <div class="image">
            <pie-chart v-if="loaded" :chartData="dataChart.charge"></pie-chart>
          </div>

          <div class="text">
            <ul>
              <li>
                <div class="color"></div>

                <h4>小学校</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>中学校</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>高校</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>そのほか</h4>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div id="chartAge" class="chart">
        <h3 class="title">回答者の年齢</h3>

        <div class="chart-pie">
          <div class="image">
            <pie-chart v-if="loaded" :chartData="dataChart.age"></pie-chart>
          </div>

          <div class="text">
            <ul>
              <li>
                <div class="color"></div>

                <h4>20代</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>30代</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>40代</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>50代</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>60代</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>そのほか</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="chartPractice" class="chart">
        <h3 class="title">NIEの状況</h3>

        <div class="chart-pie">
          <div class="image">
            <pie-chart v-if="loaded" :chart-data="dataChart.practice"></pie-chart>
          </div>

          <div class="text">
            <ul>
              <li>
                <div class="color"></div>

                <h4>うまくいっている</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>どちらかといえばうまくいっている</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>どちらかといえばうまくいっていない</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4>うまくいっていない</h4>
              </li>
              <li>
                <div class="color"></div>

                <h4> おこなっていない</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent qr-text="アンケートは<br/>こちらから"/>
  </div>
</template>

<script>
  import PieChart from "../components/nie/PieChart";
  import {mapGetters} from 'vuex'
  import store from '../store'
  import _ from 'lodash';

  export default {
    name: 'NieChart',

    components: {PieChart},

		data() {
      return {
        loaded: false,
        dataChart: null
      }
    },

    beforeRouteEnter(to, from, next) {
      store.dispatch('chart/getChartData').then(() => next())
    },

    mounted() {
      this.dataChart = _.reduce(this.chartList, (result, item, index) => {
        result[index] = _.values(item)
        return result
      }, {})

      this.loaded = true;
    },

    computed: {
      ...mapGetters('chart', ['chartList'])
    },

    methods: {}
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

  .wrapper-container {
    padding: 0 5%;

    .chart {
      margin-bottom: 0;

      h3 {
        &.title {
          color: #000;
          font-size: 2.5rem;
          margin-top: 20px;
          margin-bottom: 0;
        }
      }

      &-pie {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .image {
          width: 33%;

          img {
            width: 100%;
          }
        }

        .text {
          ul {
            font-size: 1.8rem;

            li {
              margin-bottom: 15px;
              position: relative;
              display: flex;
              align-items: center;

              h4 {
                margin: 0;
                font-size: 1.4rem;
              }

              &:first-child {
                .color {
                  background-color: #06517B;
                }
              }

              &:nth-child(2) {
                .color {
                  background-color: #518D1D;
                }
              }

              &:nth-child(3) {
                .color {
                  background-color: #4A4A0B;
                }
              }

              &:nth-child(4) {
                .color {
                  background-color: #FA9927;
                }
              }

              &:nth-child(5) {
                .color {
                  background-color: #B20D0A;
                }
              }

              &:nth-child(6) {
                .color {
                  background-color: #FF0E0A;
                }
              }

              .color {
                width: 34px;
                height: 34px;
                margin-right: 20px;
              }
            }
          }

        }
      }
    }

  }
</style>
