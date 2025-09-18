import { defineStore } from "pinia";
import axios from "axios";
import api from "../plugins/api";

export const useImageService = defineStore('imageService', () => {
    
    const uploadImage = async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        
        try {
          const response = await axios.post('https://back-end-1elh.onrender.com/api/media/images/', formData, {
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

    async function uploadFile(selectedFile) {
      const formData = new FormData()
      formData.append('file', selectedFile)
      
      try {
        const response = await api.post('media/images/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        return response.data.url // Return the URL instead of attachment_key
      } catch (error) {
        console.error('Error uploading file:', error)
        alert('Erro ao fazer upload da imagem.')
        return null
      }
    }

    return{
        uploadImage,
        uploadFile,
    }
    
})