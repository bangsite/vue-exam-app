<template>
  <div id="app">
    <h2 class="text-center">News Time NewsYork</h2>
    <News />
  </div>
</template>

<script>
  import News from "./components/News";

  export default {
    name: 'app',
    components: {
      News
    },
    methods: {
      async createPost() {
        const {data} = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          this.post
        );
        this.data = data;
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
