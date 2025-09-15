<script setup>
import { ref } from 'vue'
import FilterCard from './FilterCard.vue';
import { useFilterStore } from '@/stores/FilterStore';

const filterStore = useFilterStore();
const open = ref(false);
const selectValuesPrimary = ref([]);
const selectValuesSecondary = ref([]);
const selectValuesAll = ref([]);
const reset = () => {
  filterStore.filters = [];
  selectValuesPrimary.value = [];
  selectValuesSecondary.value = [];
  selectValuesAll.value = [];
}
</script>
<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col items-center w-full">
      <button class="flex gap-4 text-5xl rounded-4xl bg-[#FFE078] px-13 py-2 cursor-pointer text-[#4C260A] transition duration-300" @click="open = !open">
        <h2 class="font-[Handlee] text-3xl sm:text-4xl xl:text-5xl">{{ filterStore.contador }}</h2>
        <p class="font-[Handlee] text-3xl sm:text-4xl xl:text-5xl">Filtros</p>
        <span class="mdi mdi-filter-outline text-3xl sm:text-4xl xl:text-5xl"></span>
      </button>
      <form
      @submit.prevent="
        selectValuesAll = [...selectValuesPrimary, ...selectValuesSecondary];
        filterStore.filters = selectValuesAll
      "
      v-if="open" class="w-full md:w-[70%] rounded-4xl p-4 md:p-18 bg-[#FFE078] flex flex-col gap-6 items-center mt-4">

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-[Sen]">
          <FilterCard v-for="filterCard in filterStore.propriedadesFilterVerdes" :key="filterCard.title"
            :options="filterCard.options" :background="filterCard.background" :title="filterCard.title" :background2="filterCard.background2"
            v-model="selectValuesPrimary"/>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-[Sen]">
          <FilterCard v-for="filterCard in filterStore.propriedadesFilterLaranjas" :key="filterCard.title"
            :options="filterCard.options" :background="filterCard.background" :title="filterCard.title" :background2="filterCard.background2"
            v-model="selectValuesSecondary"
            />
        </div>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6 font-[Sen] text-2xl">
          <button type="reset" class="text-2xl md:text-3xl px-4 md:px-6 py-2 border-4 font-[Handlee] border-blue-700 rounded-xl hover:bg-[#FAF9B4] transition" @click="reset()">Limpar</button>
          <button type="submit" class="text-2xl md:text-3xl px-4 md:px-30 py-2 border-4 font-[Handlee] border-orange-400 rounded-xl hover:bg-[#FAF9B4] transition">Filtrar</button>
        </div>
      </form>
    </div>
    <!-- <div class="w-full px-4">
      <h3 class="text-xl sm:text-2xl md:text-3xl font-[Handlee] text-center">Filtros Selecionados</h3>
      <div class="bg-amber-300 rounded-lg p-4 mt-2">
        <p v-for="item of filterStore.filters" :key="item" class="text-sm sm:text-base md:text-lg">
          {{ item }}
        </p>
      </div>
    </div> -->
  </section>
</template>
