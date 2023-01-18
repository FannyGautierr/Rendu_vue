<template>
    <div class="home">
        <router-link to="/contactForm">Add a new Contact</router-link>

        <h1>Your contact</h1>
        <div v-for="(contact, index) in contacts" :key="index">
            <H2>{{ contact.name }}</H2>
            <p>{{contact.number}}</p>   
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
  