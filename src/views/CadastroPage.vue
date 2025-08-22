<script setup>
import FormCadastro from '../components/FormCadastro.vue';
import LoadingComponent from '../components/LoadingComponent.vue';
import { useAuthStore } from '../stores/AuthStore';
const authStore = useAuthStore()
</script>
<template>
    <LoadingComponent v-if="authStore.loading"/>
    <section class="bg-[#03497B] pt-20 px-10">
    <div class="text-white z-10 relative pl-15 mb-20">
        <h2 class="text-6xl">Cadastro</h2>
        <p class="text-3xl font-light">Preencha as informações de cadastro:</p>
    </div>
    <FormCadastro class="z-10 relative"/>
    </section>
    <img class="w-[100%] transform-[translateY(-50%)] bg-[#03497B] absolute z-0" src="/blue_waves.svg" alt="bg-image-waves">
</template>