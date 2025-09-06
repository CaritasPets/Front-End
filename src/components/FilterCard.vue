<script setup>
import { ref } from 'vue';
import { useFilterStore } from '@/stores/FilterStore';

const filterStore = useFilterStore()
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  options: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    default: '#D9D9D9',
  },
  background2: {
    type: String,
    default: '#C2C2C2',
  }
});
const emit = defineEmits(['update:modelValue'])
const open = ref(false)

function toggleCounter(event) {
  if (event.target.checked) {
    filterStore.contador++
  } else {
    filterStore.contador--
  }
}

function toggleOption(option) {
  const selected = [...props.modelValue];
  const index = selected.indexOf(option);

  if (index >= 0) {
    selected.splice(index, 1); // Remove
  } else {
    selected.push(option); // Adiciona
  }

  emit('update:modelValue', selected);
}


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
                <input type="checkbox" class="appearance-none w-6 h-6 border-2 rounded-sm bg-[#FFE078] checked:bg-[url(/pata-checkbox.svg)] checked:bg-cover " :style="`border: solid 2px ${props.background}`" :value="item.value" @change="toggleCounter($event)"
                @click="toggleOption(item.value)"
                >
                {{ item.option }}
            </label>
        </div>
    </div>
</template>
