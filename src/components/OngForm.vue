<script computed>
import { ref } from 'vue'

const nome = ref('')
const telefone = ref('')
const email = ref('')
const cnpj = ref('')
const instagram = ref('')
const facebook = ref('')
const endereco = ref('')
const password = ref('')
const foto = ref(null)

function onFileChange(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {
    foto.value = selectedFile
  }
}
</script>
<template>
  <form action="">
    <div>
      <div class="">
        <ul>
          <li>
            <label class="">*Nome:</label>
            <input
              class=""
              placeholder="Nome."
              v-model="nome"
              type="text"
              required
            />
          </li>
          <li>
            <label class="">*Telefone:</label>
            <input
              class=""
              placeholder="Telefone."
              v-model="telefone"
              type="text"
              required
            />
          </li>
          <li>
            <label class="">*Email:</label>
            <input
              class=""
              placeholder="Email."
              v-model="email"
              type="email"
              required
            />
          </li>
          <li>
            <label class="">CNPJ:</label>
            <input
              class=""
              placeholder="CNPJ (se possui)."
              v-model="cnpj"
              type="text"
            />
          </li>
          <li>
            <label class="">Instagram:</label>
            <input
              class=""
              placeholder="Instagram (se possui)."
              v-model="instagram"
              type="text"
            />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <label class="">Facebook:</label>
            <input
              class=""
              placeholder="Facebook (se possui)."
              v-model="facebook"
              type="text"
            />
          </li>
          <li>
            <label class="">*Senha:</label>
            <input
              class=""
              placeholder="........"
              v-model="password"
              type="password"
              required
            />
          </li>
          <li>
            <label class="">Endereço:</label>
            <input
              class=""
              placeholder="Endereço da ONG (se possui)."
              v-model="endereco"
              type="text"
            />
          </li>
          <li>
            <p class="text-2xl text-white">Foto de Perfil</p>
            <input id="fileInput" class="hidden" type="file" @change="onFileChange" />
            <label
            for="fileInput"
            class="text-2xl text-[#9EAF50] border-2 py-1 px-2 my-2 rounded-xl w-120 cursor-pointer"
            >Selecionar Arquivo</label>
            <div v-if="foto" class="text-xl text-[#9EAF50]">
              <p>Arquivo para foto selecionado:</p>
              <p>{{ foto.name }}</p>
            </div>
          </li>
          <li>
            <label class="">Descrição:</label>
            <input
              class=""
              placeholder="Descrição."
              v-model="username"
              type="text"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="flex gap-30">
      <button
        class="text-xl rounded-xl py-2 px-6 bg-[#FDA202] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FDA202] hover:text-[#FDA202]"
        type="reset"
      >
        Limpar
      </button>
      <button
        class="text-xl rounded-xl py-2 px-6 bg-[#FF7700] cursor-pointer border-2 border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#FF7700] hover:text-[#FF7700]"
        type="submit"
      >
        Cadastrar ONG
      </button>
    </div>
  </form>
</template>
