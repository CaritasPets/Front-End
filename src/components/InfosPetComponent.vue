<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['propriedades', 'ong'])
const router = useRouter()

function goToAdote(){
    router.push({ name: 'adote' })
}

function goToOngProfile() {
    if (props.propriedades.user?.organization_profile.id) {
        router.push({ name: 'ong-profile', params: { id: props.propriedades.user.id } })
    }
}
</script>

<template>
    <div class="bg-[#F7F5E0] pt-15 overflow-hidden">
        <img :src="props?.propriedades?.foto" alt="Foto do Pet" class="w-full h-[610px] object-cover md:w-[50%] md:ml-[25%] md:max-h-[500px] lg:max-h-[700px] md:rounded-[25%] md:h-[100%] md:border-15 md:border-[#FF953C]"/>
    </div>
    <section class="bg-[#F7F5E0]">
        <div class="h-[500px] bg-[#F7F5E0] rounded-t-4xl my-20 relative md:mt-0">
            <h2 class="font-['Handlee'] text-5xl text-center p-15">
                {{ props?.propriedades?.nome }}
            </h2>
            <div class="w-full h-full">
                <ul class="font-['Sen'] flex flex-wrap w-[100%] gap-6 align-center justify-center mb-5">
                    <li
                        class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]">
                        <img src="/petInformationIcons/especie-icon.svg" alt="Ícone Especie" class="w-12 h-12 mb-2">
                        <strong>Espécie:</strong> {{ props?.propriedades?.especie }} </li>
                    <li
                        class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]">
                        <img src="/petInformationIcons/genero-icon.svg" alt="Ícone Gênero"
                            class="w-12 h-12 mb-2"><strong>Gênero:</strong> {{ props?.propriedades?.genero }} </li>
                    <li
                        class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]">
                        <img src="/petInformationIcons/raca-icon.svg" alt="Ícone Pata"
                            class="w-12 h-12 mb-2"><strong>Raça:</strong> {{ props?.propriedades?.raca }} </li>
                </ul>
                <ul class="font-['Sen'] flex flex-wrap w-[100%] gap-6 align-center justify-center">
                    <li
                        class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]">
                        <img src="/petInformationIcons/porte-icon.svg" alt="Ícone Tamanho"
                            class="w-12 h-12 mb-2"><strong>Porte:</strong> {{ props?.propriedades?.porte }} </li>
                    <li
                        class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]">
                        <img src="/petInformationIcons/vacinado-icon.svg" alt="Ícone Vacina"
                            class="w-12 h-12 mb-2"><strong>Vacinado:</strong> {{ props?.propriedades?.vacinado }} </li>
                    <li
                        class="flex flex-col items-center justify-center bg-[#EEEBD1] rounded-2xl p-4 w-[100px] sm:w-[180px] md:w-[200px]">
                        <img src="/petInformationIcons/castrado_icon.svg" alt="Ícone Doutor"
                            class="w-12 h-12 mb-2"><strong>Castrado:</strong> {{ props?.propriedades?.castrado }} </li>
                </ul>
            </div>
        </div>
        <div class="w-[90%] h-full bg-[#EEEBD1] flex flex-col sm:flex-row items-center gap-6 p-6 mr-5 ml-5 rounded-2xl max-w-[650px] mx-auto md:w-full md:ml-[18%] lg:ml-[29%]">
            <img v-if="props?.propriedades?.user.foto" :src="props.propriedades.user.foto" alt="Foto da ONG" class="w-24 h-24 rounded-full object-cover border-4 border-[#FF953C] sm:w-30 sm:h-30" />
            <div class="flex flex-col text-center sm:text-left">
                <p class="text-2xl font-['Sen'] font-semibold">{{ props?.propriedades?.user.username }}</p>
            </div>
        </div> 
        <div class="text-center flex flex-wrap mb-10 gap-5 justify-center bg-[#F7F5E0] lg:ml-66  sm:max-w-[1000px] md:gap-10">
            <button
                class="bg-[#40A9F4] mt-10 w-[90%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#40A9F4] hover:text-[#40A9F4] sm:w-[20%]"
                @click="goToOngProfile">
                <span class="mdi mdi-account-search-outline"></span>
                Visitar Dono
            </button>
            <button
                class="bg-[#98CB2A] mt-10 w-[90%] text-lg pt-2 pb-2 rounded-2xl font-[Sen] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#98CB2A] hover:text-[#98CB2A] sm:w-[40%]"
                @click="goToAdote">
                <span class="mdi mdi-arrow-left-bold-outline"></span>
                Retornar para Página de Perdidos
            </button>
        </div>
    </section>
</template>