<script setup>
import InfosUserComponent from '@/components/InfosUserComponent.vue';
import OngsComponent from '@/components/OngsComponent.vue';
import PetsAdocao from '@/components/PetsAdocao.vue';

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


const petsFavorite = [
  {
    id: 1,
    nome: 'Ronaldo Fenômeno',
    fotoPet: '/logo.svg',
    genero: 'macho'
  },
  {
    id: 1,
    nome: 'Ronaldo Fenômeno',
    fotoPet: '/logo.svg',
    genero: 'macho'
  },
  {
    id: 1,
    nome: 'Ronaldo Fenômeno',
    fotoPet: '/logo.svg',
    genero: 'macho'
  },
  {
    id: 1,
    nome: 'Ronaldo Fenômeno',
    fotoPet: '/logo.svg',
    genero: 'macho'
  },
]
</script>
<template>
  <InfosUserComponent
    :user="{
      nome: 'Breno Otário Rohregger',
      foto: '/logo.svg',
      username: 'breno_rohregger',
      telefone: '47984542516',
      cpf: '11251526993',
      data_nascimento: '04/05/2008',
      email: 'brenoot0405@gmail.com'
    }"
  />
  <h2 class="text-center text-5xl text-[#4c260a] font-[Handlee]">Seus Pets salvos:</h2>
 <div class="flex flex-wrap justify-between mt-20 px-60 font-[Sen]">
    <PetsAdocao v-for="pet of petsFavorite" :key="pet.id"

      :fotoPet="pet.fotoPet"
      :nome="pet.nome"
      :genero="pet.genero"
    />
  </div>
  <h2 class="text-center text-5xl text-[#4c260a] font-[Handlee]">Suas ONGs Salvas:</h2>
  <div class="flex flex-wrap justify-between mt-20 px-60 font-[Sen]">
    <OngsComponent v-for="ong of ongsFavorite" :key="ong.id"
      :logo="ong.logo"
      :nome="ong.nome"
    />
  </div>

</template>
