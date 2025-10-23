<template>
  <q-page padding>
    <!-- content -->
     <h2>Popis knjiga</h2>
     <div class="q-pa-md" style="max-width: 350px">

       <q-toolbar class="bg-grey-9 text-white">
      <q-toolbar-title>
        Popis knjiga
      </q-toolbar-title>
       </q-toolbar>

    <q-list bordered separator>
       <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar square>
            <img src="https://znanje.hr/product-images/cdc630d3-cd7e-456f-b558-9025dfa8d6ab.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Gospodar prstenova</q-item-section>
      </q-item>

       <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar square>
            <img src="https://znanje.hr/product-images/f01236c1-6680-4082-8fde-5962e8a33dcf.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Harry Potter i ukleto dijete</q-item-section>
      </q-item>

       <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar square>
            <img src="https://znanje.hr/product-images/d3879596-6d77-4817-a03c-0c44c40162b6.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Družba Pere Kvržice</q-item-section>
      </q-item>
    </q-list>
  </div>
  </q-page>
</template>

<script setup>
//
</script>