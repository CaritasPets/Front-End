<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['ong'])
</script>

<template>
  <div class="bg-[#F7F5E0] pt-15 overflow-hidden">
    <img :src="props?.ong?.user.foto" alt="Foto da ONG" class="w-full h-[610px] object-cover md:w-[50%] md:ml-[25%]  md:rounded-[25%] md:max-h-[500px] lg:max-h-[700px] md:h-[80%] lg:border-15 lg:border-[#40A9F4]" />
  </div>
  <section class="bg-[#F7F5E0]">
    <div class="h-[520px] bg-[#F7F5E0] rounded-t-4xl -mt-7 relative z-10 lg:mt-0">
      <h2 class="font-['Handlee'] text-5xl text-center p-15">
        {{ props?.ong?.user.username }}
      </h2>
      <div class="w-full h-full">
        <ul class="font-['Sen'] flex flex-wrap w-[100%] gap-6 align-center justify-center mb-5">
          <li
            class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[180px] sm:w-[180px] md:w-[290px]">
            <img src="/petInformationIcons/phone-icon.svg" alt="Ícone Telefone"
              class="w-12 h-12 mb-2"><strong>Telefone:</strong> {{ props?.ong?.telefone }}
          </li>
          <li
            class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[180px] sm:w-[180px] md:w-[290px]">
            <img src="/petInformationIcons/mail-icon.svg" alt="Ícone Gmail"
              class="w-12 h-12 mb-2"><strong>Email:</strong> {{ props?.ong?.user.email }}
          </li>
        </ul>
        <ul class="font-['Sen'] flex flex-wrap w-[100%] gap-6 align-center justify-center">
          <li
            class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[180px] sm:w-[180px] md:w-[290px]">
            <img src="/petInformationIcons/location-icon.svg" alt="Ícone Localização"
              class="w-12 h-12 mb-2"><strong>Endereço:</strong> {{ props?.ong?.endereco }}
          </li>
          <li
            class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[180px] sm:w-[180px] md:w-[290px]">
            <img src="/petInformationIcons/cnpj-icon.svg" alt="Ícone Documento"
              class="w-12 h-12 mb-2"><strong>CNPJ:</strong> {{ props?.ong?.cnpj }}
          </li>
        </ul>
        <p class="w-[90%] h-[250px] bg-[#EEEBD1] flex flex-wrap items-center gap-6 pl-6 pr-4 pt-5 mt-15 rounded-2xl max-w-[600px] mx-auto md:h-[200px] max-h[300px] sm:w-[55%] md:w-[65%] lg:w-[45%]">
          <img src="/petInformationIcons/coment-icon.svg" alt="Ícone Comentário" class="w-10 h-10"><strong
            class="text-xl">Descrição:</strong> {{ props?.ong.descricao }}</p>
      </div>
    </div>
    <div class="text-center flex flex-wrap mb-10 gap-5 justify-center mt-60 bg-[#F7F5E0] lg:ml-85 sm:max-w-[850px] md:gap-10">
      <button
        class="bg-[#40A9F4] mt-10 w-[80%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#40A9F4] hover:text-[#40A9F4] sm:w-[25%]">
        <span class="mdi mdi-pencil-outline"></span> Alterar informações
      </button>
      <RouterLink to="/ongs"
        class="bg-[#98CB2A] mt-10 w-[80%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#98CB2A] hover:text-[#98CB2A] sm:w-[40%]">
        <span class="mdi mdi-arrow-left-bold-outline"></span> Retornar para Página de ONGs
      </RouterLink>
    </div>
  </section>
</template>
