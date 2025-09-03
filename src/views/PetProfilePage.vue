<script setup>
    import PetProfile from '../components/PetProfile.vue';
    const pet = {
        foto: '/logo.svg',
        nome: 'Ronaldo',
        genero: 'Macho',
        especie: 'Gato',
        idade: '11 anos',
        porte: 'Médio',
        vacinado: 'Parcialmente',
        castrado: 'Sim',
        raca: 'Pincher'
    }
</script>
<template>
    <PetProfile
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
</template>