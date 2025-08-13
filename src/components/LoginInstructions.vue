<script setup></script>
<template>
  <section class="flex flex-col gap-30">
    <div class="flex flex-col gap-y-5 text-white">
      <h2 class="text-6xl">Login</h2>
      <p class="text-3xl">Preencha as informações de login:</p>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-xl text-white">Não possui uma conta?</p>
      <RouterLink to="/">
        <button class="text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]">
          Cadastrar-se
        </button>
      </RouterLink>
    </div>
  </section>
</template>
