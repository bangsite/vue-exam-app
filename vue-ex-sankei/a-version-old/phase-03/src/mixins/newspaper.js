
export default function (elName) {
  return {
    data() {
      return {
        windowWidth: 0,
        windowHeight: 0
      };
    },
    mounted() {
      this.$nextTick(function() {
        window.addEventListener("resize", this.getWindowWidth);
        window.addEventListener("resize", this.getWindowHeight);
        window.addEventListener("resize", this.rescale);
  
        //Init
        this.getWindowWidth();
        this.getWindowHeight();
        this.rescale();
      });
    },
    methods: {
      getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;
      },
      getWindowHeight() {
        this.windowHeight = document.documentElement.clientHeight;
      },
      rescale() {
        let elem = document.getElementById(elName);
        let height = elem.offsetHeight,
          width = elem.offsetWidth,
          ratio = (this.windowWidth - 60) / 1495;
  
        elem.style.transform = "scale(" + ratio + ")";
        elem.parentElement.style.height = height * ratio + "px";
        elem.parentElement.style.width = width * ratio + "px";
      }
    }
  }
}
