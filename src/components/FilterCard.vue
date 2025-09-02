<script setup>
import { ref } from 'vue';

    const props = defineProps(['options', 'background', 'title', ])
    const open = ref(false)
    let contador = 0;
</script>
<template>
    <div  :style="`background: ${props.background}`">
        <div @click="open = !open">
            <h3>{{ props.title }}</h3>
            <span></span>
        </div>
        <div v-if="open">
            <label v-for="item of props.options" :key="item">
                <input type="checkbox" :value="item.value" onclick="contador++">
                {{ item.option }}
            </label>
        </div>
    </div>
</template>
