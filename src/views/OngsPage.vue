<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import PapelOngs from '../components/PapelOngs.vue'
import { useBannerComponentStore } from '../stores/BannerComponentStore';
const bannerStore = useBannerComponentStore();
</script>
<template>
  <header>
    <HeaderComponent/>
  </header>
  <section class="banner">
    <BannerComponent
      :background="bannerStore.propriedadesBanners.banner2.background"
      :waves="bannerStore.propriedadesBanners.banner2.waves"
      :title="bannerStore.propriedadesBanners.banner2.title"
      :text="bannerStore.propriedadesBanners.banner2.text"
      :image="bannerStore.propriedadesBanners.banner2.image"
    />
  </section>
  <section class="papel-ongs">
    <PapelOngs />
  </section>
</template>
<style scoped>
section.papel-ongs {
  margin: 10% 10%;
  margin-top: 45%;
}
</style>
