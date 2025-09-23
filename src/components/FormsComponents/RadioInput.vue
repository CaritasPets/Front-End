<script setup>
import { useBaseInputStore } from '@/stores/BaseInputStore'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const inputStore = useBaseInputStore()
</script>
<template>
  <div class="flex flex-col font-[Sen]">
    <label class="text-xl lg:text-2xl text-[#1E0B00] mb-2">
      {{ inputStore.campos[props.name].label }}
    </label>
    <div class="flex overflow-hidden rounded-full bg-white p-2 w-fit">
      <label
        v-for="opt in inputStore.campos[props.name].options"
        :key="opt.value"
        class="text-xl lg:text-2xl cursor-pointer rounded-full px-4 py-2 m-1 lg:mx-2 text-center transition-colors duration-200"
        :class="[
          inputStore.campos[props.name].value === opt.value
            ? 'text-white'
            : 'text-[#1E0B00]'
        ]"
        :style="[
          inputStore.campos[props.name].value === opt.value
            ? `background: ${inputStore.campos[props.name].background}`
            : `background: white`
        ]"
      >
        <input
          type="radio"
          class="hidden"
          :name="props.name"
          :value="opt.value"
          v-model="inputStore.campos[props.name].value"
        />
        {{ opt.text }}
      </label>
    </div>
  </div>
</template>
