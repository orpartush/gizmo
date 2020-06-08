<template>
  <div class="home-page flex flex-column justify-center">
    <header class="hero flex flex-column justify-center align-center">
      <section class="hero-title">Build your new responsive website in minutes</section>
      <p>Our innoviate system and beautiful templates allow you to build any type of website.</p>
      <button @click="showMore">Get Started</button>
    </header>
    <section class="infos flex flex-wrap justify-center">
      <section class="info-1 flex flex-column space-between align-center">
        <div>
          <h1>Drag and Drop</h1>
          <p>Use our powerful drag and drop feature for the best website building experience.</p>
        </div>
        <img src="@/assets/img/info-1.png" alt="Drag and Drop Image" />
      </section>
      <section class="info-2 info-1 flex flex-column space-between align-center">
        <div>
          <h1>Responsive</h1>
          <p>Build fast and responsive website and make it look beautiful even on mobile and tablet.</p>
        </div>
        <img src="@/assets/img/info-2.png" alt="Responsive Image" />
      </section>
      <section class="info-3 info-1 flex flex-column space-between align-center">
        <div>
          <h1>No Code</h1>
          <p>Find out how easy it is to build a powerful responsive website, with our system.</p>
        </div>
        <img src="@/assets/img/info-3.png" alt="No Code Image" />
      </section>
    </section>
  </div>
</template>
<script>
import { eventBus } from "../services/eventBus.service.js";
import wapList from "../cmps/wap-list.vue";
export default {
  created() {
    this.$store.dispatch({ type: "loadWaps" });
  },
  computed: {
    waps() {
      let waps = this.$store.getters.waps;
      return waps.slice(0, 3);
    }
  },
  methods: {
    async openEditor(wapId) {
      this.$router.push(`/editor/${wapId}`).catch(err => {});
    },
    showMore() {
      this.$router.push("/template");
    }
  },
  components: {
    wapList
  }
};
</script>