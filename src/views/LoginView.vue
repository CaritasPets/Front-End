<script setup>
import LoginForm from '../components/LoginForm.vue';
import LoginInstructions from '../components/LoginInstructions.vue';

</script>
<template>
    <section class="flex justify-center gap-x-50 py-40 bg-[#03497B]">
        <LoginInstructions class="z-10"/>
        <LoginForm class="z-10"/>
    </section>
    <img class="w-[100%] transform-[translateY(-60%)] bg-[#03497B] absolute z-0" src="/blue_waves.svg" alt="">
</template>
