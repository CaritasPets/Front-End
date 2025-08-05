<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import PetsAdocao from '@/components/PetsAdocao.vue';

import { useBannerComponentStore } from '../stores/BannerComponentStore';
const storeBannerComponent = useBannerComponentStore();
</script>
<template>
  <header>
    <HeaderComponent/>
  </header>
  <section class="banner">
    <BannerComponent :background="storeBannerComponent.propriedadesBanners.banner3.background"
      :image="storeBannerComponent.propriedadesBanners.banner3.image"
      :title="storeBannerComponent.propriedadesBanners.banner3.title"
      :text="storeBannerComponent.propriedadesBanners.banner3.text"
      :waves="storeBannerComponent.propriedadesBanners.banner3.waves" />
  </section>
  <section class="adocao">
    <PetsAdocao/>
  </section>
</template>
<style scoped>
adocao {
  
}
</style>
