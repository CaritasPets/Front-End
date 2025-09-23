<script setup>
import InfosUserComponent from '@/components/InfosUserComponent.vue';
</script>
<template>
  <section class="md:pt-15">
  <InfosUserComponent
    :user="profile"
  />
  </section>
</template>
