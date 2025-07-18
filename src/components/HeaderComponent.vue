<script setup>
import { RouterLink } from 'vue-router';

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
       <li v-for="(item, index) in navItems" :key="index">
        <RouterLink :to="item.link">
          <span :class="item.icon"></span>
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
    position: absolute;
    transform: translateX(-110%);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
}

nav ul li:hover a span {
  transform: translateX(-100%);
  opacity: 1;
}

span.mdi-account-circle-outline{
  position: relative;
}
span {
  color: #1E0B00;
  font-size: 4.5rem;
}
</style>
