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
    <section class="text-white bg-[#FDA202] relative">
         <h2 class="px-40 relative z-10 pt-40 text-7xl font-['Handlee']">
            {{ props?.petPerdido?.nome }}
        </h2>
        <div class="flex justify-between pt-10 px-40 relative z-10">
            <div>
                <img :src="props?.petPerdido?.foto" alt="Foto do Pet" class="w-200 rounded-[85px]" />
            </div>
            <div class="flex px-20 gap-10 items-stretch">
                <ul class="space-y-8 flex flex-col justify-center ml-4 mr-2 font-['Sen'] w-80 h-full">
                    <li class="text-3xl"><strong>Gênero:</strong> {{ props?.petPerdido?.genero }}</li>
                    <li class="text-3xl"><strong>Espécie:</strong> {{ props?.petPerdido?.especie }}</li>
                </ul>
                <ul class="space-y-8 flex flex-col justify-center ml-2 font-['Sen'] w-80 h-full">
                    <li class="text-3xl"><strong>Local:</strong> {{ props?.petPerdido?.localDesaparecimento }}</li>
                    <li class="text-3xl"><strong>Características:</strong> {{ props?.petPerdido?.caracteristicas }}</li>
                </ul>
            </div>
        </div>
        <div class="z-10 relative mx-40 flex items-center gap-5 mt-20">
            <img v-if="props?.user?.foto" :src="props.user.foto" alt="Foto do Dono" class="w-50 rounded-full" />
            <div>
                <p class="text-3xl font-['Sen']">{{ props?.user?.nome }}</p>
                <p class="text-2xl font-['Sen']">{{ props?.user?.telefone }}</p>
            </div>
        </div>
        <div class="flex justify-center gap-5 mt-20 z-50 relative">
            <button
                class="font-['Sen'] text-[20px] px-15 py-2 bg-[#03497B] rounded-lg border-2 border-transparent duration-500 hover:bg-transparent hover:border-[#03497B] hover:text-[#03497B]"
                @click="goToUserProfile">
                <span class="mdi mdi-account-search-outline"></span>
                Visitar Dono
            </button>
            <button
                class="font-['Sen'] text-[20px] px-10 py-2 bg-[#104C00] rounded-lg border-2 border-transparent duration-500 hover:bg-transparent hover:border-[#104C00] hover:text-[#104C00]"
                @click="goToProcuraSe">
                <span class="mdi mdi-arrow-left-bold-outline"></span>
                Retornar para Página de Perdidos
            </button>
        </div>
        <div class="overflow-hidden">
            <img src="/yellow_waves.svg" alt="ondas" class="absolute w-full transform-[translateY(-20%)] bg-gradient-to-t from-[#FFDCA0] from-50% to-[#FDA202] to-50% z-0" />
        </div>
    </section>
</template>