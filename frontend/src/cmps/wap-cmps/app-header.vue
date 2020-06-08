<template>
  <!-- <div> -->
  <header
    class="app-header icy-theme flex justify-center align-center flex-column"
    id="app-header"
    :class="cmp.subClass"
    :style="[cmp.style, {'background-image': 'url(' + cmp.imgUrl + ')' }]"
  >
    <draggable
      v-model="currCmp"
      class="txt-container flex space-evenly align-center"
      @start="startDrag"
      @end="stopDrag"
      group="wap"
      :disabled="!enabled"
      >
      <component
        v-for="child in cmp.children"
        :key="child.id"
        :is="child.type"
        :style="child.style"
        :cmp="child"
        :contenteditable="isEditing"
        :selectedCmp="selectedCmp"
        :src="child.imgUrl"
        :class="{'title':child.type === 'p',
               'mark-selected':child.id === selectedCmp.id}"
        @dblclick="editMode"
        @blur="editTxt($event,child)"
        @click.stop="openEdit(child)"
      >{{child.txt}}</component>
    </draggable>
  </header>
  <!-- </div> -->
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
      cmpCopy: JSON.parse(JSON.stringify(this.selectedCmp)),
      enabled: true,
      dragging: false,
      isEditing: false
    }
  },
  created() {
    if (this.published){
      this.isEditing = false
      this.enabled = false
      } 
      
  },
  methods: {
    startDrag() {
      
      this.dragging = true
    },
    editMode() {
      if (!this.published) {
        this.isEditing = true;
      }
    },
    stopDrag() {
      this.dragging = false
    },
    editTxt(ev, cmp) {
      this.isEditing = false
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit('updateCmp', cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    },
  },
  computed: {
    imgStyle() {
      if (cmp.subClass === "icy-theme") {
        return { "background-image": "url(" + cmp.imgUrl + ")" };
      }
    },
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
  watch: {
    selectedCmp() {
      this.cmpCopy = JSON.parse(JSON.stringify(this.selectedCmp));
    }
  }
};
</script>
<style>
.test {
  background: red;
}
</style>