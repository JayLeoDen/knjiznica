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
        {{ lorem2 }}
      </q-card-section>
    </q-card>

        <q-card class="my-card">
      <img src="~assets/knjige3.jpg">

      <q-card-section>
        <div class="text-h6">Družba Pere Kvržice</div>
        <div class="text-subtitle2">by Mato Lovrak</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem1 }}
      </q-card-section>
    </q-card>
  </div>
  </q-page>
</template>

<script>
export default {
  setup () {
    return {
      lorem: 'Prstenova družina predstavlja prvi dio trilogije. U drevna vremena vilinski su kovači izradili Prstenove Moći, a Gospodar Tame Sauron iskovao je Vrhovni Prsten i ispunio ga svojom moći kako bi vladao nad svima ostalima. Ali Vrhovni mu je Prsten oduzet i, premda ga je tražio diljem Međuzemlja, nije ga mogao naći. Nakon dugog razdoblja Prsten je pao u ruke Bilba Torbara. U jednom pospanom selu u Kotaru mladi Frodo Torbar dobiva strašan zadatak nakon što mu stariji rođak Bilbo preda Prsten na čuvanje. Frodo mora napustiti dom i krenuti na pogibeljno putovanje kroz Međuzemlje do Napuklina Kobi, gdje treba uništiti Prsten i osujetiti zle namjere Gospodara Tame.' ,
      lorem1: 'Družba Pere Kvržice najživotniji je Lovrakov roman u kojem pripovijeda o grupi školaraca koji zajedničkim snagama postižu zajednički cilj – obnovu zapuštenog mlina. Uz pomoć učitelja, nakon mnogih radnih dana i uzbudljivih događaja vesela družba osposobljava mlin i predaje ga seljacima. Roman Družba Pere Kvržice uvršten je u školsku lektiru i na mnogim je izborima proglašen najomiljenijom dječjom knjigom.',
      lorem2: 'Prošlo je devetnaest godina otkako su Harry Potter, Ron Weasley i Hermiona Granger spasili čarobnjački svijet. Sad nam se vraćaju u čudesnoj pustolovini u društvu nove generacije koja tek počinje pohađati Školu vještičarenja i čarobnjaštva u Hogwartsu. Dok se Harry hvata ukoštac s avetima prošlosti, njegov najmlađi sin Albus muči se s teretom neželjenog obiteljskog nasljeđa. U srazu prošlosti i sadašnjosti, otac i sin prisiljeni su na utrku kroz vrijeme dok se bore sa zagonetnim silama koje im ugrožavaju budućnost.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 275px
</style>
