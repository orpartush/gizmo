<template>
  <section class="app-article pet-theme" id="app-article" :class="cmp.subClass">
    <draggable
      v-model="currCmp"
      class="flex flex-column justify-center align-center"
      @start="dragging = true"
      @end="dragging = false"
      group="wap"
      :disabled="!enabled"
    >
      <component
        v-for="child in cmp.children"
        :is="child.type"
        :key="child.id"
        :style="child.style"
        :cmp="child"
        :selectedCmp="selectedCmp"
        :contenteditable="isEditing"
        @dblclick="editMode"
        @blur="editTxt($event,child)"
        :src="child.imgUrl"
        :class="{ 'mark-selected':child.id === selectedCmp.id}"
        @click.stop="openEdit(child)"
      >{{child.txt}}</component>
    </draggable>
  </section>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  props: {
    cmp: Object,
    selectedCmp: Object,
    published: Boolean
  },
  data() {
    return {
      dragging: false,
      isEditing: false,
      enabled: true,
    }
  },
  created() {
    if (this.published) {
      this.isEditing = false
      this.enabled = false
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
  methods: {
    editMode() {
      if (!this.published) {
        this.isEditing = true;
      }
    },
    editTxt(ev, cmp) {
      this.isEditing = false
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    }
  }
};
</script>
