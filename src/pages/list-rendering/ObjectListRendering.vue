<template>
  <div class="spacing">
    <h2>Object List Rendering</h2>
    <h3>use v-for="(value, key) in object" to loop over an object's properties</h3>
  </div>

  <div class="spacing">

  </div>
    <ul>
      <li v-for="(value,key) in cookie">{{ value }} : {{ key }}</li>
    </ul>

  <div>

  </div>

</template>

<script setup>
  import { ref } from 'vue'

  const cookie = {
    name: 'Chocolate chip',
    ingredient: 'Chocolate',
    price: 6
  }

</script>

<style scoped>
  .spacing {
    margin-bottom: 50px;
  }

</style>
