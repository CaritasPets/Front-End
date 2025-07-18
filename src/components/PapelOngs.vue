<script setup>
import { onMounted } from 'vue'
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const elementClass = entry.target.classList
    if (entry.isIntersecting) {
      if (elementClass == 'hidden') {
        entry.target.classList.add('show')
      }
    }
  })
})
onMounted(() => {
  const elements = document.querySelectorAll('.hidden')
  elements.forEach((element) => myObserver.observe(element))
})
</script>
<template>
  <h2>O papel das ONGs</h2>
  <p class="hidden">
    As ONGs desempenham um papel crucial na defesa dos direitos dos animais, atuando no resgate,
    acolhimento, tratamento e adoção responsável de animais abandonados ou vítimas de maus-tratos
  </p>
  <img class="hidden" src="/imagem_ongs.png" alt="" />
  <p class="hidden">
    Voluntários dedicam seu tempo para transformar a angústia em acolhimento. Com cuidado, carinho e compromisso, eles reconquistam a confiança dos animais, oferecendo conforto, amor, saúde e a chance de um novo lar. Após esse processo de recuperação, as ONGs disponibilizam os pets para adoção, esperando que toquem os corações de quem busca um verdadeiro  companheiro.
  </p>
</template>
<style scoped>
h2 {
  text-align: center;
  font-size: 500%;
  color: #4c260a;
  margin: 5% 0;
}
p {
  font-size: 300%;
  margin: 5% 0;
}
img {
  width: 100%;
}
.hidden {
  opacity: 0;
  transition: all 1s;
  transform: translateY(10%);
}
.show {
  opacity: 1;
  transition: all 1s;
  transform: translateY(0);
}
</style>
