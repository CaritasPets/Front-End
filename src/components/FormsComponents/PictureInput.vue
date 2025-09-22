<script setup>

</script>
<template>
<li class="flex flex-col w-[100%]">
  <p class="text-2xl text-[#1E0B00] font-[Sen]">Foto de Perfil</p>
  <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
  <label for="fileInput" class="w-50 h-60 my-2 cursor-pointer">
    <img
      v-if="file"
      class="w-full h-full rounded-2xl hover:opacity-50 transition-all duration-500"
      :src="previewUrl"
      alt="foto-selecionada"
    />
    <img
      v-else
      class="w-full h-full rounded-2xl bg-amber-50 hover:opacity-50 transition-all duration-500"
      src="/pet_default.svg"
      alt=""
    />
  </label>
</li>
</template>



<li class="flex flex-col w-[100%]">
          <p class="text-2xl text-[#1E0B00] font-[Sen]">Foto de Perfil</p>
          <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
          <label for="fileInput" class="w-50 h-60 my-2 cursor-pointer">
            <img
              v-if="file"
              class="w-full h-full rounded-2xl hover:opacity-50 transition-all duration-500"
              :src="previewUrl"
              alt="foto-selecionada"
            />
            <img
              v-else
              class="w-full h-full rounded-2xl bg-amber-50 hover:opacity-50 transition-all duration-500"
              src="/pet_default.svg"
              alt=""
            />
          </label>
        </li>
