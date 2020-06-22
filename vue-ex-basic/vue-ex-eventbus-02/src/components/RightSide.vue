<template>
  <div class="right-side">
    <div class="content">
      <p>{{data.location}}</p>
      <p>{{data.caption}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightSide",
    data() {
      return {
        data: {
          location: 'Location placeholder',
          caption: 'Caption placeholder'
        }
      }
    },
    methods: {
      updateData(playLoad) {
        this.data = playLoad
      }
    },
    mounted() {
      this.$bus.on('senddata', (playLoad) => {
        this.updateData(playLoad)
      })
    }
  }
</script>

<style scoped>
  .right-side {
    width: 100%;
    background-color: #42b883;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
</style>
