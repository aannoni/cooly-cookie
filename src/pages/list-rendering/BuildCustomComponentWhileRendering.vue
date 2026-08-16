<template>
  <div class="spacing">
    <h2>Build custom component while rendering</h2>
    <h3>use v-for on a custom component to stamp out one instance per item, passing data in via props</h3>
  </div>

  <div class="spacing">
    <CookieCard v-for="names in cookieNames" :key="names" :name="names">{{ names }}</CookieCard>
  </div>

  <div>

  </div>

</template>

<script setup>
  import { ref } from 'vue'

  import CookieCard from '@/components/CookieCard.vue';
  const cookieNames = ['Chocolate chip', 'Almond cookie', 'Peanut butter cookie']

</script>

<style scoped>
  .spacing {
    margin-bottom: 50px;
  }

</style>
