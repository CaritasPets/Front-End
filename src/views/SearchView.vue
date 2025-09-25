<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import PetPerdidoCardComponent from '@/components/PetPerdidoCardComponent.vue';
import LoadinComponent from '@/components/LoadinComponent.vue';
import { usePerdidoService } from '../services/petsPerdidos/perdidoService';
const perdidoService = usePerdidoService()
import { useBannerComponentStore } from '../stores/BannerComponentStore';
const bannerStore = useBannerComponentStore();
import { usePetPerdidoStore } from '../stores/PetPerdidoStore';
import { onMounted } from 'vue';
const petPerdidoStore = usePetPerdidoStore();

onMounted(() => {
  perdidoService.getPerdidos()
})
</script>
<template>
    <section class="banner">
    <BannerComponent
      :background="bannerStore.propriedadesBanners.bannerSearch.background"
      :waves="bannerStore.propriedadesBanners.bannerSearch.waves"
      :title="bannerStore.propriedadesBanners.bannerSearch.title"
      :text="bannerStore.propriedadesBanners.bannerSearch.text"
      :image="bannerStore.propriedadesBanners.bannerSearch.image"
      :buttonBooleanPerdido="bannerStore.propriedadesBanners.bannerSearch.buttonBooleanPerdido"
      :buttonText="bannerStore.propriedadesBanners.bannerSearch.buttonText"
      :buttonLink="bannerStore.propriedadesBanners.bannerSearch.buttonLink"
    />
    </section>
    <section class="mx-10 md:mt-25 md:mx-30">
      <h2 class="text-center text-4xl md:text-5xl my-10 mb-10 md:mb-25 text-[#4c260a] lg:text-6xl font-[Handlee]">Pets perdidos</h2>
      <div v-if="perdidoService.loading == false && petPerdidoStore.propriedades.length > 0" class="flex flex-wrap sm:mx-2 lg:mx-5 my-10 md:my-30 justify-center">
      <PetPerdidoCardComponent v-for="pet of petPerdidoStore.propriedades"
        :key="pet.id"
        :id="pet.id"
        :foto="pet.foto"
        :nome="pet.nome"
        :genero="pet.genero"
       />
      </div>
      <LoadinComponent v-if="perdidoService.loading == true"/>
      <div v-else-if="petPerdidoStore.propriedades.length <= 0" class="text-center text-2xl md:text-3xl text-[#4C260A] font-[Handlee] my-20">
        <p>Não existem pets cadastrados com esses filtros.</p>
      </div>
    </section>
</template>