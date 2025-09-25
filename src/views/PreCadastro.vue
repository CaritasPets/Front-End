<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class=" flex justify-around pt-56 pb-30 px-40 bg-[#F7F5E0]">
      <div class="sm:w-1/3">
        <div class="z-10 relative">
          <h1 class="text-4xl font-[Handlee] md:text-6xl lg:text-7xl">Cadastro</h1>
          <p class="text-2xl mt-10 text-rigth text-center sm:text-left">Primeiro nos</p>
          <p class="text-2xl text-rigth text-center sm:text-left">informe se você é:</p>
        </div>
        <div class="mt-24 flex flex-col gap-4 w-[60%] z-10 relative">
          <RouterLink to="/ongs/sign-up" class="text-center font-[Sen] cursor-pointer flex z-10 bg-[#40A9F4] hover:text-[#40A9F4] hover:border-[#40A9F4] hover:bg-[#F7F5E0] border-2 border-transparent px-6 py-2 rounded-xl hover: transition-all duration-500 text-2xl w-[170%]">
            <span class=" mdi mdi-home-heart"></span>
            <p class="pl-16 font-[Sen]">ONG</p>
          </RouterLink>
          <RouterLink to="/user/sign-up" class="mt-10 text-center font-[Sen] cursor-pointer flex z-10 bg-[#FF953C] hover:bg-[#F7F5E0] hover:border-[#FF953C] hover:text-[#FF953C] border-2 border-transparent px-6 py-2 rounded-xl hover: transition-all duration-500 text-2xl w-[170%]">
            <span class="mdi mdi-account"></span>
            <p class="pl-12 font-[Sen]">Usuário</p>
          </RouterLink>
        </div>
      </div>
      <div class="z-10 relative">
        <img src="/img_gatosBrincando.svg" alt="Gatos brincando" class="z-10 ml-10 w-full" />
      </div>
  </section>
  <img
    class="w-[100%] transform-[translateY(-70%)] bg-[#F7F5E0] absolute z-0"
    src="/cream_waves.svg"
    alt="bg-image-waves" />
</template>
