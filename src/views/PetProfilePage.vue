<script setup>
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
  <section class="bg-[#FF7700] py-20">
    <PetProfileComponent
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
  </section>
</template>
