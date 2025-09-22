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
    <label
      v-if="inputStore.campos[props.name]?.label"
      class="text-xl md: text-[#1E0B00] mb-1"
      :for="props.name"
    >
      {{ inputStore.campos[props.name].label }}
    </label>
    <input
      :id="props.name"
      v-model="inputStore.campos[props.name].value"
      :type="inputStore.campos[props.name].type"
      :placeholder="inputStore.campos[props.name].placeholder"
    >
  </div>
</template>
