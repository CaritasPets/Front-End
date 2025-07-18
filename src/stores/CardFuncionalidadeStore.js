import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardFuncionalidadeStore = defineStore('card-store', () => {
    const propriedades = ref({
        card1: {
            text: 'De um lar para um pet',
            icon: 'mdi mdi-home-heart',
            background: '#03497B',
            iconBackground: '#69A2A8',
            link: '/'
        },
        card2: {
            text: 'Divulgue pets para adção',
            icon: 'mdi mdi-bullhorn',
            background: '#587911',
            iconBackground: '#104C00',
            link: '/'
        },
        card3: {
            text: 'Ache seu pet perdido',
            icon: 'mdi mdi-magnify',
            background: '#FDA202',
            iconBackground: '#EE7104',
            link: '/'
        }
    })
    return {
        propriedades,
    }
})