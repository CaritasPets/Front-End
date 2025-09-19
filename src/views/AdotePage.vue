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
    <BannerComponent 
      :background="storeBannerComponent.propriedadesBanners.banner3.background"
      :image="storeBannerComponent.propriedadesBanners.banner3.image"
      :title="storeBannerComponent.propriedadesBanners.banner3.title"
      :text="storeBannerComponent.propriedadesBanners.banner3.text"
      :waves="storeBannerComponent.propriedadesBanners.banner3.waves"
      :buttonBoolean="storeBannerComponent.propriedadesBanners.banner3.buttonBoolean"
      :buttonText="storeBannerComponent.propriedadesBanners.banner3.buttonText"
      :buttonLink="storeBannerComponent.propriedadesBanners.banner3.buttonLink" />

  </section>
    <section class="m-30 ">
      <h2 class="text-6xl text-[#4C260A] text-center mb-25 mt-10 font-[Handlee]">Pets para Adoção</h2>
      <FilterComponent/>
      <div v-if="petStore.filteredPropriedades.length > 0" class="flex flex-wrap sm:mx-2 lg:mx-5 my-30 justify-center">
        <PetsAdocao v-for="pet of petStore.filteredPropriedades"
          :key="pet.id"
          :id="pet.id"
          :foto="pet.foto"
          :nome="pet.nome"
          :genero="pet.genero"
        />
      </div>
      <div v-else class="text-center text-3xl text-[#4C260A] font-[Handlee] my-20">
        <p>Não existem pets cadastrados com esses filtros.</p>
      </div>
    </section>
</template>

