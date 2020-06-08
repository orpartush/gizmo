<template>
  <section
    class="layout-3-columns pet-theme flex justify-center align-center"
    :class="cmp.subClass"
  >
    <draggable
      v-model="currCmp"
      class="flex space-evenly align-center"
      @start="dragging = true"
      @end="dragging = false"
      :group="{name:'wap'}"
      :disabled="!enabled"
    >
      <component
        v-for="child in cmp.children"
        :is="child.type"
        :cmp="child"
        :key="child.id"
        :src="child.imgUrl"
        :style="child.style"
        :selectedCmp="selectedCmp"
        :published="published"
        :class="{'mark-selected':child.id === selectedCmp.id}"
        @click.stop="openEdit(child)"
      ></component>
    </draggable>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
export default {
  props: {
    cmp: Object,
    selectedCmp: Object,
    published: Boolean
  },
  data() {
    return {
      enabled: true
    }
  },
  created() {
    if (this.published) {
      this.enabled = false
    }

  },
  methods: {
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    }
  },
  computed: {
    currCmp: {
      get() {
        return JSON.parse(JSON.stringify(this.cmp.children));
      },
      set(children) {
        const cmpCopy = JSON.parse(JSON.stringify(this.cmp));
        cmpCopy.children = children;
        eventBus.$emit("updateCmp", cmpCopy);
        if (this.cmp.children.length !== children.length) {
          // } else {
          eventBus.$on('afterWapUpdated', () => {
            eventBus.$emit('updateCmp', cmpCopy);
            eventBus.$off('afterWapUpdated')
          })
        }
      }
    }
  },
};
</script>