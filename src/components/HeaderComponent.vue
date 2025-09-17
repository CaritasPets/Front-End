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
  if (route.path === "/ongs" || route.path.startsWith("/ongs/profile/")) return "#03497B";
  if (route.path === "/perfil") return "#03497B";
  if(route.path === "/adote/register") return "#FFF493";
  if (route.path === "/user/sign-up") return "#FFF493";
  if (route.path === "/user/login/") return "#FFF493";
  if (route.path === "/user/profile" || route.path === "/user/login" || route.path === "/user/sign-up") return "#03497B";
  if (route.path === "/adote" || route.path.startsWith("/adote/pet/")) return "#FF7700";
  if (route.path === "/procura-se" || route.path.startsWith("/procura-se/petperdido/")) return "#FDA202";
  if (route.path === "/sobre") return "#104C00";
  if (route.path === "/ongs/sign-up") return "#FFF493";

  return "#104C00";
});


const linkBaseColor = computed(() => {
  if (route.path === "/adote" || route.path.startsWith("/adote/pet/") || route.path.slice(0,5) == "/user" || route.path === "/procura-se" || route.path.startsWith("/procura-se/petperdido/") || route.path === "/user/sign-up" || route.path === "/ongs/sign-up" || route.path === "/user/profile" || route.path === "/adote/register") {
  return "#1E0B00";
  }
  return "#DFB468";
});


const menuIconColor = computed(() => {
  if (route.path === "/adote" || route.path.startsWith("/adote/pet/") || route.path === "/procura-se" || route.path.startsWith("/procura-se/petperdido/") || route.path === "/user/sign-up" || route.path === "/user/profile" ||  route.path === "/adote/register") {
    return "#1E0B00";
  }
  return "#DFB468";
});


</script>


<template>
  <div
    class="w-full flex justify-between items-center px-5 py-3 fixed z-100"
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
              'bg-[#1E0B00] text-[#DFB468]': route.path === item.link, // ativo
              'hover:bg-[#DFB468] hover:text-[#1E0B00]': route.path !== item.link,
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
                'hover:bg-[#1E0B00] hover:text-[#DFB468]': route.path !== item.link,
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
