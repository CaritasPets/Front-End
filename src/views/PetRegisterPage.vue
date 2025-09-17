<script setup>
import PetForm from '../components/PetRegister/PetForm.vue';
</script>
<template>
    <section class="flex flex-col gap-20 bg-[#FFF493] py-40">
        <div class="px-30">
            <h2 class="text-6xl font-[Handlee]">Cadastro para adoção</h2>
            <p class="text-2xl">Para cadastrar o pet para adoção, preencha as informações:</p>
        </div>
        <PetForm
            class="z-10 relative"
        />
    </section>
    <img class="w-full z-0 absolute transform-[translateY(-80%)]" src="/cream_waves.svg" alt="cream_waves">
</template>