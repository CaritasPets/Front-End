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
    <label
      v-if="inputStore.campos[props.name]?.label"
      class="text-xl lg:text-2xl text-[#1E0B00] mb-2"
      :for="props.name"
    >
      {{ inputStore.campos[props.name].label }}
    </label>
    <input
      :id="props.name"
      v-model="inputStore.campos[props.name].value"
      :type="inputStore.campos[props.name].type"
      :placeholder="inputStore.campos[props.name].placeholder"
      :required="inputStore.campos[props.name].required"
      class="bg-white text-[#1E0B00] rounded-full text-2xl px-4 py-4"
    >
  </div>
</template>
