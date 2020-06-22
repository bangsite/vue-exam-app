<template>
  <div>
    <h1>Counter from Foo: {{counter}}</h1>

  </div>
</template>

<script>
  export default {
    name: "Bar",
    data() {
      return {
        counter: 0
      }
    },
    created() {
      // listen event counter increase  is value send from event increaseCounter
      this.$bus.on('increaseCounter', value => {
        this.counter = value
      })
    }
  }
</script>

<style scoped>

</style>
