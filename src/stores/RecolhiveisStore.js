import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecolhivelStore = defineStore('recolhiveis', () => {
    const propriedades = ref({
        recolhivelDivulgarPetPerdido: {
            icon: 'mdi mdi-bullhorn',
            title: 'Como faço para divulgar um pet perdido?',
            background: 'bg-[#0D7A9E]',
            text: 'Basta acessar a Página de Procura-se, clicar no botão ‘Cadastrar Pet Perdido’ no banner e preencher com os dados do pet. É necessário ao menos adicionar algumas informações do pet, como o nome, a espécie, a localidade e foto; e as informações do dono, sendo o nome e telefone, para cadastrar o pet.',
        },
        recolhivelAdotarPet: {
            icon: 'mdi mdi-hand-heart',
            title: 'Como faço para adotar um pet?',
            background: 'bg-[#FF7700]',
            text: 'Basta acessar a Página Adote, ver os pets disponíveis e entrar em contato com a ONG do pet que você deseja adotar. Utilize as informações de contato presentes no anúncio.',
        },
        recolhivelOng: {
            icon: 'mdi mdi-home-heart',
            title: 'Sou uma ONG, como posso me cadastrar?',
            background: 'bg-[#587911]',
            text: 'Basta acessar a Página de Perfil e clicar no botão de cadastro de ONG. Dessa forma, após preencher o cadastro você poderá cadastrar pets para adoção.',
        },
        recolhivelDonoPetPerdido: {
            icon: 'mdi mdi-magnify',
            title: 'Como descobrir o dono de um pet perdido?',
            background: 'bg-[#fda202]',
            text: 'Basta ir à Página Procura-se, ver os pets perdidos cadastrados e entrar em contato com o dono do pet perdido quando encontrar seu pet.',
        }
    })

    return {
        propriedades
    }
})