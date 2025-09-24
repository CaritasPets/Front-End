import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardFuncionalidadeStore = defineStore('card-store', () => {
    const propriedades = ref({
        cardAdocao: {
            text: 'Dê um lar para um pet',
            icon: 'mdi mdi-home-heart',
            background: '#FFBC46',
            iconBackground: '#FDA202',
            link: '/adote'
        },
        cardOngs: {
            text: 'Conheça nossas ONGs',
            icon: 'mdi mdi-hand-heart',
            background: '#40A9F4',
            iconBackground: '#03497B',
            link: '/ongs'
        },
        cardProcuraSe: {
            text: 'Ache seu pet perdido',
            icon: 'mdi mdi-magnify',
            background: '#FF953C',
            iconBackground: '#FF7400',
            link: '/procura-se'
        }
    })
    return {
        propriedades,
    }
})