<script setup>
import { usePerdidoService } from '../services/petsPerdidos/perdidoService'
import InfosPetPerdidoComponent from '@/components/InfosPetPerdidoComponent.vue'
import LoadinComponent from '../components/LoadinComponent.vue'
import { onMounted, ref } from 'vue'

const props = defineProps(['id'])
const perdidoService = usePerdidoService()

const pet = ref(null);
onMounted( async () => {
  pet.value = await perdidoService.profile(props.id);
})
</script>

<template>
  <section class="md:pt-15">
  <LoadinComponent v-if="perdidoService.loading"/>
  <InfosPetPerdidoComponent v-else-if="!perdidoService.loading" :petPerdido="pet" :user="pet?.user" />
  <p v-else class="text-center text-2xl text[#1E0B00] mt-10 font-[Sen]">
    Pet perdido não encontrado.
  </p>
  </section>
</template>