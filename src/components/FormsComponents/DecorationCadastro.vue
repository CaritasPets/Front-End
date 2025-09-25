<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const props = defineProps(['title', 'messageBack', 'linkBack']);

    const back = () => {
        router.back();
    }
</script>
<template>
    <div class="flex flex-col justify-around items-center bg-[#1E0B00] w-200">
        <div class="flex justify-start w-[calc(100%/1.5)]">
            <button @click="back" class="cursor-pointer">
                <span class="mdi mdi-arrow-left-circle text-[#F7F5E0] text-3xl"></span>
                <p>{{ props.messageBack }}</p>
            </button>
        </div>
        <div class="flex items-center gap-10">
            <img src="/logo_noBackground.svg" alt="logo" class="w-25 bg-[#F7F5E0] rounded-full p-2">
            <h2 class="text-2xl text-[#F7F5E0]">{{ props.title }}</h2>
        </div>
        <div>
            <img class="w-80" src="/paw_clear.svg" alt="pata-logo">
        </div>
    </div>
</template>