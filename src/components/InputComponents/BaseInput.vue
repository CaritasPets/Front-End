<script setup>
import { useBaseInputStore } from '@/stores/BaseInputStore'
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true }
})
const inputStore = useBaseInputStore()
const model = computed({
  get: () => inputStore.campos[props.name]?.value ?? '',
  set: (val) => {
    if (!inputStore.campos[props.name]) return
    inputStore.campos[props.name].value = val
  }
})
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
      v-model="model"
      :type="inputStore.campos[props.name]?.type ?? 'text'"
      :placeholder="inputStore.campos[props.name]?.placeholder ?? ''"
      :required="inputStore.campos[props.name]?.required ?? false"
      class="bg-white text-[#1E0B00] rounded-full text-xl px-4 py-2"
    />
  </div>
</template>
