<script setup>
  const props = defineProps([
    'foto', 'nome', 'genero', 'especie', 'idade', 'porte', 'vacinado', 'castrado', 'raca'
  ]);
</script>
<template>
  <section class="flex justify-around">
    <div>
      <img :src="props.foto" alt="foto-pet">
      <h2>{{ props.nome }}</h2>
    </div>
    <div>
      <ul>
        <li>Gênero: {{ props.genero }}</li>
        <li>Espécie: {{ props.especie }}</li>
        <li>Idade: {{ props.idade }}</li>
        <li>Porte: {{ props.porte }}</li>
        <li>Vacinado: {{ props.vacinado }}</li>
        <li>Castrado: {{ props.castrado }}</li>
        <li>Raça: {{ props.raca }}</li>
      </ul>
    </div>
  </section>
</template>
