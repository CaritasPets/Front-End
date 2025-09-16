<script setup>
import OngForm from '../components/OngForm.vue'
</script>
<template>
  <section class="bg-[#FFF493] pt-20 px-10">
    <div class="z-10 relative pl-15 mb-20">
      <h2 class="text-7xl text-[#1E0B00]">Cadastro de ONG</h2>
      <p class="text-3xl text-[#1E0B00] font-light">Preencha as informações de cadastro:</p>
    </div>
    <OngForm class="pl-15 z-10 relative" />
  </section>
  <img
    class="w-[100%] transform-[translateY(-70%)] bg-[#FFF493] absolute z-0"
    src="/cream_waves.svg"
    alt="bg-image-waves" />
</template>
