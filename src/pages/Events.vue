<template>
  <h1>Events</h1>
  <h4>Events is what is happening in the browser (click, press, submit, hover)</h4>
  <h4>then vue says 'do this' which is called an action</h4>

  <el-button @click="sayHi">Press me to say hi</el-button>
  <el-button @click="console.log(addNumbers(2,3))">Add numbers</el-button>
  <el-button @click="console.log(subtractNumbers(5,4))">Subtract numbers</el-button>

  <el-input v-model="userNumber"></el-input>
  <el-button @click="console.log(doubleIt(userNumber))">Press to double input</el-button>

</template>

<script setup>
  import { ref } from 'vue'

  const sayHi = () => {
    console.log('Hi')
  }

  const addNumbers = (a,b) => {
    return(a+b)
  }

  const subtractNumbers = (a,b) => {
    return(a-b)
  }

  const userNumber = ref(0)
  const doubleIt = () => {
    return (userNumber * 2)
  }

</script>

<style scoped>
</style>
