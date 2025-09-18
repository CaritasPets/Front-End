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
  <p v-else class="text-center text-2xl text-red-600 mt-10">
    Pet perdido não encontrado.
  </p>
</template>