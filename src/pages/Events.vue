<template>
  <h1>Events</h1>
  <h4>Events is what is happening in the browser (click, press, submit, hover)</h4>
  <h4>then vue says 'do this' which is called an action</h4>

  <el-button @click="sayHello">Press to say hello</el-button>
  <el-input @keyup.enter="sayHello"></el-input>
  <el-input @input="sayHello"></el-input>
  <el-button @mouseover="sayHello">Hover me</el-button>
  <el-input @focus="sayHello" @blur="sayHello"></el-input>

</template>

<script setup>
  import { ref } from 'vue'

  const sayHello = () => {
    console.log('Hi')
  }


</script>

<style scoped>
</style>
