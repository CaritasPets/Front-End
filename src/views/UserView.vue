<script setup>
import InfosUserComponent from '@/components/InfosUserComponent.vue';
import OngsComponent from '@/components/OngsComponent.vue';
import PetsSavesComponent from '@/components/PetsSavesComponent.vue';
const ongsFavorite = [
  {
    id: 1,
    nome: 'Abrigo Animal',
    logo: '/logo.svg'
  },
  {
    id: 1,
    nome: 'Abrigo Animal',
    logo: '/logo.svg'
  },
  {
    id: 1,
    nome: 'Abrigo Animal',
    logo: '/logo.svg'
  },
  {
    id: 1,
    nome: 'Abrigo Animal',
    logo: '/logo.svg'
  }
]
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
  <h2 class="text-center text-5xl text-[#4c260a]">Ongs Salvas</h2>
  <div class="flex flex-wrap justify-between mt-20 px-60">
    <OngsComponent v-for="ong of ongsFavorite" :key="ong.id"
      :logo="ong.logo"
      :nome="ong.nome"
    />
  </div>
  <PetsSavesComponent/>
</template>
