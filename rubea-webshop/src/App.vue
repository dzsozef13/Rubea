<template>
  <div id="app">
    <div id="navbar-container">
      <Navbar/>
    </div>
    <div id="burger-button">
      <BurgerButton/>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden
}

#navbar-container {
  display: block;
}
#burger-button {
  display: none;
}

@media screen and (max-width:600px) {
  #navbar-container {
    display: none;
  }
  #burger-button {
    display: block;
  }
}

</style>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BurgerButton from '@/components/BurgerButton.vue';

export default {
  name: 'App',
  components: { Navbar, Footer, BurgerButton },

  data() {
    return {
    }
  }
}
</script>



