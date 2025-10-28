<template>
  <q-page padding>
    <h2>Pretrazivanje knjiga</h2>

    <q-card class="q-pa-md q-mb-md" flat bordered>
      <div class="row q-gutter-md">
        <q-input
          filled
          v-model="pojam"
          label="Unesite pojam"
          class="col-12 col-md-4"
          label-class="text-weight-normal"
        />

        <q-checkbox
          v-model="poAutor"
          label="Pretraži po autoru"
          class="col-12 col-md-2"
          label-class="text-weight-normal"
        />

        <q-checkbox
          v-model="poNaslov"
          label="Pretraži po naslovu"
          class="col-12 col-md-2"
          label-class="text-weight-normal"
        />
      </div>

      <q-card-actions align="right">
        <q-btn label="Traži" color="primary" @click="trazi" />
      </q-card-actions>
    </q-card>

    <q-table
      title="Rezultati pretraživanja"
      :rows="rezultati"
      :columns="columns"
      row-key="id"
      flat
      bordered
      class="q-mt-md"
      :rows-per-page-options="[5, 10, 15]"
      v-model:pagination="pagination"
    >
      <template v-slot:body-cell-slika="props">
        <q-td :props="props">
          <q-img
            :src="props.row.slika"
            :alt="props.row.naslov"
            style="width:50px; height:auto;"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const pojam = ref('')
const poAutor = ref(false)
const poNaslov = ref(false)

const pagination = ref({ page:1, rowsPerPage:5 })

const columns = [
  { name: 'id', label: 'ID', field: 'id', align:'left', style:{fontSize:'14px'}, headerStyle:{fontSize:'18px'} },
  { name: 'naslov', label: 'Naslov', field: 'naslov', align:'left', style:{fontSize:'14px'}, headerStyle:{fontSize:'18px'} },
  { name: 'autor', label: 'Autor', field: 'autor', align:'left', style:{fontSize:'14px'}, headerStyle:{fontSize:'18px'} },
  { name: 'slika', label: 'Slika', field: 'slika', align:'center', style:{fontSize:'14px'}, headerStyle:{fontSize:'18px'} }
]

const sveKnjige = [
  { id: 1, naslov: 'Gospodar prstenova', autor: 'J.R.R. Tolkien', slika: 'https://znanje.hr/product-images/cdc630d3-cd7e-456f-b558-9025dfa8d6ab.jpg' },
  { id: 2, naslov: 'Harry Potter i ukleto dijete', autor: 'J.K. Rowling', slika: 'https://znanje.hr/product-images/f01236c1-6680-4082-8fde-5962e8a33dcf.jpg' },
  { id: 3, naslov: 'Družba Pere Kvržice', autor: 'Mato Lovrak', slika: 'https://znanje.hr/product-images/d3879596-6d77-4817-a03c-0c44c40162b6.jpg' }
]

const rezultati = ref([...sveKnjige])

function trazi() {
  if (!pojam.value) {
    rezultati.value = [...sveKnjige]
    return
  }

  rezultati.value = sveKnjige.filter(k =>
    k.naslov.toLowerCase().includes(pojam.value.toLowerCase()) ||
    k.autor.toLowerCase().includes(pojam.value.toLowerCase())
  )
}

</script>
