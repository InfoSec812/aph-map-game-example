<template>
  <div>
    <div class="map_canvas">
      <l-map
        :zoom="zoom"
        :center="mapCenter"
        preferCanvas="false"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate">
        <l-tile-layer
          :url="url"
          :attribution="attribution"/>
      </l-map>
    </div>
  </div>
</template>
<style>
.map_canvas {
  height: 100vh;
  width: 100vw;
  z-index: 0;
  position: absolute;
  top: 0px;
  left: 0px;
}
.overlay {
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "App",
  components: {
    LMap,
    LTileLayer
  },
  computed: {
    mapCenter: function() {
      var latVal = this.latitude / 100000;
      var longVal = this.longitude / 100000;
      return L.latLng(latVal, longVal);
    }
  },
  data() {
    return {
      zoom: 18,
      latitude: 3829759,
      longitude: -8567645,
      satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      satAttribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  mounted: function() { // When this component is mounted into the Virtual DOM, execute the `getLocation` method
    this.getLocation();
  },
  methods: {
    getLocation() { // Try to get the geolocation from the browser and if successful pass the location data to the `updateLocation` callback
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.updateLocation);
        }
    },
    updateLocation(position) {  // Update the lat/long of the map view using the provided location data
      this.latitude = position.coords.latitude*100000;
      this.longitude = position.coords.longitude*100000;
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
      this.latitude = this.currentCenter.lat * 100000;
      this.longitude = this.currentCenter.lng * 100000;
    }
  }
};
</script>
