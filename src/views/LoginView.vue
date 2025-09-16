<script setup>
import LoadingComponent from '../components/LoadingComponent.vue';
import LoginForm from '../components/LoginForm.vue';
import LoginInstructions from '../components/LoginInstructions.vue';
import { useAuthService } from '../services/Auth';
const authService = useAuthService()
</script>
<template>
    <LoadingComponent v-if="authService.loading" />
    <section class="flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-20 py-20 md:py-40 px-6 sm:px-12 lg:px-20 bg-[#FFF493]">
        <LoginInstructions class="z-10" />
        <LoginForm class="z-10" />
    </section>
    <img class="w-full sm:translate-y-[-20%] md:translate-y-[-40%] bg-[#FFF493] absolute z-0" src="/beige_waves.svg" alt="">
</template>
