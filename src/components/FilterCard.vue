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
  category: {
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
  const filterObj = { category: props.category, value: option.value };
  const index = selected.findIndex(item => item.category === props.category && item.value === option.value);

  if (index >= 0) {
    selected.splice(index, 1);
  } else {
    selected.push(filterObj);
  }

  emit('update:modelValue', selected);
}

function isSelected(option) {
  return props.modelValue.some(item => item.category === props.category && item.value === option.value);
}


</script>
<template>
    <div class="rounded-4xl self-start font-[Sen] " :style="`background: ${props.background}`">
        <div @click="open = !open" class="text-2xl font-[Sen] sm:text-3xl md:text-4xl text-white rounded-t-4xl h-[50px] flex justify-between w-[90%]" >
            <h3 class=" font-[Sen] text-xl lg:text-2xl pt-2 pl-8">{{ props.title }}</h3>
            <span class="mdi mdi-chevron-down pt-2 text-1xl sm:text-2xl md:text-20px" v-if="open == false"></span>
            <span class="mdi mdi-chevron-up pt-2 text-1xl sm:text-2xl md:text-20px" v-else></span>
        </div>
        <div class="rounded-b-4xl flex flex-col px-4 pt-2 pb-8 text-white gap-y-1" :style="`background: ${props.background2}`" v-if="open">
            <label class="text-sm sm:text-base md:text-lg flex gap-2 items-center" v-for="item of props.options" :key="item">
            <input type="checkbox" class="appearance-none w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 rounded-sm bg-[#FFE078] checked:bg-[url(/pata-checkbox.svg)] checked:bg-cover " :style="`border: solid 2px ${props.background}`" :value="item.value" @change="toggleCounter($event)"
                @click="toggleOption(item)"
                :checked="isSelected(item)"
                >
                {{ item.option }}
            </label>
        </div>
    </div>
</template>
