<template>
  <div class="container">
    <div class="get-data">
      <h2>Get Data</h2>

      <ul v-if="posts && posts.length">
        <li v-for="post of posts">
          <p><strong>{{post.title}}</strong></p>
          <p>{{post.body}}</p>
          <hr>
        </li>

      </ul>
    </div>
  </div>


</template>

<script>
  import {HTTP} from '../config/http-common'

  export default {
    data() {
      return {
        posts: [],
        errors: []
      }
    },
    created() {
      // Get data
      HTTP.get(`posts`).then(
        res => {
          this.posts = res.data
        }
      ).catch(e => {
        this.errors.push(e)
      })
    },
  }
</script>

<style scoped lang="scss">
.get-data{
  text-align: left;

  ul{
    margin: 20px auto;
  }
}
</style>
