<template>
  <div class="cmp-preview">
    <component
      :is="cmp.type"
      :cmp="cmp"
      :selectedCmp="selectedCmp"
      :style="cmp.style"
      :src="cmp.imgUrl"
      :class="[getWapTheme,{'mark-selected':cmp.id === selectedCmp.id}]"
      @click.native.stop="edit(cmp)"
      :published="false"
    >{{cmp.txt}}</component>
    <action-panel :cmp="cmp"></action-panel>
    <div class="screen"></div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import actionPanel from './action-panel.vue';

export default {
  props: {
    cmp: Object,
  },
  methods: {
    edit(cmp) {
      eventBus.$emit('edit', cmp)
    },
  },
  computed: {

    getWapTheme() {
      return this.$store.getters.wapTheme
    },
    selectedCmp() {
      return this.$store.getters.selectedCmp
    },
  },
  components: {
    actionPanel
  },
};
</script>