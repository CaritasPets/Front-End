<script setup>
import BannerComponent from '@/components/BannerComponent.vue';

import { useBannerComponentStore } from '@/stores/BannerComponentStore';

const bannerStore = useBannerComponentStore();

</script>
<template>
    <section class="banner">
    <BannerComponent
      :background="bannerStore.propriedadesBanners.bannerSearch.background"
      :waves="bannerStore.propriedadesBanners.bannerSearch.waves"
      :title="bannerStore.propriedadesBanners.bannerSearch.title"
      :text="bannerStore.propriedadesBanners.bannerSearch.text"
      :image="bannerStore.propriedadesBanners.bannerSearch.image"
      :buttonBoolean="bannerStore.propriedadesBanners.bannerSearch.buttonBoolean"
      :buttonText="bannerStore.propriedadesBanners.bannerSearch.buttonText"
      :buttonLink="bannerStore.propriedadesBanners.bannerSearch.buttonLink"
    />
    </section>
    <section class="lost">
      <h2 class="text-center text-6xl text-[#4c260a] font-[Handlee]">Pets perdidos</h2>
      
    </section>
</template>