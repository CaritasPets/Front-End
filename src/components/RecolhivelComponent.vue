<script setup>
import { ref } from 'vue'

const props = defineProps(['icon', 'text', 'background', 'title'])
const open = ref(false)
</script>

<template>
  <div  :class="`w-[100%] rounded-4xl px-5 text-white transition-all duration-500 my-8 border-2 border-transparent hover:bg-[#FFE078] hover:border-[#361300] hover:text-[#361300] ` + props.background"
  >
    <div class="w-[100%] flex justify-between items-center cursor-pointer p-3" 
      @click="open = !open"
    >
      <span :class="props.icon + ' text-6xl'"></span>
      <h3 class="text-3xl">{{ props.title }}</h3>
      <span class="mdi mdi-chevron-down text-6xl" v-if="open == false"></span>
      <span class="mdi mdi-chevron-up text-6xl" v-else></span>
    </div>
    <div :class="'text-2xl px-3 py-10 border-t-2 duration-500'" v-if="open">
        <p>{{ props.text }}</p>
    </div>
  </div>
</template>
