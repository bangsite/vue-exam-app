<template>
  <div id="bottom">
    <div class="cover">
      <router-link to="/niechart">
        <div class="button">
					<span>
						アン<br />
						ケート
					</span>
        </div>
      </router-link>

      <slick
        ref="slick"
        :options="slickOptions"
        dir="rtl">
        <router-link v-for="item in data" :key="item.id" :to="{ name: 'Detail', params: { postID: item.id }}">
          <img :src="item.imgSrc" alt="image new" />
        </router-link>
      </slick>
    </div>
  </div>
</template>

<script>
  import Slick from 'vue-slick'

  import Data from '../../data/newspaper.json'

  export default {
    name: "BottomSlider",
    components: {Slick},
    data() {
      return {
        slickOptions: {
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 0,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true,
          centerMode: true,
          focusOnSelect: true,
          variableWidth: true,
          rtl: true,
        },
        data: Data
      }
    },
    methods: {
      next() {
        this.$refs.slick.next()
      },

      prev() {
        this.$refs.slick.prev()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../node_modules/slick-carousel/slick/slick.css';
  @import "src/assets/styles/pages/_top.scss";

  #bottom {
    .cover {
      margin: 0 0 0 auto;
    }

    > > > .slick-slide {
      float: right;
    }
  }
</style>
