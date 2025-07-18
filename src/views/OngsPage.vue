<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import PapelOngs from '../components/PapelOngs.vue';
import OngsComponent from '../components/OngsComponent.vue';

import { useBannerComponentStore } from '../stores/BannerComponentStore';
import { useOngStore } from '../stores/OngsStore';
const bannerStore = useBannerComponentStore();
const ongStore = useOngStore();
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
  <section class="ongs">
    <h2>ONGs</h2>
    <div class="lista-ongs">
      <OngsComponent v-for="(ong, index) of ongStore.propriedades" :key="index" 
        :logo="ong.logo"
        :background="ong.background"
        :nome="ong.nome"
      />
    </div>
  </section>
</template>
<style scoped>
section.papel-ongs {
  margin: 10% 10%;
  margin-top: 45%;
}
section.ongs{
  margin: 10%;

  h2{
    text-align: center;
    font-size: 500%;
  }

  div.lista-ongs{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5%;
  }
}
</style>
