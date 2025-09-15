<script setup>
import InfosUserComponent from '@/components/InfosUserComponent.vue';
import OngsComponent from '@/components/OngsComponent.vue';
import PetsAdocao from '@/components/PetsAdocao.vue';
import { useAuthService } from '../services/Auth';
import { ref, onMounted } from 'vue';
const authService = useAuthService();
const profile = ref({});
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
onMounted(async () => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    profile.value = await authService.profile();
  } else {
    alert('Você precisa fazer login primeiro.')
    window.location.href = '/user/login'
  }
})
</script>
<template>
  <InfosUserComponent
    :user="profile"
    @logout="authService.logOut"
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
