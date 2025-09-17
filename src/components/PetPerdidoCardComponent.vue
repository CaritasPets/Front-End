<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['id', 'foto', 'nome', 'genero']);
const backgrounds = ["#FDA202", "#03497B", "#FF7700"];
function sortBackground() {
  const randomNum = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomNum];
}
const router = useRouter()
function goToProfile() {
  router.push({ name: 'pet-perdido-profile', params: { id: props.id } })
}
</script>

<template>
  <div class="flex flex-col items-center cursor-pointer mb-5 mx-2 w-[160px] h-[220px] rounded-4xl px-5 transition-all ease-out hover:opacity-75 sm:mx-6 sm:mb-14 sm:w-[250] sm:h-[230px] md:w-[200px] md:h-[260px] lg:w-[215px] lg:h-[280px]"
     @click="goToProfile"
    :style="`background: ${sortBackground()}`">
      <img class="w-25 h-35 object-cover rounded-4xl mt-4 mb-2 lg:w-40 lg:h-45" :src="props.foto" :alt="`${props.nome}-image`">
      <div class="flex flex-col items-center ">
        <p class="my-1 text-[1rem]  text-white text-center truncate overflow-hidden w-35 sm:text-[1.3rem] md:w-40">{{ props.nome }}</p>
        <p class="my-1 text-[0.8rem]  text-white -mt-2 mb-5.5 text-center sm:text-[1rem]">{{ props.genero }}</p>
      </div>
  </div>
</template>