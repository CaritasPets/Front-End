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
  <div class="flex flex-col">
    <label class="">
      {{ inputStore.campos[props.name].label }}
    </label>
    <div class="flex overflow-hidden rounded-full bg-white p-2 w-fit">
      <label
        v-for="opt in inputStore.campos[props.name].options"
        :key="opt.value"
        class="cursor-pointer rounded-full px-4 py-2 m-1 text-center transition-colors duration-200"
        :class="[
          inputStore.campos[props.name].value === opt.value
            ? 'text-white'
            : 'text-gray-700 hover:bg-gray-100'
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
