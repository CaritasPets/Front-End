<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
function validateFooter(url) {
  if(url.slice(0, 5) == '/user'){
    return false
  } else{
    return true
  }
}
</script>

<template>
  <header>
    <HeaderComponent/>
  </header>
  <RouterView />
  <footer
    v-if="validateFooter(route.path)"
    class="bg-[url('/footer.svg')] bg-no-repeat bg-bottom bg-[length:100%]
           py-10 sm:py-16 md:py-96"
  >
    <FooterComponent />
  </footer>
</template>



