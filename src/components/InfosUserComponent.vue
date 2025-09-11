<script setup>
const props = defineProps(['user'])
</script>

<template>
  <section class="text-white">
    <div class="bg-[#03497B] pt-30 px-40">
      <div class="flex flex-col">
        <h2 class="text-6xl font-bold mb-4 z-10 relative whitespace-nowrap font-[Handlee]">
          {{ props?.user?.nome }}
        </h2>
        <div class="flex gap-10 pt-10">
          <img
            :src="props?.user?.foto"
            alt="Foto do usuário"
            class="w-96 rounded-[115px]"
          />
          <ul class="text-left space-y-6 flex flex-col justify-center ml-4 font-[Sen]">
            <li class="text-3xl"><strong>Username:</strong> {{ props?.user?.username }}</li>
            <li class="text-3xl"><strong>Telefone:</strong> {{ props?.user?.telefone }}</li>
            <li class="text-3xl"><strong>CPF:</strong> {{ props?.user?.cpf }}</li>
            <li class="text-3xl">
              <strong>Data de Nascimento:</strong> {{ props?.user?.data_nascimento }}
            </li>
            <li class="text-3xl"><strong>Email:</strong> {{ props?.user?.email }}</li>
          </ul>
        </div>
      </div>
      <p class="text-center">
        <button
          class="mt-15 px-6 py-2 z-10 relative bg-yellow-500 text-black font-semibold rounded-lg border-2 border-transparent transition-all duration-500 cursor-pointer text-center hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]"
        >
          Alterar informações
        </button>
      </p>
    </div>
    <img
      src="/blue_waves.svg"
      alt="banner_waves"
      class="w-full transform-[translateY(-20%)] z-0 relative"
    />
  </section>
</template>
