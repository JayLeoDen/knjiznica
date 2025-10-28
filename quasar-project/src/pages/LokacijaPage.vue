<template>
  <q-page padding>
    <h2>Lokacija knjiznice</h2>

    <q-card flat bordered class="q-pa-md">
      <div id="map" style="height:500px;"></div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const initialMap = ref(null)

onMounted(() => {
  initialMap.value = L.map('map').setView([45.3312, 14.4322], 13)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(initialMap.value)

  L.marker([45.3312, 14.4322])
    .addTo(initialMap.value)
    .bindPopup('Lokacija knjižnice')
    .openPopup()
})
</script>

