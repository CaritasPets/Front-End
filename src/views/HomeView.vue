<script setup>
    import CardFuncionalidade from '../components/CardFuncionalidade.vue';
    import InfoAdocao from '../components/InfoAdocao.vue';
    import { useCardFuncionalidadeStore } from '../stores/CardFuncionalidadeStore';
    const storeCardFuncionalidades = useCardFuncionalidadeStore();
    
</script>

<template>
    <header>Home</header>
    <section class="funcionalidades">
        <CardFuncionalidade
            :background="storeCardFuncionalidades.propriedadesFuncionalidades.card1.background"
            :icon="storeCardFuncionalidades.propriedadesFuncionalidades.card1.icon"
            :iconBackground ="storeCardFuncionalidades.propriedadesFuncionalidades.card1.iconBackground"
            :text="storeCardFuncionalidades.propriedadesFuncionalidades.card1.text"
        />
        <CardFuncionalidade
            :background="storeCardFuncionalidades.propriedadesFuncionalidades.card2.background"
            :icon="storeCardFuncionalidades.propriedadesFuncionalidades.card2.icon"
            :iconBackground ="storeCardFuncionalidades.propriedadesFuncionalidades.card2.iconBackground"
            :text="storeCardFuncionalidades.propriedadesFuncionalidades.card2.text"
        />
        <CardFuncionalidade
            :background="storeCardFuncionalidades.propriedadesFuncionalidades.card3.background"
            :icon="storeCardFuncionalidades.propriedadesFuncionalidades.card3.icon"
            :iconBackground ="storeCardFuncionalidades.propriedadesFuncionalidades.card3.iconBackground"
            :text="storeCardFuncionalidades.propriedadesFuncionalidades.card3.text"
        />
    </section>
    <section class="info-adocao">
        <InfoAdocao/>
    </section>
</template>

<style scoped>
    section.funcionalidades{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 5% 10%;
    }
    section.info-adocao{
        margin: 2% 0;
        padding: 0;
    }
</style>