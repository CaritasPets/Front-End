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
    <h2 class="text-7xl text-[#4C260A] text-center mb-25">Pets para Adoção</h2>
    <div class="flex flex-col items-center w-full">
      <button class="flex gap-4 text-5xl rounded-4xl bg-[#FFE078] px-13 py-3 cursor-pointer text-[#4C260A] transition duration-300" @click="open = !open">
        <h2 class="">{{ filterStore.contador }}</h2>
        <p>Filtros</p>
        <span class="mdi mdi-filter-outline"></span>
      </button>
      <form
      @submit.prevent="
        selectValuesAll = [...selectValuesPrimary, ...selectValuesSecondary];
        filterStore.filters = selectValuesAll
      "
      v-if="open" class="w-[70%] rounded-4xl p-18 bg-[#FFE078] flex flex-col gap-6 items-center mt-4">
        <!--Green Filters-->
        <div class="grid grid-cols-4 gap-4">
          <FilterCard v-for="filterCard in filterStore.propriedadesFilterVerdes" :key="filterCard.title"
            :options="filterCard.options" :background="filterCard.background" :title="filterCard.title" :background2="filterCard.background2"
            v-model="selectValuesPrimary"/>
        </div>
        <!--Orange Filters-->
        <div class="grid grid-cols-4 gap-4">
          <FilterCard v-for="filterCard in filterStore.propriedadesFilterLaranjas" :key="filterCard.title"
            :options="filterCard.options" :background="filterCard.background" :title="filterCard.title" :background2="filterCard.background2"
            v-model="selectValuesSecondary"
            />
        </div>
        <div class="flex justify-center gap-4 mt-6">
          <button type="reset" class="text-3xl px-6 py-2 border-4 border-blue-700 rounded-xl hover:bg-[#FAF9B4] transition" @click="reset()">Limpar</button>
          <button type="submit" class="text-3xl px-30 py-2 border-4 border-orange-400 rounded-xl hover:bg-[#FAF9B4] transition">Filtrar</button>
        </div>
      </form>
    </div>
    <div>
      <h3>Filtros Selecionados</h3>
      <div class="bg-amber-300">
        <p v-for="item of filterStore.filters" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>
