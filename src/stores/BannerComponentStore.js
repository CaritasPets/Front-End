import { defineStore } from 'pinia'
import { ref } from 'vue'

// Importar imagens do src/assets
import homeBanner from '@/assets/banner/home.banner.svg'
import ongBanner from '@/assets/banner/ong.banner.svg'
import adoteBanner from '@/assets/banner/adote.banner.svg'
import sobreBanner from '@/assets/banner/sobre.banner.svg'
import perdidoBanner from '@/assets/banner/perdido.banner.svg'

export const useBannerComponentStore = defineStore('bannerStore', () => {
  const propriedadesBanners = ref({
    banner1: {
      background: '#F7F5E0',
      image: homeBanner,
      title: 'Encontre seu novo melhor amigo!',
      text: 'Conheça nossas ONGs e encontre seu novo companheiro hoje mesmo!',
    },
    banner2: {
      background: '#F7F5E0',
      image: ongBanner,
      title: 'Conheça nossas ONGs parceiras',
      text: 'Cada ONG ajuda a gerar histórias de amor',
      buttonBooleanOng: true,
      buttonText: 'Você é uma ONG? Cadastre-se.',
      buttonLink: '/user',
    },
    banner3: {
      background: '#F7F5E0',
      image: adoteBanner,
      title: 'Adote o novo membro da sua família.',
      text: 'Conheça os pets que estão à espera de um lar',
      buttonBooleanAdote: true,
      buttonText: 'Cadastrar pet para Adoção.',
      buttonLink: '/adote/register',
    },
    bannerAbout: {
      background: '#F7F5E0',
      image: sobreBanner,
      title: 'Sobre Nós',
      text: 'Conheça nossa equipe e objetivos do site',
    },
    bannerSearch: {
      background: '#F7F5E0',
      image: perdidoBanner,
      title: 'Perdeu seu melhor amigo?',
      text: 'Divulgue-o aqui para encontrá-lo',
      buttonBooleanPerdido: true,
      buttonText: 'Cadastrar pet perdido.',
      buttonLink: '/procura-se/register',
    },
  })

  return { propriedadesBanners }
})
