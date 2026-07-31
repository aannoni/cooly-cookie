<template>
  <h1>Expressions</h1>
  <h3>Vue.js expresses the value of a variable within curly brackets.</h3>
  {{ product }}
  {{ product + 's' }}

  <h1>Ternary expressions (ternary means '3' in latin)</h1>
  <h3></h3>
  <p>{{ isBaking ? 'YES' : 'NO' }}</p>

  <el-button>{{ isLoggedIn ? 'Yes you are logged in. Please log out' : 'Log in' }}</el-button>

</template>

<script setup>
  const product = 'cookie'
  const isBaking = true
  
  const isLoggedIn = false
  
</script>

<style scoped>

</style>
