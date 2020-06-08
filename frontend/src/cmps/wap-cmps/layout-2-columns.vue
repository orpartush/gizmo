<template>
  <section class="layout-2-columns pet-theme flex justify-center" :style="cmp.style">
    <draggable
      v-model="contactCmp"
      class="flex space-evenly align-center"
      style="width:100%"
      @start="dragging = true"
      @end="dragging = false"
      group="wap"
      :disabled="!enabled"
    >
      <component
        v-for="child in cmp.children"
        :is="child.type"
        :cmp="child"
        :key="child.id"
        :src="child.imgUrl"
        :style="child.style"
        :published="published"
        :selectedCmp="selectedCmp"
        @click.stop="openEdit(child)"
      >{{child.txt}}</component>
    </draggable>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service.js'
import appCard from "./app-card.vue";
import appArticle from './app-article.vue';
import appContact from './app-contact-us.vue'
export default {
  props: {
    cmp: Object,
    selectedCmp: Object,
    published: Boolean
  },
  data() {
    return {
      enabled: true,
      cmpCopy: JSON.parse(JSON.stringify(this.cmp))
    }
  },
  created() {
    if (this.published){
      this.enabled = false
      } 
      
  },
  computed: {
    contactCmp: {
      get() {
        return JSON.parse(JSON.stringify(this.cmp.children));
      },
      set(cmps) {
        const cmpCopy = JSON.parse(JSON.stringify(this.cmp))
        cmpCopy.children = cmps
        eventBus.$emit('updateCmp', cmpCopy);
      }
    },

  },
  watch: {
    cmp: {
      handler() {
        this.cmpCopy = JSON.parse(JSON.stringify(this.cmp))

      },
      deep: true
    }
  },
  methods: {
    openEdit(cmp) {
      // console.log(cmp)
      eventBus.$emit('edit', cmp)
    },
  },
  components: {
    appCard,
    appArticle,
    appContact,
  }
};
</script>
