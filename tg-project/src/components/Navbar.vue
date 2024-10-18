<script setup>
export default {
  name: "Navbar"
};
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/marketplace">Talent Marketplace</router-link></li>
      <li><router-link to="/outsourcing">Outsourcing & EOR</router-link></li>
      <li><router-link to="/talent-pool">Talent Pool</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>