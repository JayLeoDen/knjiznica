<template>
  <q-page padding>
    <!-- content -->
     <h2>{{ poruka }}</h2>
     <p v-html= "tijelo"></p>
     <p v-html= "htmlText"></p>
     <p v-text= "htmlText"></p>
     <p v-for = "item in days" :key="item">
      <button v-if="item=='Ponedjeljak'">
        {{ item }}*
      </button>
      <button v-else-if="item=='Utorak'" v-show="false">
        {{ item }}
      </button>
      <button v-else>
        {{ item }}
      </button>
     </p>

     <a :href="link.url" :target="link.target"> {{ link.text }}</a>

     <q-input color="purple-12" v-model="text" label="Ime" @keyup="log()"> </q-input>
     <q-input color="blue-11" v-model="text" label="Prezime" @keyup="log()"></q-input>
     
  </q-page>
</template>

<script setup>
  const poruka = "Test page"
  const tijelo = "Tekst na stranici"
  const htmlText = "<p><b>Formatirani tekst</b> na stranici</p>"
  const days = ['Ponedjeljak' , 'Utorak' , 'Srijeda' , 'Četvrtak' , 'Petak' , 'Subota' , 'Nedjelja']
  const link = {
    url: 'http://google.com',
    target: '_blank',
    text: 'Google'
  }

  import { ref } from 'vue'
  const text = ref('')
  text.value = "Ime"

  function log() {
    console.log(text.value)
  }
</script>
