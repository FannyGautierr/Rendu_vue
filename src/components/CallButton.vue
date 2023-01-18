<template>
    <form action="" @submit="callSomeone()">
      
        <input type="submit" value="Call">
         
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
    }
}

</script>
<style>
</style>