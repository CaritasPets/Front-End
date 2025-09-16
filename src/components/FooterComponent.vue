<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
function validateFooter(url) {
  if(url.slice(0, 5) == '/user'){
    return false
  } else if(url == '/ongs/sign-up'){
    return false
  } else{
    return true
  }
}

</script>

<template>
  <div

    v-if="validateFooter(route.path)"
    class="bg-[url('/footer.svg')] bg-no-repeat bg-bottom bg-[length:100%] pt-15 pb-20
       lg:p-93">
 <p class="text-center text-sm md:text-base font-[Sen]">
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
