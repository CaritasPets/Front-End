<script setup>
import { ref } from 'vue'

const file = ref(null)

function handleFileChange(event) {
  const selected = event.target.files[0]
  if (selected) {
    file.value = selected
    console.log('Arquivo selecionado:', selected.name)
  }
}
</script>
<template>
<div class="font-[Sen]">
  <label class="flex items-center gap-2 cursor-pointer px-4 py-4 rounded-full bg-white">
    <span class="mdi mdi-camera text-2xl lg:text-3xl pt-0.5 text-[#1E0B00]"></span>
    <span class="text-xl lg:text-2xl text-[#1E0B00]">Foto de Perfil</span>
    <input type="file" class="hidden" @change="handleFileChange" />
  </label>
  <div v-if="file" class="mt-3 text-sm text-[#1E0B00]">
    {{ file.name }}
  </div>
</div>
</template>
