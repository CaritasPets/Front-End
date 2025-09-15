<script setup>
import { onMounted } from 'vue';
import BannerComponent from '../components/BannerComponent.vue';
import PapelOngs from '../components/OngComponent/PapelOngs.vue';
import OngsComponent from '../components/OngsComponent.vue';
import ErrorComponent from '../components/Errors/ErrorComponent.vue';

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
  <section class="mx-4 sm:mx-8 md:mx-16 lg:mx-40">
    <PapelOngs />
  </section>
  <section class="m-6 sm:m-8 md:m-16 lg:m-40">
    <h2 class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4c260a] font-[Handlee]">ONGs</h2>
    <div v-if="!ongService.inError" class="flex flex-wrap justify-center sm:justify-between gap-4 mt-10 sm:mt-20">
      <OngsComponent
        v-for="ong of ongStore.propriedades" :key="ong.id"
        :logo="'/logo.svg'"
        :nome="ong.nome"
      />
    </div>
    <div v-else>
      <ErrorComponent
        :status-error="ongService.statusError"
        :message="ongService.statusText"
      />
    </div>
  </section>
</template>
