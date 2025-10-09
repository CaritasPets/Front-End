import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { usePetPerdidoStore } from "../../stores/PetPerdidoStore";
import { useMessageStore } from "../../stores/MessagesStore";
import { useRouter } from "vue-router";
import { ref } from "vue";

export const usePerdidoService = defineStore('perdidoService', () => {
    const loading = ref(false)
    const petPerdidoStore = usePetPerdidoStore()
    const urlStore = useRequestUrlStore()
    const messageStore = useMessageStore();
    const router = useRouter()

    const getPerdidos = async () => {
        try{
            loading.value = true
            const response = await api.get(urlStore.perdidos);
            if(response.data){
                console.log('Pets perdidos puxados com suceso!')
                petPerdidoStore.propriedades = response.data
            }
        } catch(err) {
            console.log(err)
        } finally{
            loading.value = false
        }
    }

    const postPerdidos = async (formPet) => {
        try{
            const response = await api.post(urlStore.perdidos, formPet);
            if(response.data){
                messageStore.addNotification({
                    type: 'success',
                    message: 'Pet registrado com sucesso!'
                });
               setTimeout(() => router.push('/procura-se'), 3500);
            }
        } catch(err) {
            messageStore.addNotification({
                type: 'error',
                message: err.response?.data?.foto[0] || 
                         err.response?.data?.nome[0] ||
                         err.response?.data?.localidade[0] ||
                         err.response?.data?.especie[0] ||
                         'Erro ao registrar pet!'
            })
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

    const profile = async (id) => {
        try{
            loading.value = true
            const response = await api.get(`${urlStore.perdidos}${id}`);
            return response.data
        } catch(err){
            console.log(err);
            messageStore.addNotification({
                type: 'error',
                message: 'Pet não encontrado'
            })
        } finally{
            loading.value = false
        }
    }
    return{
        getPerdidos,
        postPerdidos,
        patchPerdidos,
        deletePerdido,
        toggleFavoritePerdido,
        getFavoritePerdido,
        profile,
        loading
    }
})