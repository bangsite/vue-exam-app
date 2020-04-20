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
        <router-link v-for="item in list" :key="item.id" :to="{ name: 'Detail', params: { postID: item.id }}">
          <img :src="item.thumbnail_url" alt="image new" />
        </router-link>
      </slick>
    </div>
  </div>
</template>

<script>
  import Slick from 'vue-slick'

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
          rtl: true
          // Any other options that can be got from plugin documentation
        }
      }
    },
    methods: {
      next () {
        this.$refs.slick.next()
      },

      prev () {
        this.$refs.slick.prev()
      }
    }
  }
</script>

<style scoped>
  @import '../../../node_modules/slick-carousel/slick/slick.css';
  @import "src/assets/styles/pages/_top.scss";
  a {
    color: inherit;
  }
</style>
