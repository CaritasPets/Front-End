<script setup>
import { onMounted } from 'vue';
import InfosUserComponent from '@/components/InfosUserComponent.vue';
import { useAuthService } from '../services/auth/authService';
const authService = useAuthService()
onMounted(async() => {
  authService.profile()
})
</script>
<template>
  <section class="md:pt-15">
  <InfosUserComponent v-if="!authService.loading"
    :user="authService.user"
    @logout="authService.logout"
  />
  </section>
</template>
