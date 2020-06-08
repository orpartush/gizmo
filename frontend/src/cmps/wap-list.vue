<template>
  <section class="wap-list card-grid">
    <div class="wap-card" v-for="wap in waps" :key="wap._id">
      <wap-preview :wap="wap"></wap-preview>
      <template-action :wapId="wap._id"></template-action>
    </div>
  </section>
</template>

<script>
import wapPreview from "./wap-preview.vue";
import templateAction from './template-action.vue';
export default {
  props: {
    waps: Array
  },
  components: {
    wapPreview,
    templateAction
  }
};
</script>
