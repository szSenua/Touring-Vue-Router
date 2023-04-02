<template>
    <p>Register for the event here</p>
    <button @click="register">Register me</button>
  </template>
  
  <script>
  
  export default {
    props: ['event'], //recibe el evento completo
    inject: ['GStore'], //Hace que el objeto GStore esté disponible dentro de este componente
    methods: {
      register(){
        //Llamada a la API
        //Si el registro se realiza, entonces redirige a los detalles del evento

        this.GStore.flashMessage = 'You are successfully registered for ' + this.event.title

        setTimeout(() => {
          this.GStore.flashMessage = ''
        }, 3000) //Después de tres segundos, limpia flashMessage

        this.$router.push({ //hace navegar al usuario a esta localización (EventDetails)
          name: 'EventDetails'
          
        })
      }
    }
  }
  </script>