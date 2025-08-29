<script setup>
import { ref } from 'vue';

const open = ref(false);
</script>
<template>
  <section class="flex flex-col items-center">
    <h2 class=" text-7xl text-center mb-25">Pets para Adoção</h2>
    <button class=" text-5xl rounded-4xl bg-[#FFE078] px-13 py-3 cursor-pointer" @click="open = !open">
      <div class="flex gap-x-5">
        <p>Filtros</p>
        <span class="mdi mdi-filter-outline"></span>
      </div>
      <div class="" v-if="open">
        <div>
          <fieldset >
            <input type="checkbox" name="" id="">
          </fieldset>
        </div>
      </div>
    </button>
  </section>
</template>
