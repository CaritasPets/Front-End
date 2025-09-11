import api from "../../plugins/api";
import { ref } from "vue";
import { defineStore } from "pinia";
import { useOngStore } from "../../stores/OngsStore";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
const ongStore = useOngStore();
const urlStore = useRequestUrlStore()

export const useOngService = defineStore('ongService', () => {
    const inError = ref(false)
    const getOngs = async () => {
        try{
            const response = await api.get(urlStore.organizacoes)
            ongStore.propriedades = response.data
            console.log('Ongs puxadas com sucesso!')
            inError.value = false
        } catch(err){
            console.log(err)
            inError.value = true          
        }
    }
    
    const postOng = async (objOng) => {
        try{
            const response = await api.post(urlStore.organizacoes, objOng)
            if(response.data){
                alert(`ONG (${response.data.nome}) criacda com sucesso!`)
                window.location.href = '/ongs'
            }
        } catch(err) {
            console.log(err)
            alert('Erro ao criar ONG!')
        }
    }
    return {
        getOngs,
        postOng,
        inError
    }
})