<script setup>
import { ref } from 'vue'
import FilterCard from './FilterCard.vue';

const open = ref(false);
const openFilter = ref(false);

</script>
<template>
  <section class="flex flex-col items-center bg-amber-300">
    <h2 class="text-7xl text-center mb-25">Pets para Adoção</h2>
    <div class="flex flex-col items-center w-full">
      <button
        class="flex gap-4 text-5xl rounded-4xl bg-[#FFE078] px-13 py-3 cursor-pointer"
        @click="open = !open"
      >
        <p>Filtros</p>
        <span class="mdi mdi-filter-outline"></span>
      </button>
      <div v-if="open" class="bg-amber-400 w-[70%] rounded-4xl">
        <div @click="openFilter = !openFilter" class="flex cursor-pointer">
          <h3>Abrir</h3>
          <span class="mdi mdi-arrow-down"></span>
        </div>
        <div class="" v-if="openFilter">
          <FilterCard/>
        </div>
      </div>
    </div>
  </section>
</template>
