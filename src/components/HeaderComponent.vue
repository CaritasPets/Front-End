<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps (['background', 'headerColor', 'activeColor'])

const navItems = [
  { label: 'Home', icon: 'mdi mdi-home', link: '/' },
  { label: 'Ongs', icon: 'mdi mdi-hand-heart', link: '/ongs' },
  { label: 'Adote', icon: 'mdi mdi-heart', link: '/adote' },
  { label: 'Procura-se', icon: 'mdi mdi-magnify', link: '/' },
  { label: 'Sobre', icon: 'mdi mdi-information', link: '/' },
  { label: 'Perfil', icon: 'mdi mdi-account', link: '/' },
 
]
</script>
<template>
  <div class="flex justify-between items-center px-5 " :style="`background: ${props.background}`">
  <RouterLink to="/" class="w-15">
    <img src="/logo_noBackground.svg" alt="Logo">
  </RouterLink>
  <nav>
    <ul class="flex gap-30 mr-30">
      <li v-for="(item, index) in navItems" :key="index" class="list-none">
        <RouterLink :to="item.link" class="flex items-center text-nowrap decoration-0 transition-all duration-500" :style=" 'color:' + props.headerColor">
          <span :class="item.icon"></span>
          <h2 class="text-xl">
            {{ item.label }}
          </h2>
        </RouterLink>
      </li>
    </ul>
  </nav>
  </div>
</template>
<style scoped>
nav ul li a {
  span {
    font-size: 20px;
    transform: translateX(80%);
    opacity: 0;
    transition: all 400ms;
  }
}
nav ul li:hover a span {
  transform: translateX(-30%);
  opacity: 1;
}

nav ul li a.router-link-active {
  background-color: #1E0B00;
  padding: 0.1vw 1.8vw 0.1vw 1vw;
  border-radius: 15px;

  h2{
    color: #DFB468;
  }
  span{
    color: #DFB468;
  }
}
</style>
