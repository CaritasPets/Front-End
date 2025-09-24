<script setup>
import DecorationCadastro from '@/components/FormsComponents/DecorationCadastro.vue';
import PerdidoForm from '@/components/FormsComponents/PerdidoForm.vue';
</script>
<template>
  <section class="bg-black/80 flex sm:px-20 sm:py-20">
    <DecorationCadastro
      class="z-10 rounded-l-4xl"
      :title="'Cadastro Pet Perdido'"
    />
    <PerdidoForm class="rounded-r-4xl z-10 relative max-w-10xl mx-auto w-full px-2 sm:px-4" />
  </section>
</template>
