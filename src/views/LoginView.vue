<script setup>
import DecorationCadastro from '../components/FormsComponents/DecorationCadastro.vue';
import LoginForm from '../components/LoginForm.vue';
</script>
<template>
    <section class="bg-black/80 flex sm:px-20 sm:py-20">
        <DecorationCadastro
            class="rounded-l-4xl"
            :title="'Login de usuário'"
        />
        <LoginForm class="rounded-r-4xl" />
    </section>
</template>


