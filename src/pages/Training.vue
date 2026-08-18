<template>
  <h1>Training</h1>
  
  {{ Math.ceil(cost) }}

  <p v-if="isBaking === true">{{ productName }}</p>
  <p v-else>Not baking right now</p>

  <ul>
    <li v-for="cookie in cookies" v-bind:key="cookie">{{ cookie }}</li>
    <li v-for="(cookie,index) in cookies" v-bind:key="cookie">{{ cookie }} {{ index }}</li>
  </ul>

  <el-button v-bind:disabled="isSoldOut">Buy a cookie</el-button>
  <el-button v-show="showFBtn === true" v-bind:class="{ favouriteStyling: isFavourite }">Buy your favourite cookie</el-button>

  <ul>
    <li v-for="product in products" v-bind:key="product">{{ product.name }} | {{ product.price }} | {{ product.inStock }}</li>
    <li v-for="product in products" v-bind:key="product.name">{{ product.name }} | {{ product.price }}
      <span v-if="product.inStock === true">In Stock</span>
      <span v-else>Sold Out</span>
      <el-button v-bind:disabled="product.inStock === false">Add to cart</el-button>
    </li>
  </ul>

  <ul>
    <li v-for="value in special">{{ value }}</li>
  </ul>
</template>

<script setup>
  const cost = 3.5

  const isBaking = true
  const productName = 'Cookie'

  const cookies =['Chocolate chip', 'Peanut butter', 'Almond']

  const isSoldOut = true

  const isFavourite = true
  const showFBtn = true

  const products = [
    { name: 'Chocolate Chip', price: 3.5, inStock: true },
    { name: 'Oatmeal', price: 2.75, inStock: false },
    { name: 'Snickerdoodle', price: 4.0, inStock: true },
  ]

  const special = {
    // key: value
    name: 'Christmas cookie',
    price: 8.5,
    inStock: true
  }

</script>

<style scoped>
  .favouriteStyling {
    color: blueviolet;
    background-color: aqua;
  }

</style>
