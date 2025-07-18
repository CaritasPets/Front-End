<script setup>
const props = defineProps(['background', 'image', 'title', 'text', 'waves'])
</script>
<template>
  <div class="banner" :style="'background:' + props.background">
    <div class="texts">
      <h1>{{ props.title }}</h1>
      <p>{{ props.text }}</p>
    </div>
    <div>
      <img :src="props.image" alt="banner">
    </div>
  </div>
  <div>
    <img class="waves" :src="props.waves" alt="waves">
  </div>
</template>
<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5%;
  padding-left: 5%;
}
.texts h1 {
  color: #fff;
  font-size: 500%;
  position: relative;
}
.texts p {
  color: #fff;
  position: relative;
  font-size: 300%;
}
img {
  z-index: 10;
  position: relative;
}
img.waves{
  width: 100%;
  transform: translateY(-20%);
  position: absolute;
  z-index: 0;
}
</style>
