<template>
  <footer
    class="app-footer icy-theme flex justify-center align-center flex-column"
    id="app-footer"
    :class="cmp.subClass"
  >
    <component
      v-for="child in cmp.children"
      :is="child.type"
      :key="child.id"
      :cmp="child"
      :contenteditable="isEditing"
      @dblclick="editMode"
      @blur="editTxt($event,child)"
      :selectedCmp="selectedCmp"
      :class="{'mark-selected':child.id === selectedCmp.id}"
      :src="child.imgUrl"
      :style="child.style"
      @click.stop="openEdit(child)"
    >{{child.txt}}</component>
  </footer>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
import socialLinks from './app-social-links.vue'
import appChat from './app-chat.vue'
export default {
  props: {
    cmp: Object,
    selectedCmp: Object,
    published: Boolean
  },
  data() {
    return {
      isEditing: false
    }
  },
  created() {
    if (this.published) this.isEditing = false
  },
  methods: {
    editMode() {
      if (!this.published) {
        this.isEditing = true;
      }
    },
    editTxt(ev, cmp) {
      this.isEditing = false
      var cmpCopy = JSON.parse(JSON.stringify(this.cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit('edit', cmp)
    }
  },
  components: {
    socialLinks,
    appChat
  }
};
</script>