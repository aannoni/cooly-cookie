<template>
  <div class="spacing">
    <h2>v-model</h2>
    <h3>if the user can change input, use v-model like inputs, checkboxes, sliders, etc</h3>
    <h4>save whatever input is with variable, attach variabe to html element, output value</h4>
  </div>

  <div class="spacing">
    <el-input v-model="firstName"></el-input>
    <p>{{ firstName }}</p>
  </div>

  <div class="spacing">
    <input type="checkbox" v-model="isChecked"></input>
    <p>{{ isChecked }}</p>
  </div>

  <div class="spacing">
    <el-checkbox v-model="unchecked"></el-checkbox>
    <p>{{ unchecked }}</p>
  </div>

  <div class="spacing">
    <el-radio-group v-model="selectedSize">
      <el-radio value="small">Small</el-radio>
      <el-radio value="medium">Medium</el-radio>
      <el-radio value="large">Large</el-radio>
    </el-radio-group>
    <p>Selected: {{ selectedSize }}</p>
  </div>

  <div class="spacing">
    <el-select v-model="selectedOption">
      <el-option value="1">1</el-option>
      <el-option value="2">2</el-option>
      <el-option value="3">3</el-option>
      <el-option value="4">4</el-option>
    </el-select>
    <p>Selected from dropdown: {{ selectedOption }}</p>
  </div>

  <div class="spacing">
    <el-switch v-model="switchOn"></el-switch>
    <p>Switch is on {{ switchOn }}</p>
  </div>

  <div class="spacing" style="margin: 20px;">
    <el-slider v-model="sliderValue"></el-slider>
    <p>The slider value is: {{ sliderValue }}</p>
  </div>

</template>

<script setup>
  import { ref } from 'vue'

  const firstName = ref('')
  const isChecked = ref(true)
  const unchecked = ref(false)

  const selectedSize = ref('')
  const selectedOption = ref('')

  const switchOn = ref(true)

  const sliderValue = ref('')

</script>

<style scoped>
  .spacing {
    margin-bottom: 50px;
  }

</style>
