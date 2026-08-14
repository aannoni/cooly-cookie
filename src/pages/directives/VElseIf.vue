<template>
  <div class="spacing">
    <h2>v-else-if (this or that or that)</h2>
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

</template>

<script setup>
  const stock = 'low'
  const rating = 3

  const user = 'Alex'
</script>

<style scoped>
  .spacing {
    margin-bottom: 80px;
  }

</style>
