<script setup>
import { ref } from 'vue'

const hoveredIndex = ref(null)

const navItems = [
  { label: 'Home', icon: 'mdi mdi-home', link: '#' },
  { label: 'Ongs', icon: 'mdi mdi-hand-heart', link: '#' },
  { label: 'Adote', icon: 'mdi mdi-heart', link: '#' },
  { label: 'Procura-se', icon: 'mdi mdi-magnify', link: '#' },
  { label: 'Sobre', icon: 'mdi mdi-information', link: '#' },
]
</script>
<template>
  <img src="/home/johann.borges/Programação/Front-End/public/logo.png" alt="Logo">
  <nav>
    <ul>
       <li v-for="(item, index) in navItems" :key="index">
        <a :href="item.link">
          <span :class="item.icon" v-if="hoveredIndex == index"></span>
          <h2 @mouseover="hoveredIndex = index" @mouseout="hoveredIndex = null">
            {{ item.label }}
          </h2>
        </a>
       </li>
    </ul>
  </nav>
  <a href="">
    <span class="mdi mdi-account-circle-outline"></span>
  </a>
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
  font-size: 1.8rem;
  transition: 0.5s;
  display: flex;
  align-items: center;

  span{
    font-size: 3.5rem;
  }
}

span {
  color: #1E0B00;
  font-size: 4.5rem;
}
</style>
