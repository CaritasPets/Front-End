<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['petPerdido', 'user'])
const router = useRouter()

function goToUserProfile() {
  if (props.user?.id) {
    router.push({ name: 'user-profile', params: { id: props.user.id } })
  }
}

function goToProcuraSe() {
  router.push({ name: 'procura-se' })
}
</script>

<template>

    <div class="bg-[#F7F5E0] pt-15 overflow-hidden">
        <img :src="props?.petPerdido?.foto" alt="Foto do Pet" class="w-full h-[510px] object-cover md:w-[50%] md:ml-[25%] md:max-h-[500px] lg:max-h-[580px] md:rounded-[25%] md:h-[100%] md:border-15 md:border-[#FFBC46]"/>
    </div>
    <section class="bg-[#F7F5E0]">
        <div class="h-[520px] bg-[#F7F5E0] rounded-t-4xl -mt-7 relative z-10 md:mt-0">
         <h2 class="font-['Handlee'] text-5xl text-center p-15">
            {{ props?.petPerdido?.nome }}
         </h2>
            <div class="w-full h-full">
                <ul class="font-['Sen'] flex flex-wrap w-[100%] gap-6 align-center justify-center mb-5">
                    <li class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[150px] sm:w-[180px] md:w-[310px]"><img src="/petInformationIcons/genero-icon.svg" alt="Ícone Gênero" class="w-12 h-12 mb-2"><strong>Gênero:</strong> {{ props?.petPerdido?.genero }}</li>
                    <li class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[150px] sm:w-[180px] md:w-[310px]"><img src="/petInformationIcons/location-icon.svg" alt="Ícone Localização" class="w-12 h-12 mb-2"><strong>Visto por último em:</strong> {{ props?.petPerdido?.local }}</li>
                </ul>
                <ul class="font-['Sen'] flex flex-wrap w-[100%] gap-6 align-center justify-center">
                    <li class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[150px] sm:w-[180px] md:w-[310px]"><img src="/petInformationIcons/especie-icon.svg" alt="Ícone Especie" class="w-12 h-12 mb-2"><strong>Espécie:</strong> {{ props?.petPerdido?.especie }}</li>
                    <li class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[150px] sm:w-[180px] md:w-[310px]"><img src="/petInformationIcons/coment-icon.svg" alt="Ícone Comentário" class="w-12 h-12 mb-2"><strong>Características:</strong> {{ props?.petPerdido?.caracteristicas }}</li>
                </ul>
            </div>
        </div>
        <div class="w-[90%] h-full bg-[#EEEBD1] flex flex-col sm:flex-row items-center gap-6 mt-10 p-6 mr-5 ml-5 rounded-2xl max-w-[650px] mx-auto md:w-full md:ml-[11%] lg:ml-[23%]">
            <img v-if="props?.user?.foto_perfil" :src="props.user.foto_perfil.file" alt="Foto do Dono" class="w-24 h-24 rounded-full object-cover border-4 border-[#FF953C] sm:w-34 sm:h-24" />
            <div class="flex flex-col text-center sm:text-left">
                <p class="text-2xl font-['Sen'] font-semibold">{{ props?.user?.nome }}</p>
                <p class="text-lg font-['Sen'] flex items-center gap-2 justify-center"><img src="/petInformationIcons/phone-icon.svg" alt="Ícone de telefone" class="w-[5%]"> {{ props?.user?.telefone }}</p>
            </div>
        </div>
        <div class="text-center flex flex-wrap mb-10 gap-5 ml-5 max-w-[370px] justify-center bg-[#F7F5E0] lg:ml-27 sm:max-w-[1000px] md:gap-10">
            <button
                class="bg-[#40A9F4] mt-10 w-[90%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#40A9F4] hover:text-[#40A9F4] sm:w-[20%]"
                @click="goToUserProfile">
                <span class="mdi mdi-account-search-outline"></span>
                Visitar Dono
            </button>
            <button
                class="bg-[#98CB2A] mt-10 w-[90%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#98CB2A] hover:text-[#98CB2A] sm:w-[40%]"
                @click="goToProcuraSe">
                <span class="mdi mdi-arrow-left-bold-outline"></span>
                Retornar para Página de Perdidos
            </button>
        </div>
    </section>
</template>