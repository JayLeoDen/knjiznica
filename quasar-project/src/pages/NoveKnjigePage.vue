<template>
  <q-page padding>
    <!-- content -->
     <h2>Nove knjige</h2>

     <q-toolbar class="bg-grey-9 text-white">
      <q-toolbar-title>
        Popis knjiga
      </q-toolbar-title>
       </q-toolbar>

     <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="~assets/knjige.jpg">

      <q-card-section>
        <div class="text-h6">Gospodar Prstenova</div>
        <div class="text-subtitle2">by J.R.R.Tolkien</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

        <q-card class="my-card">
      <img src="~assets/knjige2.jpg">

      <q-card-section>
        <div class="text-h6">Harry Potter i ukleto dijete</div>
        <div class="text-subtitle2">by J.K.Rowling</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem1 }}
      </q-card-section>
    </q-card>

        <q-card class="my-card">
      <img src="~assets/knjige3.jpg">

      <q-card-section>
        <div class="text-h6">Družba Pere Kvržice</div>
        <div class="text-subtitle2">by Mato Lovrak</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem2 }}
      </q-card-section>
    </q-card>
  </div>
  </q-page>
</template>

<script>
export default {
  setup () {
    return {
      lorem: 'Fantazijski roman o ratu prstena' ,
      lorem1: 'Avantura u Hogwartsu',
      lorem2: 'Priča o dječjoj družini'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 275px
</style>
