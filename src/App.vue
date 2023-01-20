<template>
 
  <nav class="h-20 bg-gray-800 flex justify-center items-center gap-20 m-center">
    <router-link to="/clavier" class="text-lg text-white">Clavier</router-link> 
    <router-link to="/journal" class="text-lg text-white">Journal</router-link> 
    <router-link to="/contact" class="text-lg text-white">Contacts</router-link>
  </nav>
 
  <router-view/>
 


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
