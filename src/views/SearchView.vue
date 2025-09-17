<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';
import PetPerdidoCardComponent from '@/components/PetPerdidoCardComponent.vue';

import { onMounted } from 'vue';

import { useBannerComponentStore } from '../stores/BannerComponentStore';
const bannerStore = useBannerComponentStore();
import { usePetPerdidoStore } from '../stores/PetPerdidoStore';
const petPerdidoStore = usePetPerdidoStore();

import { usePetPerdidoService } from '../services/pets/petsPerdidos';
const petPerdidoService = usePetPerdidoService()

onMounted(() => {
  petPerdidoService.getPerdidos()
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
      :buttonBoolean="bannerStore.propriedadesBanners.bannerSearch.buttonBoolean"
      :buttonText="bannerStore.propriedadesBanners.bannerSearch.buttonText"
      :buttonLink="bannerStore.propriedadesBanners.bannerSearch.buttonLink"
    />
    </section>
    <section class="m-30">
      <h2 class="text-center text-6xl my-10 mb-25 text-[#4c260a] font-[Handlee]">Pets perdidos</h2>
      <FilterComponent/>
      <div v-if="petPerdidoStore.propriedades.length > 0" class="flex flex-wrap sm:mx-2 lg:mx-5 my-30 justify-center">
      <PetPerdidoCardComponent v-for="pet of petPerdidoStore.propriedades"
        :key="pet.id"
        :id="pet.id"
        :foto="pet.foto"
        :nome="pet.nome"
        :genero="pet.genero"
       />
      </div>
      <div v-else class="text-center text-3xl text-[#4C260A] font-[Handlee] my-20">
        Não existem pets cadastrados com esses filtros.
      </div>
    </section>
</template>