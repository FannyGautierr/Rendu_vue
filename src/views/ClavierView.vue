<template>

    <displayNumber />
    <div v-for="(contact, index) in contacts" :key="index">
        <H2 class="personn-name" v-if="contact.number === number">{{contact.name}}</H2>
    </div>

    <div class="clavier">
    <div @click="addNumber(0)" class="cell">0</div>
    <div @click="addNumber(1)" class="cell">1</div>
    <div @click="addNumber(2)" class="cell">2</div>
    <div @click="addNumber(3)" class="cell">3</div>
    <div @click="addNumber(4)" class="cell">4</div>
    <div @click="addNumber(5)" class="cell">5</div>
    <div @click="addNumber(6)" class="cell">6</div>
    <div @click="addNumber(7)" class="cell">7</div>
    <div @click="addNumber(8)" class="cell">8</div>
    <div @click="addNumber(9)" class="cell">9</div>
   
    </div>
    <CallButton :number="number"/>

  </template>
  
  <script>
import displayNumber from '@/components/DisplayNumber.vue';
import CallButton from '@/components/CallButton.vue';



  export default {
    name: 'ClavierView',
    methods: {
        addNumber(a){
            this.$store.commit('addNumber',a)
        }
    },
    computed:{
        number(){
            return this.$store.state.number
        },
        contacts(){
            return this.$store.state.contacts

        }

    },
   
    components:{
    displayNumber,
    CallButton
}
  }
  </script>
  <style scoped>

.clavier{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width: fit-content;
    margin: 0 auto;
    margin-top: 50px;
}
.cell{
    background-color: aliceblue;
    width: 20px;
    height: 20px;
}
</style>

expo