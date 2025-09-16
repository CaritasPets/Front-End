<script setup>
const props = defineProps(["foto", "nome", "genero"]);
const backgrounds = ["#03497B", "#587911", "#FDA202"];
function sortBackground() {
  const randomNum = Math.floor(Math.random() * 3);
  return backgrounds[randomNum];
}
</script>
<template>
  <div class="flex flex-col items-center mb-5 mx-2 w-[160px] h-[220px] rounded-4xl px-5 transition-all ease-out hover:opacity-75 sm:mx-6 sm:mb-14 sm:w-[250] sm:h-[230px] md:w-[200px] md:h-[260px] lg:w-[215px] lg:h-[280px]"
    :style="`background: ${sortBackground()}`">
    <RouterLink to="" class="flex flex-col items-center">
      <img class="w-[90%] h-auto rounded-4xl mt-4 mb-2 lg:w-[95%] ms:w-[80%] md:w-[90%] " :src="props.foto" :alt="`${props.nome}-image`">
      <div class="flex flex-col items-center ">
        <p class="my-1 text-[1rem]  text-white text-center truncate overflow-hidden w-35 sm:text-[1.3rem] md:w-40">{{ props.nome }}</p>
        <p class="my-1 text-[0.8rem]  text-white -mt-2 mb-5.5 text-center sm:text-[1rem]">{{ props.genero }}</p>
      </div>
    </RouterLink>
  </div>
</template>


