<script setup>
import { ref } from 'vue'

const props = defineProps(['icon', 'text', 'background', 'title'])
const open = ref(false)
</script>

<template>
  <div :class="[
  'rounded-4xl xl:px-5 text-white font-[Sen] duration-500 my-8 border-2 border-transparent hover:opacity-80',
  props.background
]">
    <div class="flex justify-between items-center cursor-pointer p-3" 
      @click="open = !open"
    >
      <span :class="props.icon + ' text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'"></span>
      <h3 class="text-2xl ml-3 mr-3 text-center xl:text-3xl">{{ props.title }}</h3>
      <span class="mdi mdi-chevron-down text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" v-if="open == false"></span>
      <span class="mdi mdi-chevron-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" v-else></span>
    </div>

    <div :class="'text-1xl xl:text-2xl lg:py-10 text-justify p-6 border-t-2 duration-500'" v-if="open">
        <p>{{ props.text }}</p>
    </div>
  </div>
</template>