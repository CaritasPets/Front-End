import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecolhivelStore = defineStore('recolhiveis', () => {
    const propriedades = ref({
        recolhivel1: {
            icon: 'mdi mdi-bullhorn',
            title: 'Como faço para divulgar um pet para adoção?',
            background: 'bg-[#0D7A9E]',
            text: 'Basta acessar a Página de Adoção, preencher com os dados do pet e clicar em Criar Anúncio. (É necessário ao menos adicionar a foto, informações do pet, informações de contato e endereço para que o anúncio seja criado com sucesso!)',
        },
        recolhivel2: {
            icon: 'mdi mdi-home-heart',
            title: 'Como faço para adotar um pet?',
            background: 'bg-[#FF7700]',
            text: 'Basta acessar a Página de Adoção, ver os pets disponíveis e entrar em contato com o anunciante do pet que você deseja adotar pelas infromações de contato presentes no anúncio.',
        },
        recolhivel3: {
            icon: 'mdi mdi-hand-heart',
            title: 'Como faço para me tornar voluntário?',
            background: 'bg-[#587911]',
            text: 'Basta acessar a Página de ONGs, ver as nossas organizações parceiras e entrar em contato com aquela que desejar ajudar. Você pode ajudar com doações, lar temporário ou trabalho voluntário.',
        },
        recolhivel4: {
            icon: 'mdi mdi-magnify',
            title: 'Perdi um pet, como faço para encontrá-lo?',
            background: 'bg-[#fda202]',
            text: 'Basta acessar a Página de “Procura-se”, preencher com os dados do seu pet e clicar em Criar Anúncio. (É necessário ao menos adicionar a foto, informações do pet, informações de contato e endereço para que o anúncio seja criado com sucesso!)',
        }
    })

    return {
        propriedades
    }
})