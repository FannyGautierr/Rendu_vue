<template>

    <div class=" h-20 bg-accentLight shadow-inner border-1 border-solid border-white m-10 text-white text-2xl flex justify-center items-center font-bold">
        <span v-for="(numbe, index) in number" :key="index">
            {{ numbe }}
          </span>
    </div>

</template>


<script>
export default {
  name: 'displayNumber',
 
  computed:{
    number(){
            return this.$store.state.number
        }
  }
  
}
</script>

<style >
.display-number{
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    height: 50px;
    background-color: white;
    border: 1px solid black;
}
</style>