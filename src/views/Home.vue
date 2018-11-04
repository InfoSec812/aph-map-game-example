<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 40%;"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  name: 'PageHome',
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 10,
      center: L.latLng(47.41322, -1.219482),
      marker: L.latLng(47.41322, -1.219482),
      currentZoom: 10,
      currentCenter: L.latLng(47.41322, -1.219482)
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>
