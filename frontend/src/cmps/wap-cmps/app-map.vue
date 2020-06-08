<template>
  <section class="app-map light-and-shiny" :class="cmp.subClass" @click.stop="openEdit()">
    <GmapMap
      class="map"
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      :style="`width: ${cmp.style.width}px; height: ${cmp.style.height}px`"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="center=m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
import { eventBus } from '../../services/eventBus.service'

export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      center: this.cmp.center,
      markers: this.cmp.markers,
      width: 500,
      height: 500,
    };
  },

  methods: {
    openEdit(){
      eventBus.$emit('edit', this.cmp)
    }
  },
};
</script>
