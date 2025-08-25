<template>
  <section class=" text-white text-center p-8 rounded-xl">
    <h2 class="text-3xl font-bold mb-6">{{ user.name }}</h2>

    <div class="flex flex-col md:flex-row items-center justify-center gap-8">
      <img :src="user.photo || fallbackPhoto"
           alt="Foto do usuário"
           class="w-36 h-36 rounded-xl object-cover bg-gray-300" />

      <ul class="text-left space-y-2">
        <li><strong>Username:</strong> {{ '' }}</li>
        <li><strong>Telefone:</strong> {{ '' }}</li>
        <li><strong>CPF:</strong> {{ '' }}</li>
        <li><strong>Data de Nascimento:</strong> {{ '' }}</li>
        <li><strong>Email:</strong> {{'' }}</li>
      </ul>
    </div>

    <button class="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400">
      Alterar informações
    </button>
  </section>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      name: 'Nome do Usuário',
      photo: '',
      username: '',
      phone: '',
      cpf: '',
      birthDate: '',
      email: ''
    })
  }
})

const fallbackPhoto = 'https://via.placeholder.com/144'
const { user } = props
</script>
