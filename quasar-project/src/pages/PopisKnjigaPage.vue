<template>
  <q-page padding>
    <h2>Popis svih knjiga</h2>

    <q-table
      title="Popis knjiga"
      :rows="rows"
      :columns="columns"
      row-key="id"
      flat
      bordered
      class="q-mt-md"
    >
      <template v-slot:body-cell-slika="props">
        <q-td :props="props">
          <img :src="props.row.slika" alt="Slika knjige" style="width:50px; height:auto;" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'naslov',
    label: 'Naslov',
    field: 'naslov',
    align: 'left',
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'autor',
    label: 'Autor',
    field: 'autor',
    align: 'left',
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'opis',
    label: 'Opis',
    field: 'opis',
    align: 'left',
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'slika',
    label: 'Slika',
    field: 'slika',
    align: 'center',
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    align: 'center',
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  }
]

const rows = ref([
  {
    id: 1,
    naslov: 'Gospodar prstenova',
    autor: 'J.R.R. Tolkien',
    opis: 'Fantazijski roman o ratu prstena',
    slika: 'https://znanje.hr/product-images/cdc630d3-cd7e-456f-b558-9025dfa8d6ab.jpg',
    status: 'slobodna'
  },
  {
    id: 2,
    naslov: 'Harry Potter i ukleto dijete',
    autor: 'J.K. Rowling',
    opis: 'Avantura u Hogwartsu',
    slika: 'https://znanje.hr/product-images/f01236c1-6680-4082-8fde-5962e8a33dcf.jpg',
    status: 'zauzeta'
  },
  {
    id: 3,
    naslov: 'Družba Pere Kvržice',
    autor: 'Mato Lovrak',
    opis: 'Priča o dječjoj družini',
    slika: 'https://znanje.hr/product-images/d3879596-6d77-4817-a03c-0c44c40162b6.jpg',
    status: 'slobodna'
  }
])
</script>
