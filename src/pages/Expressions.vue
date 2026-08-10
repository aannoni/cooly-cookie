<template>
  <h1>Expressions</h1>
  <div class="brain-hack">VALUE & YES/NO</div>
  <h3>Vue.js expresses the value of a variable within curly brackets.</h3>
  {{ product }}
  {{ product + 's' }}

  <h1>Ternary expressions (ternary means '3' in latin)</h1>
  <h3></h3>
  <p>{{ isBaking ? 'YES' : 'NO' }}</p>

  <div style="display: inline-flex; flex-direction: column; gap: 10px;">
    <el-button>{{ isLoggedIn ? 'Yes you are logged in. Please log out' : 'Log in' }}</el-button>
    <el-tag>{{ count === 1 ? 'count is one' : 'count is more than one' }}</el-tag>
  </div>

</template>

<script setup>
  const product = 'cookie'
  const isBaking = true
  
  const isLoggedIn = false
  const count = 2
  
</script>

<style scoped>
.brain-hack {
  font-size: 48px;
  
}

</style>
