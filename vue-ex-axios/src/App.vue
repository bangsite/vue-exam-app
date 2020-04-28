<template>
  <div id="app">
    <!-- <app-data></app-data> -->
    <app-data-post></app-data-post>
    <app-data-computed></app-data-computed>
  </div>
</template>

<script>
import Data from "./components/DataEx";
import DataPost from "./components/DataPost";
import DataComputed from "./components/DataComputed";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    appData: Data,
    appDataPost: DataPost,
    appDataComputed:DataComputed
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
