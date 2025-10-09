import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { useOngStore } from "../../stores/OngsStore";
import { useMessageStore } from "../../stores/MessagesStore";

export const useOngService = defineStore('ongService', () => {

    const loading = ref(false)
    const messageStore = useMessageStore();
    const urlStore = useRequestUrlStore()
    const ongStore = useOngStore()

    const getOngs = async () => {
        try{
            const response = await api.get(urlStore.organizationList);
            if(response.data){
                console.log('Ongs puxadads com sucesso!')
                ongStore.ong = response.data
                console.log(response.data)
            }
        } catch(err) {
            console.log(err)
        }
    }
    const profile = async (id) => {
        try{
            loading.value = true
            const response = await api.get(`${urlStore.organizationList}${id}`);
            return response.data
        } catch(err){
            console.log(err)
            messageStore.addNotification({
                type: 'error',
                message: 'ONG não encontrada'
            })
        } finally {
            loading.value = false
        }
    }
    return{
        getOngs,
        profile,
        loading
    }
})
