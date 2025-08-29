<script setup>
const props = defineProps(["foto", "nome", "genero"]);
const backgrounds = ["#03497B", "#587911", "#FDA202"];
function sortBackground() {
  const randomNum = Math.floor(Math.random() * 3);
  return backgrounds[randomNum];
}
</script>
<template>
  <div class=" flex flex-col items-center w-[15%] h-[350px] rounded-4xl mx-7 mb-14 px-5 shadow-[7px_7px_2px_rgba(0,0,0,0.30)]"
    :style="`background: ${sortBackground()}`">
    <a href="" class=" flex flex-col items-center">
      <img class=" w-60 h-50 rounded-4xl mt-6 mb-4 shrink-0 grow-0" :src="props.foto" :alt="`${props.nome}-image`">
      <p class="my-1 text-[1.5rem] text-white text-center truncate w-full">{{ props.nome }}</p>
      <p class="my-1 text-[1.5rem] text-white -mt-2 mb-5.5 text-center truncate w-full">{{ props.genero }}</p>
    </a>
  </div>
</template>
