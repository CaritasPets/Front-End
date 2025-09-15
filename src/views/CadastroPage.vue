<script setup>
import FormCadastro from '../components/FormCadastro.vue'
import LoadingComponent from '../components/LoadingComponent.vue'
import { useAuthService } from '../services/Auth'
const authService = useAuthService()
</script>
<template>
  <LoadingComponent v-if="authService.loading" />
  <section class="bg-[#03497B] pt-20 px-10">
    <div class="flex items-center gap-50 text-white z-10 relative pl-15 mb-20">
      <div>
        <h2 class="text-6xl">Cadastro</h2>
        <p class="text-3xl font-light">Preencha as informações de cadastro:</p>
      </div>
      <div class="flex items-center gap-10 text-xl">
        <p>Já possuí uma conta?</p>
        <RouterLink to="/user/login/"
          class="border-2 py-2 px-6 border-[#FDA202] text-black rounded-2xl bg-[#FDA202] hover:bg-transparent hover:text-[#FDA202] transition-all duration-500"        
        >
          Fazer login
        </RouterLink>
      </div>
    </div>
    <FormCadastro class="z-10 relative" />
  </section>
  <img
    class="w-[100%] transform-[translateY(-50%)] bg-[#03497B] absolute z-0"
    src="/blue_waves.svg"
    alt="bg-image-waves"
  />
</template>
