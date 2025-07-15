<script setup>
    const props = defineProps(['background', 'text', 'icon', 'iconBackground'])
</script>
<template>
    <div class="card" :style="'background:' + props.background">
        <span :class="props.icon" :style="'background:' + props.iconBackground"></span>
        <p>{{ props.text }}</p>
    </div>
</template>
<style scoped>
    div{
        color:#FCF4E6;
        width: 30%;
        text-align: center;
        border-radius: 10%;
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);
        margin: 3% 0;
        padding: 3% 2%;

        & span{
            font-size: 10rem;
            border-radius: 80%;
            padding: 0 5%;
        }

        & p{
            font-size: 300%;
        }
    }
</style>