<template>
  <div id="app">
    <img v-if="inProgress" class="loading" src="./assets/img/loading.svg" />
    <main-nav v-if="!websitePage"></main-nav>
    <router-view />
  </div>
</template>
<script>
import mainNav from "./cmps/main-nav.vue";
export default {
  computed: {
    inProgress() {
      return this.$store.getters.inProgress;
    },
    websitePage(){
      console.log()
      return (this.$route.path.includes('/website'))
    }
  },
  components: {
    mainNav,
  },
  created() {
    console.log('path', this.$route.path)
  }
};
</script>
<style lang="scss" scoped>
.loading {
  width: 100px;
  height: 70px;
  position: absolute;
  background: none;
  top: 0;
  left: 50%;
  z-index: 999999;
}
</style>