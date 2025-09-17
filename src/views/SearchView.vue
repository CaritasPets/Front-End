<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import PetsAdocao from '@/components/PetsAdocao.vue';

import { useBannerComponentStore } from '../stores/BannerComponentStore';
const bannerStore = useBannerComponentStore();
import { usePetStore } from '../stores/PetStore';
const petStore = usePetStore()

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
      <div v-if="petStore.filteredPropriedades.length > 0" class="flex flex-wrap sm:mx-2 lg:mx-5 my-30 justify-center">
        <PetsAdocao v-for="pet of petStore.filteredPropriedades" :key="pet.id"
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