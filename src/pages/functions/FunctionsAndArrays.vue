<template>
  <h1>Functions and arrays</h1>

  <!-- <ul>
    <li v-for="cookie in showFlavour()" v-bind:key="cookie">{{ cookie }}</li>
  </ul> -->

  <!-- <ul>
    <li v-for="cookie in countCookies()" v-bind:key="cookie">{{ cookie }}</li>
  </ul> -->

  <ul>
    <li v-for="cookie in addCookie()" v-bind:key="cookie">{{ cookie }}</li>
  </ul>

  <ul>
    <li v-for="cookie in showLongNames()" v-bind:key="cookie">{{ cookie }}</li>
  </ul>

  <ul>
    <li v-for="cookie in changeCookies()" v-bind:key="cookie">{{ cookie }}</li>
  </ul>

  <ul>
    <li v-for="cookie in cookies" v-bind:key="cookie">{{ cookie }}</li>
  </ul>
  
</template>

<script setup>
  const cookies = ['Chocolate chip', 'Peanut butter', 'Almond']


  const showFlavour = (flavour) => {
    return cookies.includes(flavour)
  }
  console.log(showFlavour('Vanilla'))
  console.log(showFlavour('Almond'))


  const countCookies = () => {
    return cookies.length
  }
  console.log(countCookies())


  const addCookie = () => {
    cookies.push('Strawberry')
  }
  console.log(addCookie())


  const showLongNames = () => {
    return cookies.filter((cookie) => cookie.length > 10)
  }
  console.log(showLongNames())


  const changeCookies = () => {
    return cookies.map((cookie) => cookie.toUpperCase())
  }
  console.log(changeCookies())
</script>

<style scoped>
</style>
