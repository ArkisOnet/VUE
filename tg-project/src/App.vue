<template>
  <div id="app">
    <Navbar />  <!-- Навигационная панель -->
    <router-view /> <!-- Контент, который будет меняться в зависимости от маршрута -->
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'Navbar',
  components:
  Navbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
