<template>

    <div class="display-number">
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