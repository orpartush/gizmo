<template>
  <div v-if="cmp.type !== 'app-nav'" class="action-panel">
    <div class="action-container flex">
      <div>
        <button @click="remove()">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div v-if="cmp.type !== 'app-nav'" class="move-cmp">
        <button @click="updatePos(1)">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button @click="updatePos(-1)">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
export default {
  props: {
    cmp: Object
  },
  methods: {
    remove() {
      this.$confirm(
        "This will permanently delete the section. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          eventBus.$emit("remove", this.cmp.id);
          this.$message({
            type: "success",
            showClose: true,
            message: "Delete completed"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            showClose: true,
            message: "Delete canceled"
          });
        });
    },
    updatePos(diff) {
      eventBus.$emit("updatePos", { diff, cmp: this.cmp });
    }
  }
};
</script>

<style>
</style>