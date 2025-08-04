<script setup>
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <RouterView />
  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped>
footer {
  background: url(/footer.svg) no-repeat;
  background-size: 100%;
  padding: 22.5% 0;
}
</style>
