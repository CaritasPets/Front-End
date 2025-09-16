<script setup>
const props = defineProps(['user'])
defineEmits(['logout'])
</script>

<template>
  <section class="text-white ">
    <div class="bg-[#03497B] pt-20 sm:pt-20 lg:pt-40 px-6 sm:px-12 lg:px-40 mx-auto max-w-10xl flex flex-col items-center text-cente">
      <div class="flex flex-col">
        <h2 class="text-3xl sm:text-4xl lg:text-6xl text-center sm:text-left font-bold mb-4 z-10 relative whitespace-nowrap font-[Handlee]">
          {{ props?.user?.nome }}
        </h2>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start">
          <img
            :src="props?.user?.foto_perfil?.url"
            alt="Foto do usuário"
            class="w-40 h-40 sm:w-52 sm:h-52 lg:h-60 lg:w-60 rounded-full object-cover"
          />
          <ul class="text-center lg:text-left space-y-6 flex flex-col justify-center font-[Sen]">
            <li class="text-lg text-center sm:text-left sm:text-2xl lg:text-3xl"><strong>Username:</strong> {{ props?.user?.username }}</li>
            <li class="text-lg text-center sm:text-left sm:text-2xl lg:text-3xl"><strong>Telefone:</strong> {{ props?.user?.telefone }}</li>
            <li class="text-lg text-center sm:text-left sm:text-2xl lg:text-3xl"><strong>CPF:</strong> {{ props?.user?.cpf }}</li>
            <li class="text-lg text-center sm:text-left sm:text-2xl lg:text-3xl">
              <strong>Data de Nascimento:</strong> {{ props?.user?.data_nascimento }}
            </li>
            <li class="text-lg text-center sm:text-left sm:text-2xl lg:text-3xl"><strong>Email:</strong> {{ props?.user?.email }}</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col pt-10 sm:flex-row sm:w-[50%] justify-center gap-6 sm:gap-10 mt-10">
        <button
          class="mt-10 px-6 py-2 z-10 relative bg-yellow-500 text-black font-semibold rounded-lg border-2 border-transparent transition-all duration-500 cursor-pointer text-center hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]"
        >
          Alterar informações
        </button>
        <button @click="$emit('logout')"
          class="mt-10 px-6 py-2 z-10 relative bg-[#FF7700] text-black font-semibold rounded-lg border-2 border-transparent transition-all duration-500 cursor-pointer text-center hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]"
        >
          Sair
        </button>
      </div>
    </div>
    <img
      src="/blue_waves.svg"
      alt="banner_waves"
      class="w-full transform-[translateY(-20%)] z-0 relative"
    />
  </section>
</template>
