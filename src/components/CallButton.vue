<template>
    <form action="" @submit="callSomeone()" class="m-10 ">
      
       
        <input type="submit" value="Call" class="p-4">
         
    </form>
   
</template>
<script>

export default {
    name:"CallButton",
    props:["number","name"],
    data(){
        return{
            callForm:{
                name:this.name,
                number:this.number,
                date:"",
                hour:""
            }
        }
    },
    methods:{
        callSomeone(){
            this.$store.commit("callSomeone",this.callForm)
        }
    },
   
}

</script>
<style>
</style>