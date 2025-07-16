<script setup>
    import CardFuncionalidade from '../components/CardFuncionalidade.vue';
    import InfoAdocao from '../components/InfoAdocao.vue';
    import RecolhivelComponent from '../components/RecolhivelComponent.vue';
    import { useCardFuncionalidadeStore } from '../stores/CardFuncionalidadeStore';
    import { useRecolhivelStore } from '../stores/RecolhiveisStore';

    const storeCardFuncionalidades = useCardFuncionalidadeStore();
    const recolhivelStore = useRecolhivelStore();
</script>

<template>
    <header></header>
    <section class="funcionalidades">
        <CardFuncionalidade v-for="card in storeCardFuncionalidades.propriedades" :key="card"
            :icon="card.icon"
            :icon-background="card.iconBackground"
            :text="card.text"
            :background="card.background"
        />
    </section>
    <section class="info-adocao">
        <InfoAdocao/>
    </section>
    <section class="duvidas">
        <h2>Dúvidas Frequentes</h2>
        <RecolhivelComponent v-for="recolhivel in recolhivelStore.propriedades" :key="recolhivel"
            :icon="recolhivel.icon"
            :title="recolhivel.title"
            :background="recolhivel.background"
            :text="recolhivel.text"
        />
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
    section.duvidas{
        background: #FFE078;
        margin: 8% 4%;
        padding: 8% 8%;
        border-radius: 80px;

        h2{
            text-align: center;
            font-size: 500%;
            color: #361300;
            margin-bottom: 10%;
        }
    }
</style>