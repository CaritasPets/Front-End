<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['ong']);
const router = useRouter()

function goToProfile() {
    router.push({ name: 'ong-profile', params: { id: props.ong.id } })
}
</script>
<template>
    <div
        class="bg-[#EEEBD1] flex flex-col overflow-hidden rounded-3xl items-center cursor-pointer mb-5 mx-2 w-[160px] h-[220px] transition-all pb-6 ease-out  hover:shadow-xl sm:mx-6 sm:mb-14 sm:w-[200px]  sm:h-[230px] md:w-[220px] md:h-[260px] lg:w-[210px] lg:h-[285px]" @click="goToProfile">
        <img class="w-[215px] h-[215px] object-cover" :src="props?.ong?.user.foto" :alt="`${props.ong.username}-logo`" >
        <div class="flex">
            <p
                class="my-1 text-[1rem]  text-black text-left truncate overflow-hidden w-25 sm:text-[1.3rem] md:w-40 font-[Sen] flex-wrap">
                {{ props.ong.user.username }}</p>
            <span class="mdi mdi-heart-outline text-black text-2xl mt-8"></span>
        </div>
    </div>
</template>
