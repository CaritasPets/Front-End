import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { usePetPerdidoStore } from "../../stores/PetPerdidoStore";

export const usePerdidoService = defineStore('perdidoService', () => {

    const petPerdidoStore = usePetPerdidoStore()
    const urlStore = useRequestUrlStore()

    const getPerdidos = async () => {
        try{
            const response = await api.get(urlStore.perdidos);
            if(response.data){
                console.log('Pets perdidos puxados com suceso!')
                petPerdidoStore.propriedades = response.data
            }
        } catch(err) {
            console.log(err)
        }
    }

    const postPerdidos = async (formPet) => {
        try{
            const response = await api.post(urlStore.perdidos, formPet);
            if(response.data){
                console.log('Pet perdido criado com sucesso!');
                alert('Pet perdido criado com sucesso');
                getPerdidos()
            }
        } catch(err) {
            alert(err.response.data.detail)
            console.log(err)
        }
    }

    const patchPerdidos = async (id, petNewData) => {
        try{
            const response = await api.patch((urlStore.perdidos + String(id)), petNewData);
            if(response.data) {
                console.log('Pet perdido alterado com suceso!')
                getPerdidos()
            }
        } catch(err) {
            console.log(err);
        }
    }

    const deletePerdido = async (id) => {
        try{
            const response = await api.delete(urlStore.perdidos + String(id));
            if(response.data) {
                console.log('Pet perdido deletado com sucesso!')
                getPerdidos()
            }
        } catch(err){
            console.log(err)
        }
    }
    const toggleFavoritePerdido = async (id) => {
        try{
            const response = await api.post(`favoritos/perdidos/${id}/toggle/`)
            if(response.data.isFavorito){
                    console.log('Favorito adicionado')
            } else{
                console.log('Favorito removido')                
            }
        } catch(err){
            console.log(err)
        }
    }

    const getFavoritePerdido = async () => {
        try{
            const response = await api.get('favoritos/perdidos/');
            if(response.data) {
                console.log(response.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    return{
        getPerdidos,
        postPerdidos,
        patchPerdidos,
        deletePerdido,
        toggleFavoritePerdido,
        getFavoritePerdido
    }
})