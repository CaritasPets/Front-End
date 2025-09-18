import { defineStore } from "pinia";
import { ref } from "vue";

export const useOngStore = defineStore('ongStore', () => {
    const ong = ref([
        {
            id: '1',
            nome: 'Abrigo Animal',
            foto: '/ongs/img_ong2.jpg',
            telefone: '47984542516',
            email: 'brenoot0405@gmail.com',
            endereco: 'Rua das Palmeiras',
            cnpj: '11251526993',
            descricao: 'Breno Otário Rohregger'
        },
        {
            id: '2',
            nome: 'Patinhas Felizes',
            foto: '/ongs/img_ong1.jpg',
            telefone: '47999999999',
            email: 'patinhasfelizes@gmail.com',
            endereco: 'Rua dos Gatos',
            cnpj: '22222222222',
            descricao: 'ONG dedicada a gatos'
        },
        {
            id: '3',
            nome: 'Cão Amigo',
            foto: '/ongs/img_ong3.jpg',
            telefone: '47888888888',
            email: 'caoamigo@gmail.com',
            endereco: 'Rua dos Cachorros',
            cnpj: '33333333333',
            descricao: 'ONG dedicada a cachorros'
        },
        {
            id: '4',
            nome: 'Bichos do Bem',
            foto: '/ongs/img_ong4.jpg',
            telefone: '47777777777',
            email: 'bichosdobem@gmail.com',
            endereco: 'Rua dos Animais',
            cnpj: '44444444444',
            descricao: 'ONG para todos os bichos'
        },
    ]);
    
    return {
        ong,
    }
})