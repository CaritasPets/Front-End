<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";


const navItems = [

  { label: "Home", icon: "mdi mdi-home", link: "/" },
  { label: "ONGs", icon: "mdi mdi-hand-heart", link: "/ongs" },
  { label: "Adote", icon: "mdi mdi-heart", link: "/adote" },
  { label: "Procura-se", icon: "mdi mdi-magnify", link: "/procura-se" },
  { label: "Sobre", icon: "mdi mdi-information", link: "/sobre" },
  { label: "Perfil", icon: "mdi mdi-account", link: "/user/profile" },
];


const mobileMenuOpen = ref(false);
const route = useRoute();


const headerBackground = computed(() => {
  return "#F7F5E0";
});


const linkBaseColor = computed(() => {
  if (route.path === "/") {
  return "#1E0B00";
  } else
  return "#1E0B00";
});


const menuIconColor = computed(() => {
  if (route.path === "/") {
    return "#1E0B00";
  }
  return "#1E0B00";
});

const hoverClass = computed(() => {
  if (route.path.startsWith("/adote") || route.path.startsWith("/user")) {
    return {
      "hover:bg-[#FFBC46]": true,
      "hover:text-[#FFBC46]": true,
    };
  } else if (route.path.startsWith("/procura-se")) {
    return {
      "hover:bg-[#FF953C]": true,
      "hover:text-[#FF953C]": true,
    };
  } else if (route.path.startsWith("/ongs")) {
    return {
      "hover:bg-[#40A9F4]": true,
      "hover:text-[#40A9F4]": true,
    };
  } else if (route.path === "/sobre") {
    return {
      "hover:bg-[#81BD01]": true,
      "hover:text-[#81BD01]": true,
    };
  } else if (route.path === "/") {
    return {
      "hover:bg-[#81BD01]": true,
      "hover:text-[#81BD01]": true,
    };
  } else {
    return {
      "hover:bg-[#1E0B00]": true,
      "hover:text-[#DFB468]": true,
    };
  }
});

const verifyHeader = (url) => {
  if(url == '/user/login/' || url == '/user/login') return false;
  if(url == '/user/sign-up/' || url == '/user/sign-up') return false;
  if(url == '/procura-se/register' || url == '/procura-se/register') return false;
  if(url == '/ongs/sign-up/' || url == '/ongs/sign-up/') return false;
  if(url == '/adote/register' || url == '/adote/register') return false;
  return true
}

</script>


<template>
  <div
    v-if="verifyHeader(route.path)"
    class="w-full flex justify-between items-center px-5  fixed py-3 z-100"
    :style="`background: ${headerBackground}`"
  >
    <RouterLink to="/" class="w-15">
      <img src="/logo_noBackground.svg" alt="Logo" />
    </RouterLink>


    <nav class="hidden xl:block">
      <ul class="flex gap-25 mr-10">
        <li v-for="(item, index) in navItems" :key="index" class="list-none">
          <RouterLink
            :to="item.link"
            class="flex items-center text-nowrap decoration-0 transition-all duration-500 font-[Handlee] px-4 py-1 rounded-lg"
            :class="{
              'bg-[#1E0B00] text-[#DFB468]': route.path === item.link,
              ...(route.path !== item.link ? hoverClass : {}),
            }"
            :style="{
              color: route.path !== item.link ? linkBaseColor : '#DFB468'
            }"
          >
            <span :class="item.icon" class="text-xl mr-1"></span>
            <h2 class="text-xl">{{ item.label }}</h2>
          </RouterLink>
        </li>
      </ul>
    </nav>


    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      class="xl:hidden text-3xl"
      :style="{ color: menuIconColor }"
    >
      <span v-if="!mobileMenuOpen" class="mdi mdi-menu"></span>
      <span v-else class="mdi mdi-close"></span>
    </button>


    <transition name="slide-fade">
      <div
        v-if="mobileMenuOpen"
        class="absolute top-full left-0 w-full shadow-lg p-5 flex flex-col gap-5 xl:hidden z-50 transition-colors duration-500"
        :style="`background: ${headerBackground}`"
      >
        <ul>
          <li v-for="(item, index) in navItems" :key="index" class="mb-4">
            <RouterLink
              :to="item.link"
              class="flex items-center gap-2 text-xl font-[Handlee] px-4 py-2 rounded-lg"
              :class="{
                'bg-[#1E0B00] text-[#DFB468]': route.path === item.link,
                ...(route.path !== item.link ? hoverClass : {}),
              }"
              :style="{
                color: route.path !== item.link ? linkBaseColor : '#DFB468'
              }"
              @click="mobileMenuOpen = false"
            >
              <span :class="item.icon"></span>
              <h2>{{ item.label }}</h2>
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>