<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-sm-4 card-deck mb-3" v-for="result in results">
          <div class="card">
            <div class="card-body">
              <img class="card-img-top" src="#" alt="Card image cap">
              <h5 class="card-title">
                {{result.title}}
              </h5>
              <p class="card-text">{{result.abstract}}</p>
              <a :href="result.url"  class="btn btn-success">Read more</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "News",
    data() {
      return {
        results: [
          {title: "the very first post", abstract: "lorem ipsum some test dimpsum"},
          {title: "and then there was the second", abstract: "lorem ipsum some test dimsum"},
          {title: "third time's a charm", abstract: "lorem ipsum some test dimsum"},
          {title: "four the last time", abstract: "lorem ipsum some test dimsum"}
        ]
      }
    },
    mounted() {
      axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Yt3SFefA14xFjm8T4klgyXMG2t2Fexv8")
        .then(response => {this.results = response.data.results})
    }
  }
</script>

<style scoped>

</style>
