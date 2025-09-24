<script setup>
    const props = defineProps(['title']);
</script>
<template>
    <div class="flex flex-col justify-around items-center bg-[#1E0B00] w-200">
        <div class="flex items-center gap-10">
            <img src="/logo_noBackground.svg" alt="logo" class="w-25 bg-amber-200 rounded-full p-2">
            <h2 class="text-2xl text-amber-200">{{ props.title }}</h2>
        </div>
        <div>
            <img class="w-80" src="/paw_logo.svg" alt="pata-logo">
        </div>
    </div>
</template>