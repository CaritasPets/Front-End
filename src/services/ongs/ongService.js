import api from "../api";
import { defineStore } from "pinia";
import { useOngStore } from "../../stores/OngsStore";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
const ongStore = useOngStore();
const urlStore = useRequestUrlStore()

export const useOngService = defineStore('ongService', () => {
    const getOngs = async () => {
        try{
            const response = await api.get(urlStore.organizacoes)
            ongStore.propriedades = response.data
            console.log('Ongs puxadas com sucesso!')
        } catch(err){
            console.log(err)
            window.location.href = '/user/login'           
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
        postOng
    }
})