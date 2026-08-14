<template>
  <div class="spacing">
    <h2>Directives</h2>
    <p>Show this OR that element (work with 2 elements) work wit === or bigger/smaller than></p>
    <p>vs ternary expression always shows 1 element and just changes the text/value on it</p>
  </div>

  <div class="spacing">
    <h3>v-if and v-else if something has only 2 states</h3>
    <el-button v-if="inStock">Cookies in stock</el-button>
    <p v-else>Sold out :(</p>
  </div> 

  <div class="spacing">
    <h3>v-if, v-else-if, v-else if something has 3 states</h3>
    <el-button v-if="stock === 'none'">Sold out</el-button>
    <el-button v-else-if="stock === 'low'">Only a few left</el-button>
    <el-button v-else>Plenty of cookies</el-button>
  </div>

  <div class="spacing">
    <p v-if="rating === 5">This is amazing</p>
    <p v-else-if="rating >= 3">It's alright</p>
    <p v-else>Urgh this is disgusting</p>
  </div>

  <div class="spacing">
    <p v-if="user === 'Alex'">Hi Alex</p>
    <button v-else>Please log in</button>
  </div>
  
  <div class="spacing">
    <el-button v-if="role === 'admin'">Delete button for admins</el-button>
  </div>

</template>

<script setup>
  const inStock = true

  const stock = 'low'
  const rating = 3

  const user = 'Alex'

  const role = 'admin'

</script>

<style scoped>
  .spacing {
    margin-bottom: 80px;
  }

</style>
