<script setup>
import { useAdocaoService } from '../services/petsAdocao/adocaoService'
import InfosPetComponent from '@/components/InfosPetComponent.vue'
import LoadinComponent from '../components/LoadinComponent.vue'
import { onMounted, ref } from 'vue'

const props = defineProps(['id'])
const adocaoService = useAdocaoService();
const pet = ref(null)
onMounted(async() => {
  pet.value = await adocaoService.profile(props.id);
})
</script>

<template>
  <section class="md:pt-15">
  <LoadinComponent v-if="adocaoService.loading"/>  
  <InfosPetComponent v-else-if="!adocaoService.loading" :propriedades="pet" class="bg-[#F7F5E0]"/>
  <p v-else class="text-center text-2xl text-[#1E0B00] mt-10 font-[Sen] bg-[#F7F5E0]">
    Pet não encontrado.
  </p>
  </section>
</template>
