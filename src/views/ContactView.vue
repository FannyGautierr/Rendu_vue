<template>
    <div class="mt-10">
    <router-link to="/contactForm" class="text-black text-2xl p-2 bg-white">+ Add a new Contact</router-link>
    </div>
    <div class="home">
       

        <h1 class="text-white text-2xl mt-20">Your contact</h1>
        <div v-for="(contact, index) in contacts" :key="index" class="flex flex-row items-center justify-center gap-10">
            <h2 class="text-white text-2xl">{{ contact.name }}</h2>
            <p class="text-white text-2xl">{{contact.number}}</p>   
            <CallButton :number="contact.number" :name="contact.name"/>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
import CallButton from '@/components/CallButton.vue';

  
  export default {
    name: 'ContactView',
    components: {
    CallButton
    },
    computed:{
    contacts(){
            return this.$store.state.contacts
        }
    }
  }
  </script>
  