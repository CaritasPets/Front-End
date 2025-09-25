import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { usePetStore } from "../../stores/PetStore";
import { ref } from "vue";

export const useAdocaoService = defineStore('adocaoService', () => {
    const loading = ref(false)
    const petStore = usePetStore()
    const urlStore = useRequestUrlStore()

    const getAdocao = async () => {
        try{
            loading.value = true
            const response = await api.get(urlStore.adocao);
            if(response.data){
                console.log('Pets puxados com sucesso!')
                petStore.propriedades = response.data
            }
        } catch(err) {
            console.log(err)
        } finally{
            loading.value = false
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
            alert(err.response.data.detail)
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

    const toggleFavoriteAdocao = async (id) => {
        try{
            const response = await api.post(`favoritos/adocao/${id}/toggle/`)
            if(response.data.isFavorito){
                console.log('Favorito adicionado')
            } else{
                console.log('Favorito removido')
            }
        } catch(err){
            console.log(err)
        }
    }

    const getFavoriteAdocao = async () => {
        try{
            const response = await api.get('favoritos/adocao/');
            if(response.data) {
                console.log(response.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const profile = async(id) => {
        try{
            const response = await api.get(`${urlStore.adocao}${id}`)
            if(response.data){
                console.log(response.data)
                return response.data
            }
        } catch(err){
            console.log(err)
        }
    }
    return{
        getAdocao,
        postAdocao,
        patchAdocao,
        deleteAdocao,
        toggleFavoriteAdocao,
        getFavoriteAdocao,
        profile,
        loading
    }
})

