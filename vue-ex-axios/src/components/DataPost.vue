<template>
  <div class="container">
    <div class="post-data">
      <h2>Data Post</h2>
      <label>
        <input type="text" v-model="postBody" @change="postPost()">
      </label>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        postBody: '',
        errors: []
      }
    },
    methods: {
      postPost() {
        axios.post(`http://jsonplaceholder.typicode.com/posts`, {
          body: this.postBody
        }).then(res => {

        }).catch(e => {
          this.errors.push(e)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .post-data {
    text-align: left;

    ul {
      margin: 20px auto;
    }
  }
</style>
