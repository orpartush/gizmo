<template>
  <section class="template-page main-layout">
    <h3 class="title">Stunning Templates</h3>
    <p class="sub-title">Start with free HTML website templates and bring your vision to life.</p>
    <wap-list :waps="waps"></wap-list>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import wapList from "../cmps/wap-list.vue";
export default {
  created() {
    this.$store.dispatch({ type: "loadWaps" });
    eventBus.$on("openEditor", this.openEditor);
  },
  computed: {
    waps() {
      return this.$store.getters.waps;
    }
  },
  methods: {
    async openEditor(wapId) {
      this.$router.push(`/editor/${wapId}`).catch(err => {});
      // this.$router.push(`/editor/${wapId}`);
    }
  },
  components: {
    wapList
  }
};
</script>