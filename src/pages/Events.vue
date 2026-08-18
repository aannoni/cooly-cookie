<template>
  <h1>Events</h1>
  <h4>Events is what is happening in the browser (click, press, submit, hover)</h4>
  <h4>then vue says 'do this' which is called an action</h4>

  <el-button v-on:click="sayHello"></el-button>
</template>

<script setup>
  const sayHello = () => {
    console.log('Hello')
  }
</script>

<style scoped>
</style>
