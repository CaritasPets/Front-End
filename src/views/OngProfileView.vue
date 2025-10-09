<script setup>
import InfosOngComponent from '@/components/InfosOngComponent.vue';
import LoadinComponent from '../components/LoadinComponent.vue';
import { useOngService } from '../services/organizations/ongService';
import { onMounted, ref } from 'vue';
const ongService = useOngService()
const props = defineProps(['id'])
const ong = ref(null)
onMounted( async() => {
  ong.value = await ongService.profile(props.id);
})
</script>

<template>
  <section class="md:pt-15">
  <LoadinComponent v-if="ongService.loading"/>  
  <InfosOngComponent v-else
    :ong="ong"
  />
  </section>
</template>