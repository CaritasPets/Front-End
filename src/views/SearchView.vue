<script setup>
import BannerComponent from '@/components/BannerComponent.vue';

import { useBannerComponentStore } from '@/stores/BannerComponentStore';

const bannerStore = useBannerComponentStore();

</script>
<template>
    <section class="banner">
    <BannerComponent
      :background="bannerStore.propriedadesBanners.bannerSearch.background"
      :waves="bannerStore.propriedadesBanners.bannerSearch.waves"
      :title="bannerStore.propriedadesBanners.bannerSearch.title"
      :text="bannerStore.propriedadesBanners.bannerSearch.text"
      :image="bannerStore.propriedadesBanners.bannerSearch.image"
    />
    </section>
</template>