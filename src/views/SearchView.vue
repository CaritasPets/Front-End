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
    <section class="lost">
      <h2 class="text-center text-6xl text-[#4c260a] font-[Handlee]">Pets perdidos</h2>
      <div class=" flex flex-wrap mx-40 my-30 gap-x-8 justify-center">
        <PetsAdocao v-for="pet of petStore.propriedades" :key="pet"
          :foto="pet.foto"
          :nome="pet.nome"
          :genero="pet.genero"
      />
      </div>
    </section>
</template>