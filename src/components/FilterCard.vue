<script setup>
import { ref } from 'vue';
import { useFilterStore } from '@/stores/FilterStore';
function toggleCounter(event) {
  if (event.target.checked) {
    filterStore.contador++
  } else {
    filterStore.contador--
  }
}
const filterStore = useFilterStore()
    const props = defineProps(['options', 'background', 'title', 'background2'])
    const open = ref(false)
</script>
<template>
    <div class="rounded-4xl self-start" :style="`background: ${props.background}`">
        <div @click="open = !open" class="text-4xl text-white rounded-t-4xl py-3 px-8 flex justify-between" >
            <h3>{{ props.title }}</h3>
            <span class="mdi mdi-chevron-down text-4xl" v-if="open == false"></span>
            <span class="mdi mdi-chevron-up text-4xl" v-else></span>
        </div>
        <div class="rounded-b-4xl flex flex-col px-4 pt-2 pb-8 text-white gap-y-1" :style="`background: ${props.background2}`" v-if="open">
            <label class="text-[1.1rem] flex gap-2 items-center" v-for="item of props.options" :key="item">
                <input type="checkbox" class="appearance-none w-6 h-6 border-2 rounded-sm bg-[#FFE078] checked:bg-[url(/pata-checkbox.svg)] checked:bg-cover " :style="`border: solid 2px ${props.background}`" :value="item.value" @change="toggleCounter($event)">
                {{ item.option }}
            </label>
        </div>
    </div>
</template>
