<template>
  <div class="spacing">
    <h2>List Rendering</h2>
    <h3>use v-for to loop over an array (or object) and render an element per item</h3>
  </div>

  <div class="spacing">
    <ul>
      <li v-for="item in cookies">{{ item }}</li>
    </ul>
  </div>

  <div class="spacing">
    <ul>
      <h3>ingredients</h3>
      <li v-for="(ingredient, index) in ingredients" v-bind:key="ingredient">{{ ingredient }} : {{ index }}</li>
    </ul>
  </div>

</template>

<script setup>
  import { ref } from 'vue'

  const cookies = ['chocolate chip', 'almond', 'peanut butter']
  const ingredients = ['butter', 'sugar', 'chocolate chips']

</script>

<style scoped>
  .spacing {
    margin-bottom: 50px;
  }

</style>
