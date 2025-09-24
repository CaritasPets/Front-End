<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import PapelOngs from '../components/OngComponent/PapelOngs.vue';
import OngsComponent from '../components/OngsComponent.vue';

import { useBannerComponentStore } from '../stores/BannerComponentStore';
import { useOngStore } from '../stores/OngsStore';
const bannerStore = useBannerComponentStore();
const ongStore = useOngStore();

</script>
<template>
  <section>
    <BannerComponent
      :background="bannerStore.propriedadesBanners.banner2.background"
      :waves="bannerStore.propriedadesBanners.banner2.waves"
      :title="bannerStore.propriedadesBanners.banner2.title"
      :text="bannerStore.propriedadesBanners.banner2.text"
      :image="bannerStore.propriedadesBanners.banner2.image"
      :buttonBooleanOng="bannerStore.propriedadesBanners.banner2.buttonBooleanOng"
      :buttonText="bannerStore.propriedadesBanners.banner2.buttonText"
      :buttonLink="bannerStore.propriedadesBanners.banner2.buttonLink" />
  </section>
  <section class="mx-10 mt-50 sm:mx-20 md:mx-30 lg:mx-40">
    <PapelOngs />
  </section>
  <section class="mx-10 mt-15 sm:m-8 md:m-16 lg:m-20">
    <h2 class="text-center text-4xl md:text-5xl lg:text-6xl text-[#4c260a] font-[Handlee]">ONGs</h2>
    <div class="flex flex-wrap sm:mx-2 lg:mx-3 my-10 md:my-20 justify-center">
      <OngsComponent
        v-for="ong of ongStore.ong" :key="ong.id"
        :ong="ong"
      />
    </div>
  </section>
</template>
