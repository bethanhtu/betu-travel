<template>
    <Navbar/>
    Hello
    <main>
      <div class="container">
        Hello
        <router-view></router-view>
      </div>
    </main>
  </template>
  
  <script setup>
  import Navbar from "../components/Navigation.vue";

  </script>
  <style scoped>
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
  </style>
  