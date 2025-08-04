import { defineStore } from "pinia";
import { ref } from "vue";

export const useOngStore = defineStore('ongStore', () => {
    const propriedades = ref([
        {
            logo: '/logo.svg',
            nome: 'nome exemplo',
        },
        {
            logo: '/logo.svg',
            nome: 'nome exemplo',
        },
        {
            logo: '/logo.svg',
            nome: 'nome exemplo',
        },
        {
            logo: '/logo.svg',
            nome: 'nome exemplo',
        },
    ]);

    return {
        propriedades,
    }
})