<script setup>
    import BannerComponent from '@/components/BannerComponent.vue';
    import ObjetivosComponent from '@/components/AboutComponents/ObjetivosComponent.vue';
    import QuemSomosComponent from '@/components/AboutComponents/QuemSomosComponent.vue';
    import VisitaComponent from '@/components/AboutComponents/VisitaComponent.vue';
    import { useBannerComponentStore } from '@/stores/BannerComponentStore';

    const storeBannerComponent = useBannerComponentStore();
</script>

<template>
    <section class="banner">
      <BannerComponent
        :background="storeBannerComponent.propriedadesBanners.bannerAbout.background"
        :image="storeBannerComponent.propriedadesBanners.bannerAbout.image"
        :title="storeBannerComponent.propriedadesBanners.bannerAbout.title"
        :text="storeBannerComponent.propriedadesBanners.bannerAbout.text"
        :waves="storeBannerComponent.propriedadesBanners.bannerAbout.waves"
      />
    </section>
    <section class="mx-40">
      <QuemSomosComponent></QuemSomosComponent>
    </section>
    <section class="mx-40">
      <ObjetivosComponent></ObjetivosComponent>
    </section>
    <section class="mx-40">
      <VisitaComponent></VisitaComponent>
    </section>
</template>