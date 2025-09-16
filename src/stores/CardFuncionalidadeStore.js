import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardFuncionalidadeStore = defineStore('card-store', () => {
    const propriedades = ref({
        cardAdocao: {
            text: 'Dê um lar para um pet',
            icon: 'mdi mdi-home-heart',
            background: '#03497B',
            iconBackground: '#69A2A8',
            link: '/adote'
        },
        cardOngs: {
            text: 'Conheça nossas ONGs',
            icon: 'mdi mdi-hand-heart',
            background: '#587911',
            iconBackground: '#104C00',
            link: '/ongs'
        },
        cardProcuraSe: {
            text: 'Ache seu pet perdido',
            icon: 'mdi mdi-magnify',
            background: '#FDA202',
            iconBackground: '#EE7104',
            link: '/procura-se'
        }
    })
    return {
        propriedades,
    }
})