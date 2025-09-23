<script setup>
import InfosOngComponent from '@/components/InfosOngComponent.vue';
</script>

<template>
  <section class="md:pt-15">
  <InfosOngComponent
    :ong="{
        nome: 'Abrigo Animal',
        foto: '/logo.svg',
        telefone: '47984542516',
        email: 'brenoot0405@gmail.com',
        endereco: 'Rua das Palmeiras',
        cnpj: '11251526993',
        descricao: 'Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger Breno Otário Rohregger'
    }"
  />
  </section>
</template>