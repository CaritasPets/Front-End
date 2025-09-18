import { defineStore } from "pinia";
import api from "../../plugins/api";
import { usePetStore } from "../../stores/PetStore";
import { ref } from "vue";

export const usePetService = defineStore('petService', () => {
    const petStore = usePetStore()
    const error = ref(false)
    const getPets = async () => {
        try{
            const response = await api.get('pets/')
            if(response.data && response.data.length > 0){
                petStore.propriedades = response.data
                console.log(response.data)
                return response.data
            }
        } catch (err) {
            error.value = true
            console.log(err.response)
        }
    }

    const postPets = async (objPet) => {
        try{
            const response = await api.post('pets/', objPet);
            if(response.data){
                alert('Pet cadastrado com sucesso!');
                getPets();
            }
            window.location.href = '#/adote'
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

    return{
        error,
        getPets,
        postPets
    }

});