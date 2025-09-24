<script setup>
import FormCadastro from '../components/FormsComponents/FormCadastro.vue'
import DecorationCadastro from '../components/FormsComponents/DecorationCadastro.vue';
</script>
<template>
  <section class="bg-[#FFF493] flex pt-20 px-6 sm:px-10">
    <DecorationCadastro
      class="z-10"
      :title="'Cadastro de usuário'"
    />
    <FormCadastro class="z-10 relative max-w-10xl mx-auto w-full px-2 sm:px-4" />

  </section>
  <img
    class="w-full transform-[translateY(-50%)] bg-[#FFF493] absolute z-0"
    src="/beige_waves.svg"
    alt="bg-image-waves"
  />
</template>
