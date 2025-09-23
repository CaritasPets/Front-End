<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['id', 'foto', 'nome', 'genero']);
const router = useRouter()
function goToProfile() {
  router.push({ name: 'pet-perdido-profile', params: { id: props.id } })
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
</script>

<template>
  <div
    class="bg-[#EEEBD1] flex flex-col overflow-hidden rounded-3xl items-center cursor-pointer mb-5 mx-2 w-[160px] h-[220px] transition-all pb-6 ease-out  hover:shadow-xl sm:mx-6 sm:mb-14 sm:w-[200px]  sm:h-[230px] md:w-[220px] md:h-[260px] lg:w-[210px] lg:h-[285px]"
    @click="goToProfile">
    <img class="w-[215px] h-[215px] object-cover" :src="props.foto" :alt="`${props.nome}-image`">
    <div class="flex">
      <div class="flex flex-col items-left ">
        <p
          class="my-1 text-[1rem]  text-black text-left truncate overflow-hidden w-35 sm:text-[1.3rem] md:w-40 font-[Sen]">
          {{ props.nome }}</p>
        <p class="my-1 text-[0.8rem]  text-black -mt-2 mb-5.5 text-left sm:text-[1rem] font-[Sen]">{{ capitalize(props.genero) }}
        </p>
      </div>
      <span class="mdi mdi-heart-outline text-black text-2xl mt-4"></span>
    </div>
  </div>
</template>