<template>
  <div class="detail">
    <Header post-title="NIEアンケート"/>

    <div class="wrapper-container">
      <div id="chartCharge" class="chart">
        <h3 class="title">回答者の担当</h3>

        <div class="chart-pie">
          <div class="image">
<!--            <pie-chart v-if="loaded" :chartData="dataChart.charge"></pie-chart>-->
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
<!--            <pie-chart v-if="loaded" :chartData="dataChart.age"></pie-chart>-->
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
<!--            <pie-chart v-if="loaded" :chart-data="dataChart.practice"></pie-chart>-->
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

    <Footer qr-text="アンケートは<br/>こちらから"/>
  </div>
</template>

<script>
  import Header from "../components/common/Header";
  import Footer from "../components/common/Footer";
    export default {
        name: "NieChart",
      components:{
          Header,Footer
      }
    }
</script>

<style scoped>

</style>
