<template>
  <div id="top">
    <div class="cover">
      <slick ref="slick" :options="slickOptions">
        <router-link v-for="item in data" :key="item.id"
                     :to="{ name: 'NewspaperDetail', params: { postID: item.id }}">
          <img :src="item.imgSrc" alt="image new" />
        </router-link>
      </slick>
    </div>

    <router-link to="/newspaper">
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
  import Data from '../../data/newspaper.json'

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
        },
        data: Data,

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

<style scoped lang="scss">
  @import '../../../node_modules/slick-carousel/slick/slick.css';
  @import "src/assets/styles/pages/top";

  #top {
    .cover {
      margin: 0 -10vw 0 0;

    }

    > > > .slick-list {
      margin-left: -10vw;
      transform: translateZ(0);
    }
  }

</style>
