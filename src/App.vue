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

function headerBackground(url) {
  if(url == '/' || url == '/sobre') {
    return '#104C00'
  }
  if(url == '/ongs' || url == '/user/login') {
    return '#03497B'
  }
  if(url == '/adote'){
    return '#FF7700'
  }
  if(url == '/procura-se'){
    return '#FDA202'
  }
}

function headerColor(url) {
  if(url == '/' || url == '/ongs' || url == '/user/login') {
    return '#DFB468'
  } else{
    return '#1E0B00'
  }
}

function activeColor(url) {
  if(url == '/' || url == '/ongs' || url == '/user/login' ) {
    return '#1E0B00'
  } else {
    return '#DFB468'
  }
}

</script>

<template>
  <header class="fixed z-50">
    <HeaderComponent
    :background="headerBackground(route.path)"
    :header-color="headerColor(route.path)"
    :active-color="activeColor(route.path)"
    />
  </header>
  <main>
    <RouterView />
  </main>
  <footer v-if="validateFooter(route.path)">
    <FooterComponent/>
  </footer>
</template>
