<script setup>
    const props = defineProps(['background', 'text', 'icon', 'iconBackground', 'link'])
</script>
<template>
  <router-link
    :to="props.link"
    class="text-white w-85 text-center rounded-4xl pt-20 pb-15 transform scale-80 transition duration-300 hover:opacity-80 hover:cursor-pointer"
    :style="'background:' + props.background"
  >
    <span
      :class="props.icon + ' text-9xl rounded-full px-6'"
      :style="'background:' + props.iconBackground"
    ></span>
    <p class="font-[Sen] text-2xl pt-10 px-4">{{ props.text }}</p>
  </router-link>
</template>