<template>
  <section class="wap-container" :class="wapTheme" v-if="wap">
    <draggable
      v-model="wapCmp"
      :disabled="!enabled"
      class="list-group"
      ghost-class="ghost"
      @start="dragging=true"
      @end="dragging = false"
      group="wap"
    >
      <cmp-preview v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp" :class="wapTheme"></cmp-preview>
    </draggable>
  </section>
</template>

<script>
import cmpPreview from "./cmp-preview.vue";
import { eventBus } from '../services/eventBus.service';
export default {
  name: "wap-container",
  props: {
    wap: Object
  },
  data() {
    return {
      enabled: true,
      dragging: false
    };
  },
  components: {
    cmpPreview
  },

  computed: {
    wapCmp: {
      get() {
        return this.wap.cmps
      },
      set(cmps) {
        console.log('wap-conatainer set', cmps);
        const wapCopy = JSON.parse(JSON.stringify(this.wap))
        wapCopy.cmps = cmps
        this.$store.commit({ type: "setWap", wap: wapCopy });
        eventBus.$emit('afterWapUpdated')
      }
    },

    wapTheme() {
      return this.$store.getters.wapTheme;
    }
  }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
