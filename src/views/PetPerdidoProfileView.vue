<script setup>
import { useRoute } from 'vue-router'
import { usePetPerdidoStore } from '../stores/PetPerdidoStore'
import InfosPetPerdidoComponent from '@/components/InfosPetPerdidoComponent.vue'

const route = useRoute()
const petPerdidoStore = usePetPerdidoStore()

const pet = petPerdidoStore.propriedades.find(p => String(p.id) === String(route.params.id))
</script>

<template>
  <InfosPetPerdidoComponent v-if="pet" :petPerdido="pet" :user="pet.dono" />
  <p v-else class="text-center text-2xl text[#1E0B00] mt-10 font-[Sen]">
    Pet perdido não encontrado.
  </p>
</template>