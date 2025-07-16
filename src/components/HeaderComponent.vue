<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const hoveredIndex = ref(null)

const navItems = [
  { label: 'Home', icon: 'mdi mdi-home', link: '/' },
  { label: 'Ongs', icon: 'mdi mdi-hand-heart', link: '/' },
  { label: 'Adote', icon: 'mdi mdi-heart', link: '/' },
  { label: 'Procura-se', icon: 'mdi mdi-magnify', link: '/' },
  { label: 'Sobre', icon: 'mdi mdi-information', link: '/' },
]
</script>
<template>
  <RouterLink to="/">
    <img src="/logo.png" alt="Logo">
  </RouterLink>
  <nav>
    <ul>
       <li v-for="(item, index) in navItems" :key="index" @mouseover="hoveredIndex = index" @mouseout="hoveredIndex = null">
        <RouterLink :to="item.link">
          <span :class="item.icon" v-if="hoveredIndex == index"></span>
          <h2>
            {{ item.label }}
          </h2>
        </RouterLink>
       </li>
    </ul>
  </nav>
  <RouterLink to="">
    <span class="mdi mdi-account-circle-outline"></span>
  </RouterLink>
</template>
<style scoped>
nav ul {
  display: flex;
  transform: translateX(4vw);
}

nav ul li {
  list-style: none;
  margin: 0 4vw;
}

nav ul li a {
  text-decoration: none;
  color: #1E0B00;
  font-size: 1.5rem;
  transition: 0.5s;
  display: flex;
  align-items: center;

  span{
    font-size: 3rem;
  }
}
span.mdi-account-circle-outline{
  position: relative;
}
span {
  color: #1E0B00;
  font-size: 4.5rem;
  animation: spanAnimation ease-in 0.5s;
  position: absolute;
  transform: translateX(-100%);
}
@keyframes spanAnimation{
  0%{
    transform: translateX(0);
    opacity: 0;
  } 100% {
    transform: translateX(-100%);
    opacity: 1;
  }
}
</style>
