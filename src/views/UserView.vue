<script setup>
import InfosUserComponent from '@/components/InfosUserComponent.vue';
import { useAuthService } from '../services/Auth';
import { ref, onMounted } from 'vue';
const authService = useAuthService();
const profile = ref({});

onMounted(async () => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    profile.value = await authService.profile();
  } else {
    alert('Você precisa fazer login primeiro.')
    window.location.href = '/user/login'
  }
})
</script>
<template>
  <section class="bg-[#B8E0FC]">
  <InfosUserComponent
    :user="profile"
    @logout="authService.logOut"
  />
  </section>
</template>
