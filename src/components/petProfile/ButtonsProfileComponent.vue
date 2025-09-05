<script setup>
    const props = defineProps(['objButtons']);
</script>
<template>
    <section class="flex justify-center gap-5">
        <RouterLink  v-for="button of props.objButtons"
        class="text-xl rounded-xl py-1 px-3"
        :style="`background: ${button.background}`"
        :key="button.text" 
        :to="button.link"
        >
            <span :class="button.icon"></span>
            {{ button.text }}
        </RouterLink>
    </section>
</template>