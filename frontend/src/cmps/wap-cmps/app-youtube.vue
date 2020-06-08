<template>
  <div class="video-container" @click.stop="openEdit(cmp)" :style="cmp.style">
    <!-- <h3 class="title" :contenteditable="true" @blur="editTxt($event,cmp)">{{cmp.title}}</h3> -->
    <iframe :style="cmp.style" :src="cmp.url"></iframe>
  </div>
</template>

<script>
import { eventBus } from "../../services/eventBus.service.js";
export default {
  props: {
    cmp: Object
  },
  methods: {
     openEdit(cmp){
      eventBus.$emit('edit', cmp)
    },
     editTxt(ev, cmp) {
      var cmpCopy = JSON.parse(JSON.stringify(this.cmp));
      cmpCopy.txt = ev.target.innerText;
      eventBus.$emit("updateCmp", cmpCopy);
    },
  },
}
</script>
<style lang="scss" scoped>
  iframe{
    padding: 20px;
  }
</style>
