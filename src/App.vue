<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
  <header>
    <HeaderComponent/>
  </header>
  <RouterView />
  <footer>
    <FooterComponent />
</footer>
</template>
