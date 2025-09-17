<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="flex justify-around pt-56 pb-30 px-40 bg-[#FFF493]">
      <div>
        <div class="z-10 relative">
          <h1 class="text-7xl">Cadastro</h1>
          <p class="text-4xl mt-8">Primeiro nos</p>
          <p class="text-4xl">Informe se você é:</p>
        </div>
        <div class="mt-24 flex flex-col gap-4 w-[60%] z-10 relative">
          <RouterLink to="/ongs/sign-up" class="flex z-10 bg-[#0D7A9E] px-6 py-2 rounded-xl hover: transition text-3xl mb-18 w-[170%]">
            <span class=" mdi mdi-home-heart"></span>
            <p class="pl-16">ONG</p>
          </RouterLink>
          <RouterLink to="/user/sign-up" class="flex z-10 bg-[#FF7700] px-6 py-2 rounded-xl hover: transition text-3xl w-[170%]">
            <span class="mdi mdi-account"></span>
            <p class="pl-12">Usuário</p>
          </RouterLink>
        </div>
      </div>
      <div class="z-10 relative">
        <img src="/img_gatosBrincando.svg" alt="Gatos brincando" class="z-10 w-[100%]" />
      </div>
  </section>
  <img
    class="w-[100%] transform-[translateY(-70%)] bg-[#FFF493] absolute z-0"
    src="/cream_waves.svg"
    alt="bg-image-waves" />
</template>
