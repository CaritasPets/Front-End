<script setup>
import BannerComponent from '../components/BannerComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';
import PetsAdocao from '@/components/PetsAdocao.vue';

import { useBannerComponentStore } from '../stores/BannerComponentStore';
const storeBannerComponent = useBannerComponentStore();
import { usePetStore } from '../stores/PetStore';
const petStore = usePetStore()
</script>
<template>
  <section class="banner">
    <BannerComponent :background="storeBannerComponent.propriedadesBanners.banner3.background"
      :image="storeBannerComponent.propriedadesBanners.banner3.image"
      :title="storeBannerComponent.propriedadesBanners.banner3.title"
      :text="storeBannerComponent.propriedadesBanners.banner3.text"
      :waves="storeBannerComponent.propriedadesBanners.banner3.waves" />
  </section>
  <section class="adocao">
    <h2 class="text-6xl text-[#4C260A] text-center mb-25 mt-10 font-[Handlee]">Pets para Adoção</h2>
    <FilterComponent/>
    <div class="flex flex-wrap sm:mx-2 lg:mx-5 my-30 justify-center">
      <PetsAdocao v-for="pet of petStore.propriedades" :key="pet"
        :foto="pet.foto"
        :nome="pet.nome"
        :genero="pet.genero"
      />
    </div>
  </section>
</template>
