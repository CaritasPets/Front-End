import { defineStore } from "pinia";
import axios from "axios";

export const useImageService = defineStore('imageService', () => {
    
    const uploadImage = async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        
        try {
          const response = await axios.post('http://localhost:8000/api/media/images/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          return response.data.attachment_key
        } catch (err) {
          console.error('Erro no upload da imagem:', err)
          throw err
        }
    }

    return{
        uploadImage,
    }
    
})