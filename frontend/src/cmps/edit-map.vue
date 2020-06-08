<template>
  <section class="edit-map">
    <div class="location flex space-between align-center">
      <p>Search location:</p>
      <gmap-autocomplete @place_changed="getAddressData"></gmap-autocomplete>
    </div>

    <div class="map-config">
      <p>Height:</p>
      <el-slider v-model="mapData.style.height" :min="300" :max="1000" @input="update" show-input></el-slider>
    </div>
    <hr class="divider" />
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.service.js";
import { mapService } from "../services/map.service.js";
import vueSlider from "vue-slider-component";
export default {
  props: {
    mapCmp: Object
  },
  components: {
    vueSlider
  },
  data() {
    return {
      mapData: {
        style: {
          // width: 500,
          height: 500
        },
        pos: {}
      }
    };
  },
  methods: {
    getAddressData(place) {
      this.mapData.pos = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      this.update();
    },
    update() {
      const mapCopy = JSON.parse(JSON.stringify(this.mapCmp));
      mapCopy.style = this.mapData.style;
      mapCopy.center = this.mapData.pos;
      mapCopy.markers[0].position = this.mapData.pos;

      eventBus.$emit("updateCmp", JSON.parse(JSON.stringify(mapCopy)));
    }
  }
};
</script>