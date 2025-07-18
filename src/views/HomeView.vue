<script setup>
    import CardFuncionalidade from '../components/CardFuncionalidade.vue';
    import InfoAdocao from '../components/InfoAdocao.vue';
    import { useCardFuncionalidadeStore } from '../stores/CardFuncionalidadeStore';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import BannerComponent from '@/components/BannerComponent.vue';
    import { useBannerComponentStore } from '@/stores/BannerComponentStore';
    const storeCardFuncionalidades = useCardFuncionalidadeStore();
    const storeBannerComponent = useBannerComponentStore();

</script>

<template>
  <header>
    <HeaderComponent/>
  </header>
    <section class="banner">
      <BannerComponent
        :background="storeBannerComponent.propriedadesBanners.banner1.background"
        :image="storeBannerComponent.propriedadesBanners.banner1.image"
        :title="storeBannerComponent.propriedadesBanners.banner1.title"
        :text="storeBannerComponent.propriedadesBanners.banner1.text"
        :waves="storeBannerComponent.propriedadesBanners.banner1.waves"
      />
    </section>
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
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2vw;
      background-color: #FFDB58;
    }
</style>
