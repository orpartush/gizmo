<template>
  <section class="editor-page flex">
    <editor-sidebar @addCmp="addCmp" :cmps="cmps" />
    <wap-container :wap="wap"></wap-container>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import { wapService } from "../services/wap.service.js";
import { cmpService } from "../services/cmp.service.js";
import editorSidebar from "../cmps/editor-sidebar.vue";
import wapContainer from "../cmps/wap-container.vue";
export default {
  data() {
    return {
      cmps: []
    };
  },
  async created() {
    const wapId = this.$route.params.id;
    this.$store.dispatch({ type: "loadWap", wapId });

    let cmps = await cmpService.query();
    this.cmps = cmps;

    eventBus.$on("updateCmp", cmp => {
      
      this.$store.dispatch({ type: "updateCmp", cmp });
    });
    eventBus.$on("remove", cmpId => {
      this.$store.commit({ type: "removeCmp", cmpId });
    });
    eventBus.$on("updatePos", updatedPos => {
      this.$store.commit({ type: "updatePos", updatedPos });
    });
    eventBus.$on("edit", cmp => {
      this.$store.commit({ type: "setSelectedCmp", cmp });
    });
    eventBus.$on("uploadImg", ev => {
      this.$store.dispatch({ type: "uploadImg", ev });
    });
    // eventBus.$on("saveWap", () => this.saveWap());
    eventBus.$on("updateWapPrefs", wapPrefs => {
      this.$store.commit({ type: "updateWapPrefs", wapPrefs });
    });
    eventBus.$on("changeWapTheme", theme => {
      this.$store.commit({ type: "changeWapTheme", theme });
    });
    eventBus.$on("changeWapTitle", title => {
      this.$store.commit({ type: "changeWapTitle", title });
    });
  },
  computed: {
    wap() {
      return this.$store.getters.wap;
    }
  },
  methods: {
    addCmp(cmp) {
      this.$store.dispatch({ type: "addCmp", cmp });
      this.$message({
        type: "success",
        showClose: true,
        message: "Add completed"
      });
    },
    updateCmp(cmp) {
      this.$store.dispatch({ type: "updateCmp", cmp });
    },
    // async saveWap() {
    //   try{
    //     const id = await this.$store.dispatch({ type: "saveWap" });
    //     console.log("link", window.location.origin + "/website/" + id);
    //     this.$alert(`<strong>This is your link to your <a href="${window.location.origin}/website/${id}">website</a></strong>`, 'HTML String', {
    //       dangerouslyUseHTMLString: true
    //     });
    //   }catch(err){
    //      this.$message({
    //       showClose: true,
    //       message: 'Oops, this is a error message.',
    //       type: 'error'
    //     });
    //   }
    // }
  },
  components: {
    editorSidebar,
    wapContainer
  }
};
</script>