<template>
    <p>Register for the event here</p>
    <button @click="register">Register me</button>
  </template>
  
  <script>
  
  export default {
    props: ['event'], //recibe el evento completo
    methods: {
      register(){
        //Llamada a la API
        //Si el registro se realiza, entonces redirige a los detalles del evento

        this.$router.push({ //hace navegar al usuario a esta localización (EventDetails)
          name: 'EventDetails'
          
        })
      }
    }
  }
  </script>