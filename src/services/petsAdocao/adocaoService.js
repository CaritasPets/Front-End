import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { usePetStore } from "../../stores/PetStore";

export const useAdocaoService = defineStore('adocaoService', () => {

    const petStore = usePetStore()
    const urlStore = useRequestUrlStore()

    const getAdocao = async () => {
        try{
            const response = await api.get(urlStore.adocao);
            if(response.data){
                console.log('Pets puxados com sucesso!')
                petStore.propriedades = response.data
            }
        } catch(err) {
            console.log(err)
        }
    }
    const postAdocao = async (petData) => {
        try{
            const response = await api.post(urlStore.adocao, petData);
            if(response.data){
                console.log('Pet criado com sucesso!')
                getAdocao()
            }
        } catch(err) {
            console.log(err)
        }
    }
    const patchAdocao = async (id, petNewData) => {
        try{
            const response = await api.patch((urlStore.adocao + String(id)), petNewData);
            if(response.data) {
                console.log('Pet alterado com suceso!')
                getAdocao()
            }
        } catch(err) {
            console.log(err);
        }
    }
    const deleteAdocao = async (id) => {
        try{
            const response = await api.delete(urlStore.adocao + String(id));
            if(response.data){
                console.log('Pet deletado com sucesso!')
                getAdocao()
            }
        } catch(err) {
            console.log(err);
        }
    }
    return{
        getAdocao,
        postAdocao,
        patchAdocao,
        deleteAdocao,
    }
})

