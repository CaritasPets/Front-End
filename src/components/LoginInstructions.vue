<script setup></script>
<template>
  <section class="flex flex-col mt-10 gap-10 md:gap-20 max-w-lg px-4 sm:px-0">
    <div class="flex flex-col text-center md:text-left gap-y-5 text-[#1E0B00]">
      <h2 class="text-4xl sm:text-6xl mb-5 font-[Handlee]">Login</h2>
      <p class="text-2xl sm:text-3xl font-[Sen]">Preencha as informações de login:</p>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-xl sm:text-xl text-[#1E0B00] font-[Sen]">Não possui uma conta?</p>
      <RouterLink to="/user">
        <button class="text-lg font-[Sen] sm:text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]">
          Cadastrar-se
        </button>
      </RouterLink>
    </div>
  </section>
</template>
