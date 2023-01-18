<template>
<form action="" @submit.prevent="submitForm()">
    <input type="text" placeholder="name" v-model="contactForm.name">
    <input type="tel" placeholder="phone number" v-model="contactForm.number">

    <input type="submit" value="Add a new contact">
</form>
</template>
<script>


export default{
    name:"ContactForm",
    data(){
        return{
            contactForm:{
                name:"",
                number:""
            }
        }
    },
    methods: {
        submitForm(){
            this.$store.commit('submitForm',this.contactForm)

            this.contactForm = {
                name: "",
                number: ""
            };
            this.$router.push("contact")
        }
    }
}


</script>
<style></style>