<script setup>
    import CardFuncionalidade from '../components/HomeComponents/CardFuncionalidade.vue';
    import InfoAdocao from '../components/HomeComponents/InfoAdocao.vue';
    import RecolhivelComponent from '../components/HomeComponents/RecolhivelComponent.vue';
    import BannerComponent from '@/components/BannerComponent.vue';

    import { useCardFuncionalidadeStore } from '../stores/CardFuncionalidadeStore';
    import { useBannerComponentStore } from '@/stores/BannerComponentStore';
    import { useRecolhivelStore } from '../stores/RecolhiveisStore';
    const storeCardFuncionalidades = useCardFuncionalidadeStore();
    const storeBannerComponent = useBannerComponentStore();
    const recolhivelStore = useRecolhivelStore();
</script>

<template>
    <section class="banner">
      <BannerComponent
        :background="storeBannerComponent.propriedadesBanners.banner1.background"
        :image="storeBannerComponent.propriedadesBanners.banner1.image"
        :title="storeBannerComponent.propriedadesBanners.banner1.title"
        :text="storeBannerComponent.propriedadesBanners.banner1.text"
        :waves="storeBannerComponent.propriedadesBanners.banner1.waves"
      />
    </section>
    <section class="flex justify-center flex-wrap mx-40 gap-10">
        <CardFuncionalidade v-for="card in storeCardFuncionalidades.propriedades" :key="card"
            :icon="card.icon"
            :icon-background="card.iconBackground"
            :text="card.text"
            :background="card.background"
            :link="card.link"
        />
    </section>
    <section class="mx-40 mt-25">
        <InfoAdocao/>
    </section>
    <section class="bg-[#FFE078] my-30 mx-40 px-10 py-10 rounded-4xl">
        <h2 class="text-center text-6xl text-[#361300] py-10 font-[Handlee]">Dúvidas Frequentes</h2>
        <RecolhivelComponent v-for="recolhivel in recolhivelStore.propriedades" :key="recolhivel"
            :icon="recolhivel.icon"
            :title="recolhivel.title"
            :background="recolhivel.background"
            :text="recolhivel.text"
        />
    </section>
</template>
