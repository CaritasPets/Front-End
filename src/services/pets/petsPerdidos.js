import api from "../../plugins/api";
import { defineStore } from "pinia";
import { ref } from "vue";
import { usePetPerdidoStore } from "../../stores/PetPerdidoStore";

export const usePetPerdidoService = defineStore('petPerdidoService', () => {
    const petPerdidoStore = usePetPerdidoStore()
    const error = ref(false)

    const getPerdidos = async () => {
        try {
            const response = await api.get('perdidos/');
            petPerdidoStore.propriedades = response.data
            console.log(response.data)
            return response.data
        } catch(err){
            error.value = true
            console.log(err.response)
        }
    }

    const postPerdidos = async (objPet) => {
        try{
            const response = await api.post('perdidos/', objPet)
            if(response.data){
                alert('Pet perdido cadastrado!');
                getPerdidos()
            }
            window.location.href = '#/procura-se'
        } catch(err) {
            if (err.response && err.response.data) {
                if (typeof err.response.data === 'string') {
                    alert(err.response.data);
                } else if (err.response.data.detail) {
                    alert(err.response.data.detail);
                } else {
                    alert('Erro de validação: ' + JSON.stringify(err.response.data));
                }
            } else {
                alert('Erro no cadastro. Verifique sua conexão.');
            }
            console.log(err)
        }
    }
    return {
        error,
        getPerdidos,
        postPerdidos
    }
})