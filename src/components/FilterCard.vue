<script setup>
import { ref } from 'vue';

    const props = defineProps(['opcoes'])
    const open = ref(false)

    //exemplo de objeto a ser usado
    /*const propriedades = [
        {
            nomePai: 'Especie',
            nomesFilhos: [
                {
                    nome: 'Gato',
                    valor:'gato'
                }
            ]
        }
    ]*/
</script>
<template>
    <div v-for="opcao of props.opcoes" :key="opcao">
        <div>
            <h3>{{ opcao.nomePai }}</h3>
            <span></span>
        </div>
        <div v-if="open">
            <label v-for="nomeFilho of opcoes.nomesFilhos" :key="nomeFilho">
                <input type="checkbox" :value="nomeFilho.valor">
                {{ nomeFilho.nome }}
            </label>
        </div>
    </div>
</template>