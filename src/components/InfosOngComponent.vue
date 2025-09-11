<script setup>
const props = defineProps(['ong'])
</script>

<template>
  <section class="text-white">
    <div class="bg-[#03497B] pt-15 px-40 relative z-10">
      <h2 class="text-7xl font-['Handlee']">
        {{ props?.ong?.nome }}
      </h2>
      <div class="flex gap-10 pt-10">
        <img
          :src="props?.ong?.foto"
          alt="Foto da ONG"
          class="w-102 rounded-[85px]"
        />
        <ul class="space-y-8 flex flex-col justify-center ml-9 font-['Sen']">
          <li class="text-3xl"><strong>Telefone:</strong> {{ props?.ong?.telefone }}</li>
          <li class="text-3xl"><strong>Email:</strong> {{ props?.ong?.email }}</li>
          <li class="text-3xl"><strong>Endereço:</strong> {{ props?.ong?.endereco }}</li>
          <li class="text-3xl"><strong>CNPJ:</strong> {{ props?.ong?.cnpj }}</li>
        </ul>
      </div>
      <p class="text-2xl mt-12 text-justify"><strong>Descrição:</strong> {{ props?.ong.descricao }}</p>
    <button class="font-['Sen'] text-[20px] mt-15 mr-7 px-15 py-2 z-10 relative bg-[#FF7700] rounded-lg border-2 border-transparent duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]">
      <span class="mdi mdi-arrow-left-bold-outline"></span> Retornar para Página de ONGs
    </button>
    <button class="font-['Sen'] text-[20px] mt-15 ml-7 px-10 py-2 z-10 relative bg-[#587911] rounded-lg border-2 border-transparent duration-500 hover:bg-transparent hover:border-[#9dd031] hover:text-[#9dd031]">
      <span class="mdi mdi-pencil-outline"></span> Alterar informações
    </button>
  </div>
  <div class="overflow-hidden">
    <img
      src="/blue_waves.svg"
      alt="ondas"
      class="absolute w-full transform-[translateY(-20%)] bg-gradient-to-t from-[#B6E1FF] from-50% to-[#03497B] to-50% z-0"
    />
  </div>
  </section>
</template>
