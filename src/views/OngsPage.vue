<script setup>
import { onMounted } from 'vue';
import BannerComponent from '../components/BannerComponent.vue';
import PapelOngs from '../components/PapelOngs.vue';
import OngsComponent from '../components/OngsComponent.vue';

import { useOngService } from '../services/ongs/ongService';
const ongService = useOngService();

import { useBannerComponentStore } from '../stores/BannerComponentStore';
import { useOngStore } from '../stores/OngsStore';
const bannerStore = useBannerComponentStore();
const ongStore = useOngStore();

onMounted(() => {
  ongService.getOngs()
})
</script>
<template>
  <section>
    <BannerComponent
      :background="bannerStore.propriedadesBanners.banner2.background"
      :waves="bannerStore.propriedadesBanners.banner2.waves"
      :title="bannerStore.propriedadesBanners.banner2.title"
      :text="bannerStore.propriedadesBanners.banner2.text"
      :image="bannerStore.propriedadesBanners.banner2.image"
    />
  </section>
  <section class="mx-40">
    <PapelOngs />
  </section>
  <section class="m-40">
    <h2 class="text-center text-5xl text-[#4c260a]">ONGs</h2>
    <div class="flex flex-wrap justify-between mt-20">
      <OngsComponent v-for="ong of ongStore.propriedades" :key="ong.id" 
        :logo="'/logo.svg'"
        :nome="ong.nome"
      />
    </div>
  </section>
</template>
