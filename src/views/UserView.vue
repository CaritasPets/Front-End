<script setup>
import InfosUserComponent from '@/components/InfosUserComponent.vue';
import OngsSavesComponent from '@/components/OngsSavesComponent.vue';
import PetsSavesComponent from '@/components/PetsSavesComponent.vue';

</script>

<template>
  <InfosUserComponent
    :user="{
      nome: 'Breno',
      foto: '',
      username: 'breno_rohregger',
      telefone: '47984542516',
      cpf: '11251526993',
      data_nascimento: '04/05/2008',
      email: 'brenoot0405@gmail.com'
    }"
  />
  <OngsSavesComponent/>
  <PetsSavesComponent/>
</template>
