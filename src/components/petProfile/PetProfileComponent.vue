<script setup>
  const props = defineProps([
    'foto', 'nome', 'genero', 'especie', 'idade', 'porte', 'vacinado', 'castrado', 'raca'
  ]);
  //w-[40%] text-3xl class da <li>
  const atributos = [
    {descricao: 'Gênero', valor: props.genero},
    {descricao: 'Espécie', valor: props.especie},
    {descricao: 'Idade', valor: props.idade},
    {descricao: 'Porte', valor: props.porte},
    {descricao: 'Vacinado', valor: props.vacinado},
    {descricao: 'Castrado', valor: props.castrado},
    {descricao: 'Raça', valor: props.raca}
  ]
</script>
<template>
  <section class="flex px-20 gap-20 text-white">
    <div class="flex flex-col items-center gap-5">
      <img class="w-200 rounded-4xl" :src="props.foto" alt="foto-pet">
      <h2 class="text-5xl">{{ props.nome }}</h2>
    </div>
    <div>
      <ul class="flex flex-wrap gap-x-40 gap-y-10">
        <li class="w-[40%] text-2xl" v-for="item of atributos" :key="item">
          <span class="font-bold">{{ item.descricao }}:</span> {{ item.valor }}
        </li>
      </ul>
    </div>
  </section>
</template>
