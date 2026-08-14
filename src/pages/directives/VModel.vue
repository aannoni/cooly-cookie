<template>
  <div class="spacing">
    <h2>v-model</h2>
    <h3>if the user can change input, use v-model like inputs, checkboxes, sliders, etc</h3>
  </div>

  <div class="spacing">
    <el-input v-model="isBaked">test</el-input>
    <el-input v-model.trim="name"></el-input>
    <el-input v-model.number="name"></el-input>
    <el-input v-model.lazy="name"></el-input>
    <h4>{{ name }}</h4>
  </div>

  <div>
    <el-button @click="name = 'Cookie'">i dont understand vmodel</el-button>
    <el-checkbox v-model="isBaked"></el-checkbox>
    <el-input v-model="notes" type="textarea" maxlength="10">hello</el-input>
    <el-input v-model="notes" type="textarea" v-bind:maxlength="10">hello</el-input>
    <p>{{ notes }}</p>
  </div>

</template>

<script setup>
  import { ref } from 'vue'

  const name = ref('')
  const isBaked = ref(true)
  const notes = ref('')
</script>

<style scoped>
  .spacing {
    margin-bottom: 80px;
  }

</style>
