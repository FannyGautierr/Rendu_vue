<template>

    <displayNumber />
    <div class="personn-name" v-if=" number.length < 11  ">
    <div v-for="(contact, index) in contacts" :key="index" >
        <div class="personn-name" v-if="contact.number === number" >
            <span class="text-white text-2xl border-b-2 m-4">{{contact.name}}</span>
            <CallButton :number="number" :name="contact.name"/>
            {{ find=true }}
        </div> 
    
    </div>

    </div> 
    <div v-if="number.length<11 && !find">
        <span>Inconnu</span>
        <CallButton :number="number" :name="number"/>
        {{find=false}} 

    </div>
   

    <div class="grid gap-2 grid-cols-3 w-1/2 m-center">
    
    <div @click="addNumber(1)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">1</div>
    <div @click="addNumber(2)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">2</div>
    <div @click="addNumber(3)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">3</div>
    <div @click="addNumber(4)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">4</div>
    <div @click="addNumber(5)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">5</div>
    <div @click="addNumber(6)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">6</div>
    <div @click="addNumber(7)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">7</div>
    <div @click="addNumber(8)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">8</div>
    <div @click="addNumber(9)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold">9</div>
    <div @click="addNumber(0)" class="p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center col-start-2 drop-shadow-2xl text-2xl font-bold">0</div>

    
   
    </div>
    <div @click="deleteNumber()" class="text-xl font-bold bg-red-300 w-1/3 h-20 my-5 m-center rounded-full flex items-center justify-center text-red-500 ">Delete</div>
    

  </template>
  
  <script>
import displayNumber from '@/components/DisplayNumber.vue';
import CallButton from '@/components/CallButton.vue';


  export default {
    name: 'ClavierView',
    data(){return{find:false}},
    methods: {
        addNumber(a){
            this.$store.commit('addNumber',a)
        },
        deleteNumber(){
            this.$store.commit('deleteNumber')
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


</style>

expo