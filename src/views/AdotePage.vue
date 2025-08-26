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
    <FilterComponent/>
    <div class=" flex flex-wrap mx-40 my-30 gap-x-8 justify-center">
      <PetsAdocao v-for="pet of petStore.propriedades" :key="pet"
        :foto="pet.foto"
        :nome="pet.nome"
        :genero="pet.genero"
      />
    </div>
  </section>
</template>
