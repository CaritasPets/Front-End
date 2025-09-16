<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
function validateFooter(url) {
  if(url == '/user/profile') return true
  if(url.startsWith('/user') || url.startsWith('/ongs/profile')) return false
  if(url == '/adote/register') return false
  if(url == '/procura-se/register') return false
  if(url == '/ongs/sign-up') return false
  return true
}

</script>

<template>
  <div
    v-if="validateFooter(route.path)"
    class="bg-[url('/footer.svg')] bg-no-repeat bg-bottom bg-[length:100%] pt-[25%] pb-20 sm:pb-20 lg:pb-80 md:pb-50 sm:pt-[60%] md:pt-[60%] lg:pt-[60%]
       ">
 <p class="text-center text-sm md:text-base font-[Sen] ">
    &copy; 2025 CaritasPets. Todos os direitos reservados.
  </p>
  <p class="text-center text-sm md:text-base font-[Sen] ">
    <span class="mdi mdi-instagram text-lg md:text-xl"></span> @caritaspets.jlle
  </p>
  <p class="text-center text-sm md:text-base font-[Sen] ">
    <span class="mdi mdi-email-outline text-lg md:text-xl"></span> caritaspets.jlle@gmail.com
  </p>
  </div>
</template>
