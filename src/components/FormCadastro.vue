<script setup>
import { ref } from 'vue';
const user = ref('')
const password = ref('')
const name = ref('')
const email = ref('')
const telefone = ref('')
const foto = ref(null)

function cleanForm() {
    user.value = ''
    password.value = ''
    name.value = ''
    email.value = ''
    telefone.value = ''
    foto.value = null
}
function onFileChange(event) {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    foto.value = selectedFile;
  }
}
const signUp = async () => {

}

const obj = ref({
    user: user.value,
    password: user.value,
    name: name.value,
    email: email.value,
    telefone: telefone.value,
    foto: foto.value
})
</script>
<template>
  <form @submit.prevent="signUp" class="flex flex-col items-center gap-20">
    <div class="flex justify-around gap-10 w-[100%]">
    <ul class="flex flex-col items-center">
        <li class="flex flex-col w-[100%]">
            <label class="text-2xl text-white">*Usuario</label>
            <input class="text-2xl text-[#9EAF50] py-1 px-2 my-2 border-2 rounded-xl w-120" placeholder="Usuario." type="text" v-model="user"/>
        </li>
        <li class="flex flex-col w-[100%]">
            <label class="text-2xl text-white">*Senha</label>
            <input class="text-2xl text-[#FDA202] py-1 px-2 my-2 border-2 rounded-xl w-120" placeholder="Senha." type="password" v-model="password" />
        </li>
        <li class="flex flex-col w-[100%]">
            <label class="text-2xl text-white">*Nome completo</label>
            <input class="text-2xl text-[#EE7104] py-1 px-2 my-2 border-2 rounded-xl w-120" placeholder="Nome." type="text" v-model="name" />
        </li>
    </ul>
    <ul class="flex flex-col items-center">
        <li class="flex flex-col w-[100%]">
            <label class="text-2xl text-white">*Email:</label>
            <input class="text-2xl text-[#69A2A8] py-1 px-2 my-2 border-2 rounded-xl w-120" placeholder="Email." type="email" v-model="email" />
        </li>
        <li class="flex flex-col w-[100%]">
            <label class="text-2xl text-white">*Telefone</label>
            <input class="text-2xl text-[#FF7700] py-1 px-2 my-2 border-2 rounded-xl w-120" placeholder="Telefone." type="tel" v-model="telefone" />
        </li>
        <li class="flex flex-col w-[100%]">
            <p class="text-2xl text-white">Foto de Perfil</p>
            <input id="fileInput" class="hidden" type="file" @change="onFileChange"/>
            <label for="fileInput" class="text-2xl text-[#9EAF50] border-2 py-1 px-2 my-2 rounded-xl w-120 cursor-pointer">Selecionar Arquivo</label>
            <div v-if="foto" class="text-xl text-[#9EAF50]">
                <p>Arquivo para foto selecionado:</p>
                <p>{{ foto.name }}</p>
            </div>
        </li>
    </ul>
    </div>
    <div class="flex gap-30">
        <button class=" text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]" @click="cleanForm">Limpar</button>
        <button class=" text-xl rounded-xl py-2 px-6 bg-[#FF7700] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]" type="submit">Cadastrar-se</button>
    </div>
    <ul>
        <li class="bg-amber-400 text-black" v-for="item in obj" :key="item">
            <p>
                {{ item }}
            </p>
        </li>
    </ul>
  </form>
</template>
