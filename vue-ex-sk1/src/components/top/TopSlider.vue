<template>
  <div id="top">
    <h2>Top Slider</h2>
    <div class="cover">
      <slick ref="slick" :options="slickOptions">
<!--        <router-link v-for="item in list" :key="item.id" :to="{ name: 'NewspaperDetail', params: { postID: item.id }}">-->
<!--          <img :src="item.thumbnail_url" alt="image new" />-->
<!--        </router-link>-->
      </slick>
    </div>

    <router-link  to="/home">
      <div class="button">
			<span>
				新聞<br />アプリ
			</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import Slick from 'vue-slick'

  export default {
    name: "TopSlider",
    components: {
      Slick
    },
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
          variableWidth: true
          // Any other options that can be got from plugin documentation
        }
      }
    },
    methods: {
      next() {
        this.$refs.slick.next();
      },

      prev() {
        this.$refs.slick.prev();
      }
    }
  }
</script>

<style scoped>
  @import '../../../node_modules/slick-carousel/slick/slick.css';
  /*@import "src/assets/styles/pages/_top.scss";*/
</style>
