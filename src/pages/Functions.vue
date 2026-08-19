<template>
  <h1>Functions</h1>
  <ul>
    <li>function name</li>
    <li>what it does (return, console log)</li>
    <li>call or use it and give it params</li>
    <li>add params to function and what it does</li>
  </ul>

</template>

<script setup>
  const sayHi = (name) => {
    console.log('Hi' + name)
  }
  sayHi('Alex')

  const add = (a, b) => {
    return (a+b)
  }
  console.log(add(2, 3))

  const subtract = (c,d) => {
    return(c-d)
  }
  console.log(subtract(5,3))

  const checkAge = (e) => {
    if (e >= 18) {
      return 'adult'
    }
    else {
      return 'minor'
    }
  }
  console.log(checkAge(20))
</script>

<style scoped>
</style>
