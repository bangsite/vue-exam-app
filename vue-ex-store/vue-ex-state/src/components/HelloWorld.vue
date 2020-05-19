<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="(link, index) in url" :key="index">
          {{ link }}
        </li>
      </ul>
    </div>
    <div class="right">
      <Current />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Current from "./Current";

export default {
  name: "HelloWorld",

  components: {
    Current,
  },

  computed: {
    // title(){
    //   console.log(this.$store.state);
    //   return this.$store.state.link.title;
    // }
    ...mapState("link", ["title", "url"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h3 {
  margin: 40px 0 0;
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

body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  text-align: center;
}

.left,
.right {
  margin: 10px auto;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  margin: 0;
  border-radius: 4px;
  width: 100%;
  padding: 20px 0;
  background: #336699;
  margin-bottom: 8px;
  color: #fff;
  cursor: pointer;
}

ul li:hover {
  background: rgba(51, 102, 152, 0.7);
}

.right {
  background: #eeffdd;
  display: block;
  margin: auto;
  width: 100%;
}
.right .current {
  padding: 20px;
}
</style>
