<script setup>
import { RouterLink } from 'vue-router'

const navItems = [
  { label: 'Home', icon: 'mdi mdi-home', link: '/' },
  { label: 'Ongs', icon: 'mdi mdi-hand-heart', link: '/ongs' },
  { label: 'Adote', icon: 'mdi mdi-heart', link: '/' },
  { label: 'Procura-se', icon: 'mdi mdi-magnify', link: '/' },
  { label: 'Sobre', icon: 'mdi mdi-information', link: '/' },
]
</script>
<template>
  <div class="flex justify-between items-center px-10 bg-[#ffdb58]">
  <RouterLink to="/" class="w-30">
    <img src="/logo.svg" alt="Logo">
  </RouterLink>
  <nav>
    <ul class="flex gap-20">
      <li v-for="(item, index) in navItems" :key="index" class="list-none">
        <RouterLink :to="item.link" class="flex items-center text-nowrap decoration-0 text-[#1E0B00]  transition-all duration-500">
          <span :class="item.icon"></span>
          <h2 class="text-2xl">
            {{ item.label }}
          </h2>
        </RouterLink>
      </li>
    </ul>
  </nav>
  <RouterLink to="">
    <span class="mdi mdi-account-circle-outline relative text-7xl"></span>
  </RouterLink>
  </div>
</template>
<style scoped>
nav ul li a {
  span {
    font-size: 40px;
    transform: translateX(50%);
    opacity: 0;
    transition: all 500ms;
  }
}
nav ul li:hover a span {
  transform: translateX(-20%);
  opacity: 1;
}
</style>
