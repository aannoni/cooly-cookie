<template>
  <h1>Events and ref</h1>
  <h4>Event happens, action runs, action updates a ref, page updates</h4>

  <p>Count: {{ count }}</p>
  <el-button @click="increment">+1</el-button>
  <el-button @click="decrement">-1</el-button>
  <el-button @click="reset">Reset to 0</el-button>
  <el-button @click="multiply">Times two</el-button>

  <el-button @click="flip">Press to flip between true and false</el-button>
  <p v-if="isVisible">Is visible when true</p>

  <el-input v-model="name">Write your name</el-input>
  <el-button @click="sayHello">Press me to display hello + name</el-button>
  <p>{{ name }}</p>
</template>

<script setup>
  import { ref } from 'vue'

  const name = ref('')
  const sayHello = () => {
    console.log(name.value)
  }

  const isVisible = ref(false)
  const flip = () => {
    isVisible.value = !isVisible.value
  }

  const count = ref(0)
  const increment = () => {
    count.value = count.value + 1
  }
  const decrement = () => {
    count.value = count.value - 1
  }
  const reset = () => {
    count.value = 0
  }
  const multiply = () => {
    count.value = count.value * 2
  }
</script>

<style scoped>
</style>
