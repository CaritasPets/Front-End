import api from "../../plugins/api";
import { defineStore } from "pinia";
import { ref } from "vue";
import { usePetStore } from "../../stores/PetStore";
const petStore = usePetStore()

export const usePetPerdidoService = defineStore('petPerdidoService', () => {
    const error = ref(false)

    const getPerdidos = async () => {
        try {
            const response = await api.get('perdidos/');
            petStore.propriedades
            console.log(response.data)
            return response.data
        } catch(err){
            error.value = true
            console.log(err.response)
        }
    }

    return {
        getPerdidos
    }
})