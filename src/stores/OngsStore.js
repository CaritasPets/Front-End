import { defineStore } from "pinia";
import { ref } from "vue";

export const useOngStore = defineStore('ongStore', () => {
    const propriedades = ref([]);
    
    return {
        propriedades,
    }
})