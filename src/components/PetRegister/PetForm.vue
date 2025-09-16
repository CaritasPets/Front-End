<script setup>
import { ref } from 'vue';
    const displayTest = ref(false);
    const racas = ref([
        {
            nome: 'Pastor Alemão',
            value: 'pastoralemao',
        },
        {
            nome:'Pinsher',
            value: 'pinsher'
        },
        {
            nome: 'Hot Wailer',
            value:'hotwailer'
        }
    ])
    const pet = ref({
        nome: '',
        especie: 'cachorro', //default
        genero: 'macho', //default
        porte: 'grande', //default
        castrado: '', 
        foto: null,
        raca: '',
        vacinado: '',
    })
</script>
<template>
    <form class="py-40" @submit.prevent="">
        <ul>
            <li>
                <p>*Nome do Pet (ou apelido):</p>
                <input type="text" v-model="pet.nome">
            </li>
            <li>
                <p>*Epécie do pet</p>
                <select v-model="pet.especie">
                    <option value="cachorro">Cachorro</option>
                    <option value="gato">Gato</option>
                    <option value="passaro">Passaro</option>
                    <option value="outro">Outro</option>
                </select>
            </li>
            <li>
                <p>Gênero do Pet</p>
                <select v-model="pet.genero">
                    <option value="macho">Macho</option>
                    <option value="femea">Fêmea</option>
                </select>
            </li>
            <li>
                <p>Porte do Pet</p>
                <select v-model="pet.porte">
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                </select>
            </li>
            <li>
                <p>O pet é castrado?</p>
                <div>
                    <label>
                        <input type="radio" value="sim" v-model="pet.castrado">
                        Sim
                    </label>
                    <label>
                        <input type="radio" value="nao" v-model="pet.castrado">
                        Não
                    </label>
                    <label>
                        <input type="radio" value="nao-sei" v-model="pet.castrado">
                        Não sei
                    </label>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <p>Raça:</p>
                <input list="racas" v-model="pet.raca">
                <div>
                    <datalist id="racas">
                        <option v-for="raca of racas" :value="raca.nome" :key="raca.value">
                            {{ raca.value }}
                        </option>
                    </datalist>
                    <span class="mdi mdi-pencil-circle"></span>
                </div>
                <div>
                    <input type="text">
                    <input type="text">
                    <span class="mdi mdi-check-circle"></span>
                    <span class="mdi mdi-alpha-x-circle"></span>
                </div>
            </li>
            <li>
                <p>O pet é vacinado?</p>
                <div>
                    <label>
                        <input type="radio" value="sim" v-model="pet.vacinado">
                        Totalmente
                    </label>
                    <label>
                        <input type="radio" value="parcialmente" v-model="pet.vacinado">
                        Parcialmente
                    </label>
                    <label>
                        <input type="radio" value="nao" v-model="pet.vacinado">
                        Não
                    </label>
                    <label>
                        <input type="radio" value="nao-sei" v-model="pet.vacinado">
                        Não sei
                    </label>
                </div>
            </li>
            <li>
                <p>Foto do pet:</p>
            </li>
        </ul>
        <div>
            <button type="reset">Limpar</button>
            <button type="submit">Cadastrar Pet</button>
        </div>
        <div v-if="displayTest">
            <p v-for="item of pet" :key="itens">
                {{ item }}
            </p>
        </div>
    </form>
</template>