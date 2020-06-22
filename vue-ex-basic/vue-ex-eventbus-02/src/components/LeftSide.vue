<template>
  <div class="left-side">
    <div>
      <label for="location"> Location </label>
      <input type="text" name="location" v-model="location" />
    </div>
    <div>
      <label for="caption"> Caption </label>
      <input type="text" name="caption" v-model="caption" />
    </div>
    <input type="submit" v-on:click="sendData" value="Send">
  </div>
</template>

<script>
  export default {
    name: "LeftSide",
    data() {
      return {
        location: '',
        caption: ''
      }
    },
    methods: {
      sendData() {
        const playLoad = {
          location: this.location,
          caption: this.caption
        }
        this.$bus.emit('senddata', playLoad)
      }
    }
  }
</script>

<style scoped>
  .left-side {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #35495e;
    padding: 10px 15px;
  }

  label {
    color: #fff;
  }

  input[type=submit] {
    width: 100%;
    background-color: #42b883;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>
