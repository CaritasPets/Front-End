<script setup>
import OngForm from '../components/OngForm.vue'
</script>
<template>
  <section class="bg-[#FFF493] pt-20 px-4 sm:px-10 overflow-x-hidden">
    <div class="z-10 relative pl-4 sm:pl-15 mb-10 sm:mb-20">
      <h2 class="text-5xl text-center md:text-left sm:text-7xl mt-10 lg:ml-35 text-[#1E0B00] font-[Handlee]">Cadastro de ONG</h2>
      <p class="text-2xl text-center md:text-left sm:text-3xl mt-10 lg:ml-35 text-[#1E0B00] font-light font-[Sen]">Preencha as informações de cadastro:</p>
    </div>
    <OngForm class="pl-4 sm:pl-15 z-10 relative" />
  </section>
  <img
    class="w-full transform-[translateY(-70%)] bg-[#FFF493] absolute z-0"
    src="/cream_waves.svg"
    alt="bg-image-waves" />
</template>
