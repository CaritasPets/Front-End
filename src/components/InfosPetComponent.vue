<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['propriedades', 'ong'])
const router = useRouter()

function goToOngProfile() {
  if (props.ong?.id) {
    router.push({ name: 'ong-profile', params: { id: props.ong.id } })
  }
}

function goToAdote() {
  router.push({ name: 'adote' })
}
</script>

<template>
    <section class="text-white bg-[#FF7700] relative">
         <h2 class="px-40 relative z-10 pt-40 text-7xl font-['Handlee']">
            {{ props?.propriedades?.nome }}
        </h2>
        <div class="flex justify-between pt-10 px-40 relative z-10">
            <div>
                <img :src="props?.propriedades?.foto" alt="Foto do Pet" class="w-102 rounded-[85px]" />
            </div>
            <div class="flex px-20 gap-30">
                <ul class="space-y-8 flex flex-col justify-center ml-4 mr-2 font-['Sen']">
                    <li class="text-3xl"><strong>Gênero:</strong> {{ props?.propriedades?.genero }}</li>
                    <li class="text-3xl"><strong>Espécie:</strong> {{ props?.propriedades?.especie }}</li>
                    <li class="text-3xl"><strong>Raça:</strong> {{ props?.propriedades?.raca }}</li>
                </ul>
                <ul class="space-y-8 flex flex-col justify-center ml-2 font-['Sen']">
                    <li class="text-3xl"><strong>Porte:</strong> {{ props?.propriedades?.porte }}</li>
                    <li class="text-3xl"><strong>Vacinado:</strong> {{ props?.propriedades?.vacinado }}</li>
                    <li class="text-3xl"><strong>Castrado:</strong> {{ props?.propriedades?.castrado }}</li>
                </ul>
            </div>
        </div>
        <div class="z-50 relative mx-40 flex items-center gap-5 mt-20">
            <img v-if="props?.ong?.foto" :src="props.ong.foto" alt="Foto da ONG" class="w-50 rounded-full" />
            <div>
                <p class="text-3xl font-['Sen']">{{ props?.ong?.nome }}</p>
                <p class="text-2xl font-['Sen']">{{ props?.ong?.telefone }}</p>
            </div>
        </div>
        <div class="flex justify-center gap-5 mt-20 z-50 relative">
            <button
                class="font-['Sen'] text-[20px] px-15 py-2 bg-[#03497B] rounded-lg border-2 border-transparent duration-500 hover:bg-transparent hover:border-[#03497B] hover:text-[#03497B]"
                @click="goToOngProfile">
                <span class="mdi mdi-home-search-outline"></span>
                Visitar ONG
            </button>
            <button
                class="font-['Sen'] text-[20px] px-10 py-2 bg-[#104C00] rounded-lg border-2 border-transparent duration-500 hover:bg-transparent hover:border-[#104C00] hover:text-[#104C00]"
                @click="goToAdote">
                <span class="mdi mdi-arrow-left-bold-outline"></span>
                Retornar para Página de Adoção
            </button>
        </div>
        <div class="overflow-hidden">
            <img src="/orange_waves.svg" alt="ondas" class="absolute w-full transform-[translateY(-20%)] bg-gradient-to-t from-[#FFC693] from-50% to-[#FF7700] to-50% z-0" />
        </div>
    </section>
</template>