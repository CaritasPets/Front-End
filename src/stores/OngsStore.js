import { defineStore } from "pinia";
import { ref } from "vue";

export const useOngStore = defineStore('ongStore', () => {
    const propriedades = ref([
        {
            logo: '/logo.png',
            nome: 'nome exemplo',
        },
        {
            logo: '/logo.png',
            nome: 'nome exemplo',
        },
        {
            logo: '/logo.png',
            nome: 'nome exemplo',
        },
        {
            logo: '/logo.png',
            nome: 'nome exemplo',
        },
    ]);

    return {
        propriedades,
    }
})