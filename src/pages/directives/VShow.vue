<template>
  <div class="spacing">
    <h2>v-show</h2>
    <h3>v-show hides the element, whereas v-if completely removes it</h3>
  </div>

  <p v-show="showDetails">Baked fresh this morning</p>

</template>

<script setup>
  const showDetails = false
</script>

<style scoped>
  .spacing {
    margin-bottom: 80px;
  }

</style>
