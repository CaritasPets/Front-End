import { defineStore } from "pinia";
import api from "../../plugins/api";
import { useRequestUrlStore } from "../../stores/RequestsUrls";
import { useOngStore } from "../../stores/OngsStore";

export const useOngService = defineStore('ongService', () => {

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

    return{
        getOngs,
    }
})
