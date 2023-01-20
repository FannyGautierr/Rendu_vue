<template>
<form action="" @submit.prevent="submitForm()" class="flex flex-col justify-items items-center gap-4 p-4 bg-gray-800  w-1/2 m-center mt-10">
    <input type="text" placeholder="name" v-model="contactForm.name" class="p-2">
    <input type="tel" placeholder="phone number" v-model="contactForm.number" class="p-2">

    <input type="submit" value="+ Add" class="p-2 rounded-xl w-1/3 text-lg">
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