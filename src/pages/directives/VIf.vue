<template>
  <div class="spacing">
    <h2>v-if (this or that)</h2>
    <h3>v-show hides the element, whereas v-if completely removes it</h3>
  </div>

  <div class="spacing">
    <el-button v-if="inStock">Cookies in stock</el-button>
    <p v-else>Sold out :(</p>
  </div>

  <div class="spacing">
    <el-button v-if="role === 'admin'">Delete button for admins</el-button>
  </div>

</template>

<script setup>
  const inStock = true
  const role = 'admin'

</script>

<style scoped>
  .spacing {
    margin-bottom: 80px;
  }

</style>
