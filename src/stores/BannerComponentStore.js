import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBannerComponentStore = defineStore('bannerStore', () => {
  const propriedadesBanners = ref({
    banner1: {
      background: '#104C00',
      image: '/img_banner.svg',
      title: 'Encontre seu novo melhor amigo!',
      text: 'Conheça nossas ONGS e encontre seu novo companheiro hoje mesmo!',
      waves: '/green_waves.svg',
    },
    banner2: {
      background: '#03497B',
      image: '/img_banner2.svg',
      title: 'Conheça nossas ONGs parceiras',
      text: 'Cada Ong carrega uma história de amor.',
      waves: '/blue_waves.svg',
    },
    bannerSearch: {
      background: '#FDA202',
      image: '/banner_image_search.svg',
      title: 'Perdeu seu melhor amigo?',
      text: 'Divulgue aqui para encontrá-lo',
      waves: '/yellow_waves.svg',
      buttonBoolean: true,
      buttonText: 'Cadastrar pet perdido',
      buttonLink: '/',
    },
  })
  return {
    propriedadesBanners,
  }
})
