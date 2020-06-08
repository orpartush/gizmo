<template>
  <section>
    <div v-for="cmp in wap.cmps" :key="cmp.id">
      <component
        :is="cmp.type"
        :cmp="cmp"
        :src="cmp.imgUrl"
        :selectedCmp="selectedCmp"
        :style="cmp.style"
        :published="true"
      ></component>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      wap: {}
    };
  },
  computed: {
    selectedCmp() {
      // return this.$store.getters.selectedCmp
      return {}
    },
  },
  async created() {
    const wapId = this.$route.params.id;
    const wap = await this.$store.dispatch({ type: "loadWap", wapId });
    this.wap = wap;
  },
};
</script>
