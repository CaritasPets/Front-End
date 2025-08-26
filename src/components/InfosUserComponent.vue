<script setup>
const props = defineProps(['user'])
</script>
<template>
  <section class="text-white text-center">
    <div class="bg-[#03497B] pt-30">
      <h2 class="text-6xl font-bold mb-6 z-10 relative">{{ props.user.nome }}</h2>

      <div class="flex flex-col md:flex-row items-center justify-center gap-8 z-10 relative">
        <img :src="props.user.foto"
            alt="Foto do usuário"
            class="w-50 h-50 rounded-xl object-cover bg-gray-300" />

        <ul class="text-left space-y-2">
          <li class="text-2xl"><strong>Username:</strong> {{ props.user.username }}</li>
          <li class="text-2xl"><strong>Telefone:</strong> {{ props.user.telefone }}</li>
          <li class="text-2xl"><strong>CPF:</strong> {{ props.user.cpf }}</li>
          <li class="text-2xl"><strong>Data de Nascimento:</strong> {{ props.user.data_nascimento }}</li>
          <li class="text-2xl"><strong>Email:</strong> {{ props.user.email }}</li>
        </ul>
      </div>

      <button class="mt-15 px-6 py-2 z-10 relative bg-yellow-500 text-black font-semibold rounded-lg border-2 border-transparent transition-all duration-500 cursor-pointer hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]">
        Alterar informações
      </button>
    </div>
    <img src="/blue_waves.svg" alt="banner_waves" class="w-full transform-[translateY(-20%)] z-0 relative">
  </section>
</template>

