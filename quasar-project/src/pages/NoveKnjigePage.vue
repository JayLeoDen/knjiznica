<template>
  <q-page padding>
    <h2>Unos novih knjiga</h2>

    <q-card class="q-pa-md q-mb-md" flat bordered>
      <div class="row q-col-gutter-md">
        <q-input filled v-model="novaKnjiga.naslov" label="Naslov knjige" class="col-12 col-md-6" />
        <q-input filled v-model="novaKnjiga.autor" label="Autor" class="col-12 col-md-6" />
        <q-input filled v-model="novaKnjiga.opis" label="Opis" type="textarea" class="col-12" />

        <q-file
          filled
          v-model="novaKnjiga.slika"
          label="Odaberi sliku"
          accept="image/*"
          class="col-12 col-md-6"
        />

        <q-select
          filled
          v-model="novaKnjiga.status"
          :options="statusOpcije"
          label="Status"
          class="col-12 col-md-6"
        />
      </div>

      <q-card-actions align="right">
        <q-btn label="Spremi" color="primary" @click="spremiKnjigu" />
        <q-btn label="Odustani" color="negative" flat @click="odustani" />
      </q-card-actions>
    </q-card>

    <div class="row q-col-gutter-md">
      <q-card
        v-for="knjiga in knjige"
        :key="knjiga.id"
        bordered
        class="col-12 col-md-4 q-pa-sm"
      >
        <q-img
          v-if="knjiga.slikaUrl"
          :src="knjiga.slikaUrl"
          :alt="knjiga.naslov"
          style="height:200px; object-fit:cover;"
        />
        <q-card-section>
          <div class="text-h6">{{ knjiga.naslov }}</div>
          <div class="text-subtitle2">Autor: {{ knjiga.autor }}</div>
          <div class="text-caption q-mt-sm">{{ knjiga.opis }}</div>
          <q-badge
          :color="knjiga.status === 'Slobodna' ? 'positive' : 'negative'"
          class="q-mt-sm"
          align="top"
          >
          {{ knjiga.status }}
        </q-badge>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const statusOpcije = ['Slobodna', 'Zauzeta']

const novaKnjiga = ref({
  id: 0,
  naslov: '',
  autor: '',
  opis: '',
  slika: null,
  status: ''
})

const knjige = ref([])

function spremiKnjigu() {
  if (!novaKnjiga.value.naslov || !novaKnjiga.value.autor) {
    alert('Molimo unesite naslov i autora.')
    return
  }

  const noviId = knjige.value.length + 1

  let slikaUrl = ''
  if (novaKnjiga.value.slika) {
    slikaUrl = URL.createObjectURL(novaKnjiga.value.slika)
  }

  knjige.value.push({
    id: noviId,
    naslov: novaKnjiga.value.naslov,
    autor: novaKnjiga.value.autor,
    opis: novaKnjiga.value.opis,
    slikaUrl,
    status: novaKnjiga.value.status || 'slobodna'
  })

  odustani()
}

function odustani() {
  novaKnjiga.value = {
    id: 0,
    naslov: '',
    autor: '',
    opis: '',
    slika: null,
    status: ''
  }
}
</script>