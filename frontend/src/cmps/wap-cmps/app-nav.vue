<template>
  <nav
    class="app-nav pet-theme flex space-between align-center"
    :class="cmp.subClass"
    @click.stop="edit(cmp)"
    role="navv"
    slot="header"
  >
    <p v-for="logo in logos" :key="logo.id">
      <component
        class="logo"
        :is="logo.type"
        :style="logo.style"
        :contenteditable="isEditing"
        @dblclick="editMode"
        @blur="editTxt($event,logo)"
        :class="{'mark-selected':logo.id === selectedCmp.id}"
        @click.stop="edit(logo)"
      >{{logo.txt}}</component>
    </p>
    <ul class="nav-links flex align-center" :class="{'menu-open': isMenuOpen}">
      <li v-for="link in links" :key="link.id">
        <component
          :is="link.type"
          :style="link.style"
          :contenteditable="isEditing"
          :href="'#' + link.to"
          @dblclick="editMode"
          @blur="editTxt($event,link)"
          :src="link.imgUrl"
          :class="{'mark-selected':link.id === selectedCmp.id}"
          @click.stop="edit(link)"
        >{{link.txt}}</component>
      </li>
    </ul>
    <p class="hamburger-menu" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </p>
  </nav>
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
      isMenuOpen: false,
      isEditing: false
    }
  },
  created() {
    if (this.published) this.isEditing = false
  },
  computed: {
    links() {
      const links = this.cmp.children.filter(child => {
        return child.type === 'a'
      })
      return links
    },
    logos() {

      const logo = this.cmp.children.filter(child => {
        return child.type === 'h1'
      })
      return logo
    }
  },
  methods: {
    editMode() {
      if (!this.published) {
        this.isEditing = true;
      }
    },
    edit(cmp) {
      eventBus.$emit('edit', cmp)
    },
    editTxt(ev, cmp) {
      this.isEditing = false
      var cmpCopy = JSON.parse(JSON.stringify(cmp));
      cmpCopy.txt = ev.target.innerText;
      this.editMode = false
      eventBus.$emit("updateCmp", cmpCopy);
    },
    editLogo(ev) {
      var cmpCopy = JSON.parse(JSON.stringify(this.cmp));
      cmpCopy.logo = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
    openEdit(cmp) {
      this.editMode = true
      eventBus.$emit('edit', cmp)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMobileNav() {
      this.isMenuOpen = false;
    }
  }
};
</script>
