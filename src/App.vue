<script setup>
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <RouterView />
  <footer class="bg-[url(/footer.svg)] bg-no-repeat bg-size-[100%] py-96 ">
    <FooterComponent />
  </footer>
</template>
