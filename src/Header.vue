<template>
    
    <Header></Header>
    <Navbar/>
  
  </template>
  
  <script>
  
  import Navbar from './components/Navigation.vue'
  import Header from './components/HeaderTop.vue'

  
  export default {
    name: 'App',
    components: {
      Navbar,
      Header,
    }
  }
  </script>
  
  <style>
  </style>
  