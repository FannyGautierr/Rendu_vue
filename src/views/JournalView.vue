<template>
    <div class="text-white m-4" v-for="(call, index) in journal" :key="index" >
        <div class="border-1 border-white border p-4">
            <span>{{call.name}} vous a appeler le {{call.date}} à {{call.hour}}</span>
        </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src

  
  export default {
    name: 'JournalView',
    components: {
     
    },
    computed:{
        journal(){
            return this.$store.state.journal
        }
    }

  }
  </script>
  