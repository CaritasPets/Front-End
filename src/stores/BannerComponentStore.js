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
    banner3: {
      background: '#FF7700',
      image: '/img_banner3.svg',
      title: 'Adote o novo membro da sua família.',
      text: 'lorem ipsulom doloriam',
      waves: '/orange_waves.svg',
    },
    bannerAbout: {
      background: '#104C00',
      image: '/img_bannerAbout.svg',
      title: 'Sobre Nós',
      text: 'Conheça nossa equipe e objetivos do site.',
      waves: '/green_waves.svg'
    },
    bannerSearch: {
      background: '#FDA202',
      image: '/banner_image_search.svg',
      title: 'Perdeu seu melhor amigo?',
      text: 'Divulgue-o aqui para encontrá-lo.',
      waves: '/yellow_waves.svg',
      buttonBoolean: true,
      buttonText: 'Cadastrar pet perdido.',
      buttonLink: '/procura-se/register',
    },
  })
  return {
    propriedadesBanners,
  }
})


