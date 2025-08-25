<script setup>
const props = defineProps(['vmodel', 'type', 'placeholder', 'color', 'id', 'for']);
defineEmits(['inputValue']);
</script>
<template>
    <div>
        <label :for="props.for"></label>
        <input 
            :id="props.id"
            :value="props.vmodel" 
            :type="props.type" 
            :placeholder="props.placeholder"
            :style="`color: ${props.color}`"
            @input="$emit('inputValue', $event.target.value)"
        >
    </div>
</template>