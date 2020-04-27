export default function (elName) {
  return {
    data() {
      return {
        windowWidth: 0,
        windowHeight: 0,
      }
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth);
        window.addEventListener('resize', this.getWindowHeight);
        window.addEventListener('resize', this.rescale);

        // Init
        this.getWindowWidth();
        this.getWindowHeight();
        this.rescale();
      })
    },
    methods: {
      getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;

      },
      getWindowHeight() {
        this.windowHeight = document.documentElement.clientHeight;

      },
      rescale() {
        let el = document.getElementById(elName);
        if (el) {
          let height = el.offsetHeight,
            width = el.offsetWidth,
            ratio = (this.windowWidth - 60) / 1495;
          el.style.transform = "scale(" + ratio + ")";
          el.parentElement.style.height = height * ratio + 'px';
          el.parentElement.style.width = width * ratio + 'px';
        }
      }
    }
  }

}
