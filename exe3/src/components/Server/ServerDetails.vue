<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="server.id == -1">Server Details are currently not updated</p>
    <div v-else>
      Server # {{ server.id }}
      <br />
      Server Status: {{ server.status }}
      <br />
      <button @click="repairServer(server)" v-if="server.status != 'Normal'">
        Repair Server
      </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    repairServer(server) {
      server.status = "Normal";
    }
  },
  created() {
    eventBus.$on("selectedServer", server => {
      this.server = server;
    });
  }
};
</script>

<style></style>
