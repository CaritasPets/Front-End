<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import MessageComponent from './components/Errors/MessageComponent.vue';
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <RouterView />
    <MessageComponent/>
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
