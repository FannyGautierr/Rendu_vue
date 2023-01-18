<template>
    <div class="historic" v-for="(call, index) in journal" :key="index">
        <div>
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
  