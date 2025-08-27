<script setup>
const props = defineProps(['user'])
</script>

<template>
  <section class="text-white">
    <div class="bg-[#03497B] pt-30">

      <div class="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-16 z-10 relative max-w-6xl mx-auto">

        <div class="flex flex-col items-center">

          <h2 class="text-6xl font-bold mb-6">{{ props.user.nome }}</h2>


          <img :src="props.user.foto"
               alt=""
               class="w-100 h-100 rounded-[60px] object-cover bg-gray-300 shadow-lg" />
        </div>

        <ul class="text-left space-y-7">
          <li class="text-2xl"><strong>Username:</strong> {{ props.user.username }}</li>
          <li class="text-2xl"><strong>Telefone:</strong> {{ props.user.telefone }}</li>
          <li class="text-2xl"><strong>CPF:</strong> {{ props.user.cpf }}</li>
          <li class="text-2xl"><strong>Data de Nascimento:</strong> {{ props.user.data_nascimento }}</li>
          <li class="text-2xl"><strong>Email:</strong> {{ props.user.email }}</li>
        </ul>
      </div>


      <div class="flex justify-center">
        <button class="mt-12 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg border-2 border-transparent transition-all duration-500 cursor-pointer hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]">
          Alterar informações
        </button>
      </div>
    </div>

    <img src="/blue_waves.svg" alt="banner_waves" class="w-full transform translate-y-[-20%] z-0 relative">
  </section>
</template>
