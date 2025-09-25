<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: File,
});

const emit = defineEmits(["update:modelValue"]);

const file = ref(null);
const previewUrl = ref(null);

watch(
  () => props.modelValue,
  (newVal) => {
    file.value = newVal;
    previewUrl.value = newVal ? URL.createObjectURL(newVal) : null;
  }
);

function onFileChange(event) {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    if (!selectedFile.type.startsWith("image/")) {
      return alert("Por favor, selecione apenas arquivos de imagem.");
    }
    if (selectedFile.size > 5 * 1024 * 1024) {
      return alert("A imagem deve ter no máximo 5MB.");
    }

    file.value = selectedFile;
    previewUrl.value = URL.createObjectURL(selectedFile);

    emit("update:modelValue", selectedFile);
  }
}
</script>

<template>
  <div class="font-[Sen]">
    <label class="text-xl lg:text-2xl text-[#1E0B00]">Foto de Perfil</label>

    <div v-if="previewUrl" class="mt-2">
      <label class="cursor-pointer">
        <img
          :src="previewUrl"
          alt="Preview"
          class="w-32 h-32 rounded-full object-cover border-2 border-[#1E0B00]"
        />
        <input type="file" class="hidden" @change="onFileChange" />
      </label>
    </div>

    <label
      v-else
      class="flex items-center justify-center gap-2 cursor-pointer px-4 py-4 rounded-full bg-gray-300 mt-2 w-32 h-32"
    >
      <span class="mdi mdi-camera text-2xl lg:text-4xl pt-0.5 text-[#1E0B00]"></span>
      <input type="file" class="hidden" @change="onFileChange" />
    </label>
  </div>
</template>