<script setup>
import InfosOngComponent from '@/components/InfosOngComponent.vue';
import { useOngStore } from '../stores/OngsStore';
const ongStore = useOngStore()
const props = defineProps(['id'])

const ong = ongStore.ong.find(ong => ong.id == props.id)
</script>

<template>
  <section class="md:pt-15">
  <InfosOngComponent
    :ong="ong"
  />
  </section>
</template>