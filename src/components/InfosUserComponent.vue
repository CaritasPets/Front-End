<script setup>
const props = defineProps(['user'])
</script>

<template>
  <section class="text-white">
    <div class="bg-[#03497B] pt-30">
      <div class="flex flex-col md:flex-row items-center justify-start z-10 relative max-w-5xl mx-auto">
        <div class="flex flex-col items-start relative">
          <h2 class="text-6xl font-bold mb-4 z-10 relative whitespace-nowrap" style="margin-left: -4rem;">
            {{ props?.user?.nome }}
          </h2>
          <img :src="props?.user?.foto"
              alt="Foto do usuário"
              class="w-[380px] h-[380px] rounded-[60px] object-cover bg-gray-300 shadow-lg -ml-16 mt-4" />

        </div>
        <ul class="text-left space-y-6 flex flex-col justify-center ml-4">
          <li class="text-2xl"><strong>Username:</strong> {{ props?.user?.username }}</li>
          <li class="text-2xl"><strong>Telefone:</strong> {{ props?.user?.telefone }}</li>
          <li class="text-2xl"><strong>CPF:</strong> {{ props?.user?.cpf }}</li>
          <li class="text-2xl"><strong>Data de Nascimento:</strong> {{ props?.user?.data_nascimento }}</li>
          <li class="text-2xl"><strong>Email:</strong> {{ props?.user?.email }}</li>
        </ul>
      </div>
      <p class="text-center">
      <button class="mt-15 px-6 py-2 z-10 relative bg-yellow-500 text-black font-semibold rounded-lg border-2 border-transparent transition-all duration-500 cursor-pointer text-center hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]">
        Alterar informações
      </button>
      </p>
    </div>
    <img src="/blue_waves.svg" alt="banner_waves" class="w-full transform-[translateY(-20%)] z-0 relative">
  </section>
</template>
