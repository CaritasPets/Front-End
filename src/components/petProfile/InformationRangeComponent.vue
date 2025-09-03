<script setup>
const props = defineProps(['foto', 'nome', 'telefone']);
</script>
<template>
    <section class="flex items-center gap-5">
        <img class="rounded-full w-30" :src="props.foto" alt="foto-perfil">
        <div>
            <h3 class="text-4xl">Divulgado por: {{ props.nome }}</h3>
            <p class="text-2xl">Telefone para contato: {{ props.telefone }}</p>
        </div>
    </section>
</template>