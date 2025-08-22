<script setup>
  const props = defineProps(["foto", "nome", "genero"]);
  const backgrounds = ["#03497B", "#587911", "#FDA202"];
  function sortBackground (){
      const randomNum = Math.floor(Math.random() * 3);
      return backgrounds[randomNum];
  }
</script>
<template>
  <div class=" flex flex-col items-center w-[20%] rounded-4xl" :style="`background: ${sortBackground()}`">
    <img class=" w-60 rounded-4xl mt-6 mb-4 " :src="props.foto" :alt="`${props.nome}-image`">
    <p class="my-1 text-[1.5rem]">{{ props.nome }}</p>
    <p class="">{{ props.genero }}</p>
  </div>
</template>
