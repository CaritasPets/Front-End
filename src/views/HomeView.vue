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
    <BannerComponent :background="storeBannerComponent.propriedadesBanners.banner1.background"
      :image="storeBannerComponent.propriedadesBanners.banner1.image"
      :title="storeBannerComponent.propriedadesBanners.banner1.title"
      :text="storeBannerComponent.propriedadesBanners.banner1.text" />
  </section>
  <section class="relative flex justify-center lg:mt-30 flex-wrap xl:gap-10 overflow-hidden py-20">
    <div class="relative z-10 sm:mx-10 lg:mx-20 flex flex-wrap md:gap-10 justify-center">
      <CardFuncionalidade v-for="card in storeCardFuncionalidades.propriedades" :key="card" :icon="card.icon"
        :icon-background="card.iconBackground" :text="card.text" :background="card.background" :link="card.link" />
    </div>
  </section>
  <section class="mx-10 md:mt-10 xl:mt-25 sm:mx-20 md:mx-30 lg:mx-40">
    <InfoAdocao />
  </section>
  <section class="bg-[#fae8ad] my-10 mx-10 px-5 py-10 rounded-4xl sm:mx-10 md:mx-20 lg:mx-40 lg:px-10">
    <h2 class="text-center text-4xl text-[#361300] py-3 font-[Handlee] sm:text-6xl sm:py-10">Dúvidas Frequentes</h2>
    <RecolhivelComponent v-for="recolhivel in recolhivelStore.propriedades" :key="recolhivel" :icon="recolhivel.icon"
      :title="recolhivel.title" :background="recolhivel.background" :text="recolhivel.text" />
  </section>
</template>
