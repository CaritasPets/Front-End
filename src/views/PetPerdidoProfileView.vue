<script setup>
import { useRoute } from 'vue-router'
import { usePetStore } from '@/stores/PetStore'
import { useUserStore } from '@/stores/UserStore'
import InfosPetPerdidoComponent from '@/components/InfosPetPerdidoComponent.vue'

const route = useRoute()
const petStore = usePetStore()
const userStore = useUserStore()

const pet = petStore.petPerdido.find(p => String(p.id) === String(route.params.id))
const user = pet ? userStore.user.find(u => u.id === pet.userId) : null
</script>

<template>
  <InfosPetPerdidoComponent v-if="pet" :petPerdido="pet" :user="user" />
  <p v-else class="text-center text-2xl text-red-600 mt-10">
    Pet perdido não encontrado.
  </p>
</template>