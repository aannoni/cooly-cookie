<template>
  <h1>Training</h1>
  
  {{ Math.ceil(price) }}

  <p v-if="isBaking === true">{{ productName }}</p>
  <p v-else>Not baking right now</p>

  <ul>
    <li v-for="cookie in cookies" v-bind:key="cookie">{{ cookie }}</li>
    <li v-for="(cookie,index) in cookies" v-bind:key="cookie">{{ cookie }} {{ index }}</li>
  </ul>

  <el-button v-bind:disabled="isSoldOut">Buy a cookie</el-button>
  <el-button v-show="showFBtn === true" v-bind:class="{ favouriteStyling: isFavourite }">Buy your favourite cookie</el-button>
</template>

<script setup>
  const price = 3.5

  const isBaking = true
  const productName = 'Cookie'

  const cookies =['Chocolate chip', 'Peanut butter', 'Almond']

  const isSoldOut = true

  const isFavourite = true
  const showFBtn = true
</script>

<style scoped>
  .favouriteStyling {
    color: blueviolet;
    background-color: aqua;
  }

</style>
