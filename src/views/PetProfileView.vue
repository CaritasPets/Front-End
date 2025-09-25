<script setup>
import { useRoute } from 'vue-router'
import { usePetStore } from '@/stores/PetStore'
import { useOngStore } from '@/stores/OngsStore'
import InfosPetComponent from '@/components/InfosPetComponent.vue'
import { onMounted } from 'vue'

const route = useRoute()
const petStore = usePetStore()
const ongStore = useOngStore()

const pet = petStore.propriedades.find(p => String(p.id) === String(route.params.id))
const ong = ongStore.ong.find(o => String(o.id) === String(pet.user.id))
onMounted(() => {
  console.log(pet)
})
</script>

<template>
  <section class="md:pt-15">
  <InfosPetComponent v-if="pet" :propriedades="pet" :ong="ong" class="bg-[#F7F5E0]"/>
  <p v-else class="text-center text-2xl text-[#1E0B00] mt-10 font-[Sen] bg-[#F7F5E0]">
    Pet não encontrado.
  </p>
  </section>
</template>
