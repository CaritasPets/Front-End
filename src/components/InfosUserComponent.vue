<script setup>
import { onMounted } from 'vue';

const props = defineProps(['user'])
defineEmits(['logout'])
onMounted(() => {
  console.log(props.user)
})
</script>

<template>
  <div class="bg-[#F7F5E0] pt-15 overflow-hidden">
    <img :src="`http://localhost:8000${props?.user?.foto}`" alt="Foto do usuário"
      class="w-full h-[610px] object-cover md:w-[50%] md:ml-[25%] md:max-h-[500px] lg:max-h-[700px] md:rounded-[25%] md:h-[100%] md:border-15 md:border-[#40A9F4]" />

  </div>
  <section class="bg-[#F7F5E0]">
    <div class="h-[160px] bg-[#F7F5E0] rounded-t-4xl -mt-20 relative z-10 md:mt-0">
      <h2 class="font-['Handlee'] text-5xl text-center p-15">
        {{ props?.user?.username }}
      </h2>

    </div>
    <div class="w-full h-full">
      <ul class="font-['Sen'] flex flex-wrap w-[100%] gap-6 align-center justify-center mb-5 md:mt-10">
        <li class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]"><img src="/petInformationIcons/user-icon.svg" alt="Ícone Usuário" class="w-12 h-12 mb-2"><strong>Username:</strong> {{ props?.user?.username }}
        </li>
        <li v-if="props?.user?.common_profile" class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]"> <img src="/petInformationIcons/phone-icon.svg" alt="Ícone telefone" class="w-12 h-12 mb-2"><strong>Telefone:</strong> {{ props?.user?.common_profile.telefone }}
        </li>
        <li v-else class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]"> <img src="/petInformationIcons/phone-icon.svg" alt="Ícone telefone" class="w-12 h-12 mb-2"><strong>Telefone:</strong> {{ props?.user?.organization_profile?.telefone }}
        </li>
        <li v-if="props?.user?.common_profile" class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]"><img src="/petInformationIcons/id-icon.svg" alt="Ícone CPF" class="w-12 h-12 mb-2"><strong>CPF:</strong> {{ props?.user?.common_profile.cpf }}
        </li>
        <li v-else class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]"><img src="/petInformationIcons/id-icon.svg" alt="Ícone CPF" class="w-12 h-12 mb-2"><strong>CNPJ:</strong> {{ props?.user?.organization_profile.cnpj }}
        </li>
        <li v-if="props?.user?.common_profile" class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]"><img src="/petInformationIcons/date-icon.svg" alt="Ícone Data" class="w-12 h-12 mb-2"><strong class="sm:text-center">Data de Nascimento:</strong> {{ props?.user?.common_profile.data_nascimento }}
        </li>
        <li class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[250px]"> <img src="/petInformationIcons/mail-icon.svg" alt="Ícone Email" class="w-12 h-12 mb-2"><strong>Email:</strong>
          {{ props?.user?.email }}
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap mb-10 gap-5 justify-center bg-[#F7F5E0] pt-10 lg:ml-65 sm:max-w-[1000px] md:gap-10">
      <button @click="$emit('logout')" class="bg-[#98CB2A] mt-10 w-[50%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#98CB2A] hover:text-[#2c2e27] sm:w-[20%]"><span class="mdi mdi-arrow-left-bold-outline"></span> Sair
      </button>
      <button class="bg-[#40A9F4] mt-10 w-[70%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#40A9F4] hover:text-[#40A9F4] sm:w-[30%]"><span class="mdi mdi-pencil-outline"></span> Alterar informações
      </button>
    </div>
  </section>
</template>
