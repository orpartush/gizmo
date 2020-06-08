<template>
  <section
    class="app-contact-us pet-theme flex space-evenly"
    id="app-contact-us"
    :class="cmp.subClass"
  >
    <draggable
      v-model="contactCmp"
      class="flex space-evenly"
      style="width:100%"
      @start="dragging = true"
      @end="dragging = false"
      group="wap"
    >
      <component
        class="info"
        :style="child.style"
        v-for="child in cmp.children"
        :contenteditable="isEditing"
        :selectedCmp="selectedCmp"
        :is="child.type"
        :cmp="child"
        :key="child.id"
        @dblclick="editMode"
        @blur="editTxt($event,child)"
        @click.stop="openEdit(child)"
      >{{child.txt}}</component>

      <app-form></app-form>
    </draggable>
  </section>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
import appForm from "./app-form.vue";
export default {
  props: {
    cmp: Object,
    selectedCmp: Object,
    published: Boolean
  },
  data() {
    return {
      isEditing: false
    };
  },
  created() {
    if (this.published) this.isEditing = false;
  },
  computed: {
    contactCmp: {
      get() {
        return JSON.parse(JSON.stringify(this.cmp.children));
      },
      set(cmps) {
        const cmpCopy = JSON.parse(JSON.stringify(this.cmp));
        cmpCopy.children = cmps;
        eventBus.$emit("updateCmp", cmpCopy);
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
      this.isEditing = false;
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      eventBus.$emit("edit", cmp);
    }
  },
  components: {
    appForm
  }
};
</script>
