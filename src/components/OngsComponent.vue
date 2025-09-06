<script setup>
    const props = defineProps(['logo', 'nome']);
    const backgrounds = ['#03497B', '#587911', '#FDA202'];
    function sortBackground(){
        const randomNum = Math.floor(Math.random() * 3);
        return backgrounds[randomNum];
    }
</script>
<template>
    <div class="flex flex-col items-center p-10 w-[calc(100%/5)] my-2 mx-1 text-center rounded-4xl cursor-pointer transition-all duration-500 hover:opacity-60" :style="`background: ${sortBackground()}`">
        <img class="rounded-full w-[100%]" :src="props.logo" :alt="`${props.nome}-logo`">
        <p class="text-white text-2xl">{{ props.nome }}</p>
    </div>
</template>
