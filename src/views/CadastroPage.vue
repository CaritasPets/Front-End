<script setup>
import FormCadastro from '../components/FormCadastro.vue'

</script>
<template>
  <section class="bg-[#FFF493] pt-20 px-6 sm:px-10">
    <div class="flex-col text-center sm:text-left sm:flex-row items-center gap-6 lg:gap-20 text-[#1E0B00] z-10 relative sm:pl-15 mb-20">
      <div class="text-[#1E0B00]">
        <h2 class="text-5xl mt-10 md:text-6xl lg:text-6xl sm:ml-15 font-[Handlee]">Cadastro</h2>
        <p class="text-xl mt-10 sm:text-3xl lg:text-3xl font-light mb-4 sm:ml-15 font-[Sen]">Preencha as informações de cadastro:</p>
      </div>
    </div>
    <FormCadastro class="z-10 relative max-w-10xl mx-auto w-full px-2 sm:px-4" />

  </section>
  <img
    class="w-full transform-[translateY(-50%)] bg-[#FFF493] absolute z-0"
    src="/beige_waves.svg"
    alt="bg-image-waves"
  />
</template>
