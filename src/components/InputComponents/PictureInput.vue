<script setup>
import { ref } from 'vue'

const file = ref(null)
const previewUrl = ref(null)

function onFileChange(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {
    if (!selectedFile.type.startsWith('image/')) {
      return alert('Por favor, selecione apenas arquivos de imagem.')
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      return alert('A imagem deve ter no máximo 5MB.')
    }

    file.value = selectedFile
    if (selectedFile) {
      previewUrl.value = URL.createObjectURL(selectedFile)
    }
  }
}
</script>
<template>
<div class="font-[Sen]">
  <label class="text-xl lg:text-2xl text-[#1E0B00]">Foto de Perfil</label>
  <label class="flex items-center gap-2 cursor-pointer px-4 py-4 rounded-full bg-white mt-2">
    <span class="mdi mdi-camera text-2xl lg:text-3xl pt-0.5 text-[#1E0B00]"></span>
    <span class="text-xl lg:text-2xl pr-30 text-[#1E0B00]">Adicionar foto de perfil</span>
    <input type="file" class="hidden" @change="onFileChange"/>
  </label>
  <div v-if="file" class="mt-3 text-sm text-[#1E0B00]">
    {{ file.name }}
  </div>
</div>
</template>
