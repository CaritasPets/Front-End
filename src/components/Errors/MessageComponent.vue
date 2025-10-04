<script setup>
    import { storeToRefs } from 'pinia';
    import { useMessageStore } from '../../stores/MessagesStore';
    
    const { notifications } = storeToRefs(useMessageStore());
</script>
<template>
    <div class="fixed top-5 right-5 flex flex-col gap-2 z-50">
    <transition-group name="slide-fade" tag="div">
      <div
        v-for="n in notifications"
        :key="n.id"
        class="rounded-xl px-4 py-3 shadow-lg text-white w-64"
        :class="{
          'bg-green-500': n.type === 'success',
          'bg-red-500': n.type === 'error',
          'bg-blue-500': n.type === 'info',
        }"
      >
        {{ n.message }}
      </div>
    </transition-group>
  </div>
</template>
<style scoped>
    .slide-fade-enter-active,
    .slide-fade-leave-active {
    transition: all 0.3s ease;
    }
    .slide-fade-enter-from {
    opacity: 0;
    transform: translateX(100%);
    }
    .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
    }
</style>