<script setup>
import { ref } from 'vue'

const props = defineProps(['icon', 'text', 'background', 'title'])
const open = ref(false)
const classOpen = ref('close');
function toOpen() {
    if(classOpen.value == 'close'){
        classOpen.value = 'open'
    } else{
        classOpen.value = 'close'
    }
}
</script>

<template>
  <div class="recolhivel" :style="'background:' + props.background">
    <div class="topo" @click="toOpen(), open = !open">
      <span :class="props.icon"></span>
      <h3>{{ props.title }}</h3>
      <span class="mdi mdi-chevron-down" v-if="open == false"></span>
      <span class="mdi mdi-chevron-up" v-else></span>
    </div>
    <div class="text" :class="classOpen">
        <p>{{ props.text }}</p>
    </div>
  </div>
</template>

<style scoped>
div.recolhivel {
  width: 100%;
  border-radius: 80px;
  padding: 0 5%;
  margin: 4% 0;
  color: #fff;
  transition: all 1s;

  div.topo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 1s;

    h3 {
      margin: 0 2%;
      font-size: 300%;
    }
    span {
      font-size: 500%;
    }
  }
  div.open{
    border-top: solid #fff 1px;
    padding: 4% 0;
    transition: all 1s;
    
    p{
        font-size: 200%;
    }
  }
  div.close{
    opacity: 0;
    position: absolute;
  }
}
div.recolhivel:hover {
    div.topo{
        color: #ffffff81;
    }
}
</style>
