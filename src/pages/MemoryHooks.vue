<template>
  <div>
    <h2>Memory hooks</h2>
  </div>

  <div class="spacing">
    <p>{{ color }} Expressions: element text can be changed</p>
    <p v-bind:style="{ color: color }">Binding: element style can be changed</p>
    <p v-if="color === 'gold'">Directives: element shows up or not</p>
  </div>

</template>

<script setup>
  const color = 'gold'

</script>

<style scoped>
  .spacing {
    margin-bottom: 80px;
  }

  .color {
    color: gold;
  }

</style>
