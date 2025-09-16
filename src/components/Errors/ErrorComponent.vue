<script setup>
    const props = defineProps(['statusError', 'message'])
</script>
<template>
    <section class="flex flex-col gap-10 text-center my-20 py-20 bg-[#FFF493] rounded-4xl shadow-2xl">
        <h3 class="text-6xl text-[]">{{ props.statusError }}</h3>
        <div class="flex flex-col items-center">
            <img class="w-100" src="/paw_logo.svg" alt="image-error">
        </div>
        <div>
            <p class="text-3xl">Ops! Houve algum erro</p>
            <p class="text-3xl">{{ props.message }}</p>
        </div>
    </section>
</template>