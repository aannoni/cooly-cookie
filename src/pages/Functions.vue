<template>
  <h1>Functions</h1>

  <el-button
    v-on:click="() => console.log(add(4, 5))"
  >Log</el-button>
</template>

<script setup>
  const add = (a, b) => {
    return a + b
  }

  console.log(add(2,3))
</script>

<style scoped>
</style>
