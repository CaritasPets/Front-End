<script setup>
import { RouterLink } from 'vue-router';


const props = defineProps(['background', 'image', 'title', 'text', 'waves', 'buttonBoolean', 'buttonLink', 'buttonText'])
</script>
<template>
  <div class="flex flex-col-reverse justify-center py-20 md:flex-row sm:flex sm:justify-between sm:pt-20 sm:pl-20" :style="'background:' + props.background">
    <div class="text-white relative z-10 flex flex-col items-center gap-y-4 sm:items-baseline">


      <h1 class="text-5xl text-center font-[Handlee] mt-10 mb-5 sm:mt-25 sm:mb-15 sm:text-6xl lg:text-7xl sm:text-left">{{ props.title }}</h1>
      <p class="text-2xl text-rigth mx-10 text-center sm:text-left">{{ props.text }}</p>
      <RouterLink :to="props.buttonLink" v-if="props.buttonBoolean" class="bg-[#03497B] mt-10 w-70 pl-15 pt-2 pb-2 rounded-2xl font-[Sen]">
        <button>
          {{ props.buttonText }}
        </button>
      </RouterLink>
    </div>
    <div>
      <img class="z-10 relative" :src="props.image" alt="banner">
    </div>
  </div>
  <div>
    <img class="w-[100%] transform-[translateY(-20%)] relative z-0" :src="props.waves" alt="waves">
  </div>
</template>
