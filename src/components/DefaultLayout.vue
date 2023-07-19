<template>
  <!-- <Header/> -->
    <Navigation />
    <Login
    v-if="isShowLogin"
    />
    <router-view/>
    
    <Footer/>
    
</template>
  
  <script>

  import Footer from "../components/Footer.vue";

  import Navigation from "../components/Navigation.vue";
  export default  {
    components: {
      Footer,
      Navigation
    },
    data() {
      return {
       
      }
    },
    methods:  {
      onLogin() {
        this.isShowLogin = !this.isShowLogin;
      }
    }
  }
  // import Header from "../components/HeaderTop.vue";

  </script>

  