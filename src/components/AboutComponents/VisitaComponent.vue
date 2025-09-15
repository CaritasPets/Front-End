<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  "/public/img_cachorros.svg",
  "/public/img_gato_e_cachorro.svg",
  "/public/img_gatoDormindo.svg",
  "/public/img_gatos.svg"
];

const borderColors = [
  "#FF7700",
  "#587911",
  "#FDA202",
  "#03497B"
];

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 2) % images.length;
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 2 + images.length) % images.length;
};

const startAutoplay = () => {
  stopAutoplay();
  intervalId = setInterval(nextSlide, 3000);
};

const stopAutoplay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <h2 class="text-center text-5xl text-[#4c260a] font-[Handlee] md:text-6xl">Visita ao abrigo</h2>
  <p class="text-xl my-10 mt-10 text-justify font-[Sen] lg:text-2xl lg:mt-20">
    Quando tivemos a ideia, decidimos visitar um abrigo de animais da nossa região. No local, conhecemos histórias
    marcantes que mudaram o nosso jeito de pensar.
  </p>
  <p class="text-xl my-10 mt-10 text-justify font-[Sen] lg:text-2xl lg:mt-20">
    Brincamos com os pets, oferecemos carinho e recebemos em troca olhares cheios de gratidão. Foi uma experiência
    transformadora que nos motivou ainda mais a agir por aqueles que não têm voz, mas têm muito a dizer.
  </p>

  <div class="relative w-[300px] max-w-md h-[200px] mx-auto overflow-hidden rounded-2xl shadow-lg mb-20 sm:w-[630px] sm:h-[350px] sm:max-w-2xl md:w-[800px] md:h-[500px] md:max-w-3xl lg:w-[1100px] lg:h-[500px] lg:max-w-4xl"
    @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="flex transition-transform duration-500" :style="{
      transform: `translateX(-${(currentIndex / 2) * 100}%)`
    }">
      <div v-for="(img, index) in images" :key="index" class="w-1/2 flex-shrink-0 justify-center md:flex ">
        <img :src="img" class="h-[200px] w-[200px] object-cover border-8 rounded-xl shadow-md sm:h-[350px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[500px] lg:w-[500px] "
          :style="{ borderColor: borderColors[index % borderColors.length] }" />
      </div>
    </div>

    <button @click="stopAutoplay(); prevSlide(); startAutoplay()"
      class="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70">
      ‹
    </button>

    <button @click="stopAutoplay(); nextSlide(); startAutoplay()"
      class="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70">
      ›
    </button>
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
      <span v-for="(img, index) in Math.ceil(images.length / 2)" :key="'dot-' + index" @click="currentIndex = index * 2"
        class="w-3 h-3 rounded-full cursor-pointer" :style="{
          backgroundColor:
            currentIndex / 2 === index ? '#1E0B00' : '#9CA3AF'
        }"></span>
    </div>
  </div>
  <p class="text-xl my-10 mb-20 mt-10 text-justify font-[Sen] lg:text-2xl lg:mt-20">
    Durante nossa visita ao abrigo de animais, tivemos a oportunidade de conhecer diversos pets adoráveis. Registramos
    alguns momentos especiais com eles cada um com sua própria história e personalidade única. Foi uma experiência
    emocionante e cheia de carinho, reforçando a importância da adoção responsável e do amor pelos animais.
  </p>
</template>