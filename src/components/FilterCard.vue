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
    const props = defineProps(['options', 'background', 'title', ])
    const open = ref(false)
</script>
<template>
    <div class="rounded-4xl" :style="`background: ${props.background}`">
        <div @click="open = !open" class="text-4xl text-white rounded-t-4xl py-3 px-8" >
            <h3>{{ props.title }}</h3>
            <span></span>
        </div>
        <div class="rounded-b-4xl" v-if="open">
            <label v-for="item of props.options" :key="item">
                <input type="checkbox" :value="item.value" @change="toggleCounter($event)">
                {{ item.option }}
            </label>
        </div>
    </div>
</template>
