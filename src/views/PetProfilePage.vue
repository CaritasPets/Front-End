<script setup>
import InformationRangeComponent from '../components/petProfile/InformationRangeComponent.vue';
import PetProfileComponent from '../components/petProfile/PetProfileComponent.vue'
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
  </section>
  <img class="w-full transform-[translateY(-50%)] absolute z-0" src="/orange_waves.svg" alt="wave-images">
</template>
