import { defineStore } from 'pinia'
import { ref } from 'vue'

// Importar imagens do src/assets
import imgBanner1 from '@/assets/img_banner.svg'
import imgBanner2 from '@/assets/img_banner2.svg'
import imgBanner3 from '@/assets/img_banner3.svg'
import imgBannerAbout from '@/assets/img_bannerAbout.svg'
import imgBannerSearch from '@/assets/banner_image_search.svg'

import greenWaves from '@/assets/green_waves.svg'
import blueWaves from '@/assets/blue_waves.svg'
import orangeWaves from '@/assets/orange_waves.svg'
import yellowWaves from '@/assets/yellow_waves.svg'

export const useBannerComponentStore = defineStore('bannerStore', () => {
  const propriedadesBanners = ref({
    banner1: {
      background: '#104C00',
      image: imgBanner1,
      title: 'Encontre seu novo melhor amigo!',
      text: 'Conheça nossas ONGs e encontre seu novo companheiro hoje mesmo!',
      waves: greenWaves,
    },
    banner2: {
      background: '#03497B',
      image: imgBanner2,
      title: 'Conheça nossas ONGs parceiras',
      text: 'Cada ONG ajuda a gerar histórias de amor',
      waves: blueWaves,
    },
    banner3: {
      background: '#FF7700',
      image: imgBanner3,
      title: 'Adote o novo membro da sua família.',
      text: 'Conheça os pets que estão a espera de um lar',
      waves: orangeWaves,
    },
    bannerAbout: {
      background: '#104C00',
      image: imgBannerAbout,
      title: 'Sobre Nós',
      text: 'Conheça nossa equipe e objetivos do site',
      waves: greenWaves,
    },
    bannerSearch: {
      background: '#FDA202',
      image: imgBannerSearch,
      title: 'Perdeu seu melhor amigo?',
      text: 'Divulgue-o aqui para encontrá-lo',
      waves: yellowWaves,
      buttonBoolean: true,
      buttonText: 'Cadastrar pet perdido.',
      buttonLink: '/procura-se/register',
    },
  })

  return { propriedadesBanners }
})