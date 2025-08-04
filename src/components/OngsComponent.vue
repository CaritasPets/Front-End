<script setup>
    import { onMounted } from 'vue';

    const props = defineProps(['logo', 'nome', 'background']);
    const backgrounds = ['#03497B', '#587911', '#FDA202'];
    function sortBackground(){
        const randomNum = Math.floor(Math.random() * 3);
        return backgrounds[randomNum];
    }
    
    const myObserver =  new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("show")
            }
        })
    })

    onMounted(() => {
        const cardOngElement = document.querySelector('.card-ong');
        if(cardOngElement.value){
            myObserver.observe(cardOngElement.value)
        }
    })
</script>
<template>    
    <div class="card-ong" :style="`background: ${sortBackground()}`">
        <img :src="props.logo" :alt="`${props.nome}-logo`">
        <p class="nome">{{ props.nome }}</p>
    </div>
</template>
<style scoped>
    div.card-ong {
        padding: 3%;
        width: calc(100%/5);
        margin: 2% 1%;
        text-align: center;
        border-radius: 8%;
        transition: all 0.5s;

        img{
           width: 80%;
           border-radius: 80px; 
        }
        p{
            color: #fff;
            font-size: 200%;
        }
    }
</style>