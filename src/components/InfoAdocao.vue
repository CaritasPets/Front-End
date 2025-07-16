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
        A adoção é muito importante e blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
        blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
        blá e mais um blá
      </p>
      <img src="/img_cachorros.png" alt="cachorrinhos" class="hidden-img" />
    </li>
    <li>
      <img src="/img_gatos.png" alt="gatinhos" class="hidden-img" />
      <p class="hidden-text">
        A adoção é muito importante e blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
        blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
        blá e mais um blá
      </p>
    </li>
    <li>
      <p class="hidden-text">
        A adoção é muito importante e blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
        blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá blá
        blá e mais um blá
      </p>
      <img src="/img_gato_e_cachorro.png" alt="gatinhos_cachorros" class="hidden-img" />
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
