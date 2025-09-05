<script setup>
import { onMounted, ref } from 'vue';
import InformationRangeComponent from '../components/petProfile/InformationRangeComponent.vue';
import PetProfileComponent from '../components/petProfile/PetProfileComponent.vue'
import ButtonsProfileComponent from '../components/petProfile/ButtonsProfileComponent.vue';
const ongId = ref(1);
const pet = {
  foto: '/logo.svg',
  nome: 'Ronaldo',
  genero: 'Macho',
  especie: 'Gato',
  idade: '11 anos',
  porte: 'Médio',
  vacinado: 'Parcialmente',
  castrado: 'Sim',
  raca: 'Pincher',
}
const buttons = [
  {
    icon: 'mdi mdi-home-search-outline',
    text: 'Visitar ONG',
    background: '#03497B',
    link: `/ong/${ongId.value}`
  },
  {
    icon: 'mdi mdi-arrow-left-bold-outline',
    text: 'Retornar para Página de Adoção', 
    background: '#104C00', 
    link: `/adote`
  },  
]
onMounted(() => {
  //requisição da api para pegar o id da ong 
  //ongId.value = idPuxadoDaApi
})
/*
*/
</script>
<template>
  <section class="bg-[#FF7700] p-20 text-white flex flex-col gap-15">
    <PetProfileComponent class="relative z-10"
    
      :foto="pet.foto"
      :nome="pet.nome"
      :genero="pet.genero"
      :especie="pet.especie"
      :idade="pet.idade"
      :porte="pet.porte"
      :vacinado="pet.vacinado"
      :castrado="pet.castrado"
      :raca="pet.raca"
    />
    <InformationRangeComponent class="relative z-10"
        :foto="pet.foto"
        :nome="pet.nome"
        :telefone="'47991940327'"
    />
    <ButtonsProfileComponent class="py-10 relative z-10"
      :obj-buttons="buttons"
    />
  </section>
  <img class="w-full transform-[translateY(-50%)] absolute z-0" src="/orange_waves.svg" alt="wave-images">
</template>
