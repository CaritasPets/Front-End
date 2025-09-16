<script setup>
    const props = defineProps(['background', 'text', 'icon', 'iconBackground', 'link'])
</script>
<template>
  <router-link
    :to="props.link"
    class="text-white w-45 lg:w-60 xl:w-85 text-center rounded-4xl pt-10 lg:pt-20 pb-5 lg:pb-15 pl-5 pr-5 transform scale-80 transition duration-300 hover:opacity-80 hover:cursor-pointer"
    :style="'background:' + props.background"
  >
    <span
      :class="props.icon + ' text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl rounded-full px-10'"
      :style="'background:' + props.iconBackground"
    ></span>
    <p class="font-[Sen] text-2xl pt-10 px-4">{{ props.text }}</p>
  </router-link>
</template>