<script setup>
import LoadingComponent from '../components/LoadingComponent.vue';
import LoginForm from '../components/LoginForm.vue';
import LoginInstructions from '../components/LoginInstructions.vue';
import { useAuthService } from '../services/Auth';
const authService = useAuthService()
</script>
<template>
    <LoadingComponent v-if="authService.loading"/>
    <section class="flex justify-center gap-x-50 py-40 bg-[#03497B]">
        <LoginInstructions class="z-10"/>
        <LoginForm class="z-10"/>
    </section>
    <img class="w-[100%] transform-[translateY(-80%)] bg-gradient-to-t from-[#B6E1FF] from-50% to-[#03497B] to-50% absolute z-0" src="/blue_waves.svg" alt="">
</template>


