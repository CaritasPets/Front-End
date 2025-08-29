import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannerComponentStore = defineStore('filterStore', () => {
  const propriedadesBanners = ref({
    subfilter1: {
      background: '#587911',
      title: 'Espécie',
      text: 'Conheça nossas ONGS e encontre seu novo companheiro hoje mesmo!',
    },
  })
  return {
    propriedadesBanners,
  }
})
