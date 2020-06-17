<template>
  <div class="col-12 col-sm-6">
    <ul class="list-group">
      <Server v-for="server in servers" :key="server.id" :server="server" :currentServer="currentServer" />

    </ul>
  </div>
</template>

<script>
  import Server from "./Server";
  import {serverBus} from "../main";

  export default {
    name: "ServerList",
    data: () => {
      return {
        servers: serverBus.servers,
        currentServer: {},
      }
    },
    components: {
      Server
    }
  }
</script>

<style scoped>

</style>
