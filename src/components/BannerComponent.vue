<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['background', 'image', 'title', 'text', 'buttonBooleanOng', 'buttonBooleanAdote', 'buttonBooleanPerdido', 'buttonLink', 'buttonText'])

const buttonStyle = computed(() => {
  if (props.buttonBooleanOng) {
    return {
      bg: 'bg-[#40A9F4]',
      hoverBg: 'hover:bg-[#F7F5E0]',
      border: 'hover:border-[#40A9F4]',
      text: 'hover:text-[#40A9F4]',
    };
  }
  if (props.buttonBooleanAdote) {
    return {
      bg: 'bg-[#FFBC46]',
      hoverBg: 'hover:bg-[#F7F5E0]',
      border: 'hover:border-[#FFBC46]',
      text: 'hover:text-[#FFBC46]',
    };
  }
  if (props.buttonBooleanPerdido) {
    return {
      bg: 'bg-[#FF953C]',
      hoverBg: 'hover:bg-[#F7F5E0]',
      border: 'hover:border-[#FF953C]',
      text: 'hover:text-[#FF953C]',
    };
  }
  return null;
});

</script>
<template>
  <div class="flex flex-col-reverse justify-center py-20 md:flex-row sm:flex sm:justify-between sm:pt-20 sm:pl-20" :style="'background:' + props.background">
    <div class="text-black relative z-10 flex flex-col items-center mt-25 gap-y-4 sm:items-baseline">
      <h1 class="text-5xl text-center mx-10 font-[Handlee] mt-10 mb-5 sm:mt-25 sm:mb-15 sm:text-6xl lg:w-220 lg:text-8xl sm:text-left">{{ props.title }}</h1>
      <p class="text-2xl text-rigth mx-10 text-center sm:text-left">{{ props.text }}</p>
      <RouterLink
        v-if="buttonStyle"
        :to="props.buttonLink"
        class="text-white text-center mt-10 w-90 px-10 py-2 text-lg rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500"
        :class="[buttonStyle.bg, buttonStyle.hoverBg, buttonStyle.border, buttonStyle.text]"
      >
        {{ props.buttonText }}
      </RouterLink>
    </div>
    <div class="max-w-7xl mt-20 sm:mr-20">
      <img
        :src="props.image"
        :class="['z-10 w-full']"
        alt="banner"
      />
    </div>
  </div>
</template>
