<script setup>
import { onMounted, ref } from 'vue'

const listContainer = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const text = entry.target.querySelector('p')
          const img = entry.target.querySelector('img')
          if (img) {
            img.classList.add('show-img')
          }
          if (text) {
            text.classList.add('show-text')
          }
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  if (listContainer.value) {
    const items = listContainer.value.querySelectorAll('li')
    items.forEach((li) => {
      observer.observe(li)
    })
  }
})
</script>
<template>
  <h2>Adoção</h2>
  <ul ref="listContainer">
    <li>
      <p class="hidden-text">
        Ter um pet em casa vai muito além da companhia: o convívio com esses animais fortalece laços
        de afeto, confiança e empatia. Além disso, eles nos incentivam a sair da rotina, trazendo
        mais leveza e alegria para o dia a dia
      </p>
      <img src="/img_cachorros.svg" alt="cachorrinhos" class="hidden-img" />
    </li>
    <li>
      <img src="/img_gatos.svg" alt="gatinhos" class="hidden-img" />
      <p class="hidden-text">
        Ao adotar, você oferece um lar seguro e cheio de amor para um animal que, muitas vezes, já
        enfrentou o abandono ou maus-tratos. Com esse gesto, você transforma vidas — inclusive a sua
      </p>
    </li>
    <li>
      <p class="hidden-text">
        É importante ressaltar os impactos negativos do abandono de animais, como a saúde mental do
        pet, os riscos à sqúde pública e o custo emocional e financeiro para a sociedade como um
        todo.
      </p>
      <img src="/img_gato_e_cachorro.svg" alt="gatinhos_cachorros" class="hidden-img" />
    </li>
  </ul>
</template>
<style scoped>
h2 {
  text-align: center;
  font-size: 500%;
  color: #361300;
}
ul li {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 10% 0;
  & p {
    font-size: 300%;
    margin: 0 5%;
    transition: all 1s;
  }
}
img {
  transition: all 1s;
}
.hidden-text {
  opacity: 0;
}
.show-text {
  opacity: 1;
}
.hidden-img {
  opacity: 0;
  transform: translateY(50%);
}
.show-img {
  opacity: 1;
  transform: translateY(0);
}
</style>
