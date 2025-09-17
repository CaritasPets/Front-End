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
  filterStore.contador = 0;
}
</script>
<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col items-center w-full">
      <button class="flex gap-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl rounded-4xl bg-[#FFE078] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-13 py-2 cursor-pointer text-[#4C260A] transition duration-300" @click="open = !open">
        <h2 class="font-[Handlee] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{{ filterStore.contador }}</h2>
        <p class="font-[Handlee] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Filtros</p>
        <span class="mdi mdi-filter-outline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"></span>
      </button>
      <form
      @submit.prevent="
        selectValuesAll = [...selectValuesPrimary, ...selectValuesSecondary];
        filterStore.filters = selectValuesAll
      "
      v-if="open" class="w-[140%] h-[150%] sm:w-[120%] md:w-[100%] lg:w-[80%] rounded-4xl p-4 sm:p-6 bg-[#FFE078] flex flex-col gap-6 items-center mt-4">

        <div class="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 font-[Sen] ">
          <FilterCard v-for="filterCard in filterStore.propriedadesFilterVerdes" :key="filterCard.title"
            :options="filterCard.options" :background="filterCard.background" :title="filterCard.title" :background2="filterCard.background2" :category="filterCard.title"
            v-model="selectValuesPrimary"/>
        </div>

        <div class="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 font-[Sen] ">
          <FilterCard v-for="filterCard in filterStore.propriedadesFilterLaranjas" :key="filterCard.title"
            :options="filterCard.options" :background="filterCard.background" :title="filterCard.title" :background2="filterCard.background2" :category="filterCard.title"
            v-model="selectValuesSecondary"
            />
        </div>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6 font-[Sen] text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <button type="reset" class="text-lg sm:text-xl md:text-2xl lg:text-3xl px-6 sm:px-8 md:px-10 py-2 border-4 font-[Handlee] border-blue-700 rounded-xl hover:bg-[#FAF9B4] transition" @click="reset()">Limpar</button>
          <button type="submit" class="text-lg sm:text-xl md:text-2xl lg:text-3xl px-12 sm:px-16 md:px-20 py-2 border-4 font-[Handlee] border-orange-400 rounded-xl hover:bg-[#FAF9B4] transition">Filtrar</button>
        </div>
      </form>
    </div>
  </section>
</template>
