<template>
  <li class="list-group-item" @click="setCurrentServer()">
    Server #{{server.id}}
  </li>
</template>

<script>
  import {serverBus} from "../main";

  export default {
    name: "Server",
    props: ['server', 'currentServer'],
    methods: {
      setCurrentServer: function () {
        serverBus.currentServerUpdated(this.server)
      }
    }
  }
</script>

<style scoped>
  .list-group-item {
    cursor: pointer;
  }
</style>
