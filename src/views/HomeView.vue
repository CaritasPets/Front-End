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
    <header>Home</header>
    <section class="funcionalidades">
        <CardFuncionalidade
            :background="storeCardFuncionalidades.propriedades.card1.background"
            :icon="storeCardFuncionalidades.propriedades.card1.icon"
            :iconBackground ="storeCardFuncionalidades.propriedades.card1.iconBackground"
            :text="storeCardFuncionalidades.propriedades.card1.text"
        />
        <CardFuncionalidade
            :background="storeCardFuncionalidades.propriedades.card2.background"
            :icon="storeCardFuncionalidades.propriedades.card2.icon"
            :iconBackground ="storeCardFuncionalidades.propriedades.card2.iconBackground"
            :text="storeCardFuncionalidades.propriedades.card2.text"
        />
        <CardFuncionalidade
            :background="storeCardFuncionalidades.propriedades.card3.background"
            :icon="storeCardFuncionalidades.propriedades.card3.icon"
            :iconBackground ="storeCardFuncionalidades.propriedades.card3.iconBackground"
            :text="storeCardFuncionalidades.propriedades.card3.text"
        />
    </section>
    <section class="info-adocao">
        <InfoAdocao/>
    </section>
    <section class="duvidas">
        <h2>Dúvidas Frequentes</h2>
        <RecolhivelComponent
            :icon="recolhivelStore.propriedades.recolhivel1.icon"
            :title="recolhivelStore.propriedades.recolhivel1.title"
            :background="recolhivelStore.propriedades.recolhivel1.background"
            :text="recolhivelStore.propriedades.recolhivel1.text"
            />
        <RecolhivelComponent
            :icon="recolhivelStore.propriedades.recolhivel2.icon"
            :title="recolhivelStore.propriedades.recolhivel2.title"
            :background="recolhivelStore.propriedades.recolhivel2.background"
            :text="recolhivelStore.propriedades.recolhivel2.text"
            />
        <RecolhivelComponent
            :icon="recolhivelStore.propriedades.recolhivel3.icon"
            :title="recolhivelStore.propriedades.recolhivel3.title"
            :background="recolhivelStore.propriedades.recolhivel3.background"
            :text="recolhivelStore.propriedades.recolhivel3.text"
        />
        <RecolhivelComponent
            :icon="recolhivelStore.propriedades.recolhivel4.icon"
            :title="recolhivelStore.propriedades.recolhivel4.title"
            :background="recolhivelStore.propriedades.recolhivel4.background"    
            :text="recolhivelStore.propriedades.recolhivel4.text"
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