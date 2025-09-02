<script setup>
import { onUnmounted } from 'vue';
import { useAuthService } from '../services/Auth';
import { useRouter } from 'vue-router';
const router = useRouter()
const authService = useAuthService()
onUnmounted(() => {
    if(authService.registred){
        router.replace('/user/login')
    } 
    if(authService.authenticated){
        router.replace('/user/profile');
    }
});
</script>
<template>
    <section class="flex flex-col justify-center items-center w-full h-full fixed z-20 bg-black/50 transform-[translateY(-15.7%)]">
        <span class="mdi mdi-loading text-6xl text-white animate-spin"></span>
        <p class="text-2xl text-white">Carregando</p>
    </section>
</template>