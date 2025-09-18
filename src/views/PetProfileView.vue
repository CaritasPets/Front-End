<script setup>
import { useRoute } from 'vue-router'
import { usePetStore } from '@/stores/PetStore'
import { useOngStore } from '@/stores/OngsStore'
import InfosPetComponent from '@/components/InfosPetComponent.vue'

const route = useRoute()
const petStore = usePetStore()
const ongStore = useOngStore()

const pet = petStore.propriedades.find(p => String(p.id) === String(route.params.id))
const ong = ongStore.ong.find(o => pet && String(o.id) === String(pet.ongId))
</script>

<template>
  <InfosPetComponent v-if="pet" :propriedades="pet" :ong="ong" />
  <p v-else class="text-center text-2xl text-[#1E0B00] mt-10 font-[Sen]">
    Pet não encontrado.
  </p>
</template>
