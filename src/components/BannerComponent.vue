<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['background', 'image', 'title', 'text', 'waves', 'buttonBoolean', 'buttonLink', 'buttonText'])
</script>
<template>
  <div class="flex items-center justify-between pt-20 pl-20" :style="'background:' + props.background">
    <div class="text-white relative z-10 flex flex-col gap-y-4">
      <h1 class="text-7xl">{{ props.title }}</h1>
      <p class="text-4xl opacity-50 font-thin">{{ props.text }}</p>
      <RouterLink :to="props.buttonLink" v-if="props.buttonBoolean" class="bg-[#03497B] mt-10 w-80 pl-20 pt-2 pb-2 rounded-2xl font-[Sen]">
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