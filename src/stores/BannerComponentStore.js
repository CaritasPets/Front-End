import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannerComponentStore = defineStore('bannerStore', () => {
    const propriedadesBanners = ref({
        banner1: {
          background: '#104C00',
          image: '/img_banner1.png',
          title: 'Encontre seu novo melhor amigo!',
          text: 'Conheça nossas ONGS e encontre seu novo companheiro hoje mesmo!',
          waves: '/waves1.png'
        },
        banner2: {
          background: '#03497B',
          image: '/img_banner2.png',
          title: 'Conheça nossas ONGs parceiras',
          text: 'Cada Ong carrega uma história de amor.',
          waves: '/waves2.png'
        }
    })
    return {
        propriedadesBanners,
    }
})
