<script setup>
    const props = defineProps(['background', 'text', 'icon', 'iconBackground'])
</script>
<template>
    <div class="text-white w-85 text-center rounded-4xl shadow-[10px_10px_10px_rgba(0,0,0,0.8)] pt-20 pb-10" :style="'background:' + props.background">
        <span :class="props.icon + ' text-9xl rounded-full px-5'" :style="'background:' + props.iconBackground"></span>
        <p class="text-4xl pt-10 px-4">{{ props.text }}</p>
    </div>
</template>