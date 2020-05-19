<template>
  <div class="current">
    <h1>A different component</h1>

    <p>There are currently {{ countLinks }} links</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Current",

  computed: {
    ...mapGetters("link", ["countLinks"]),
  },
};
</script>
