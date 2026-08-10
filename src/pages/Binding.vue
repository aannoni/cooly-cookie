<template>
  <div class="spacing">
    <p>html tags behave a certain way. something defines how they behave, which is mostly the attribute<br>
    example for html tags are: a, ul, body, ...<br>
    example for attributes are: v-bind:style, v-bind:href, v-bind:class, ...</p>

    <h4>expressions only bind words. whereas binding allows to bind anything: a link, a style, etc</h4>
  </div>

  <div class="spacing">
    <h3>html tag link (a), that wants to actually link somewhere (href)</h3>
    <a v-bind:href="url">Make the html tag acutally link</a>
  </div>

  <div class="spacing">
    <h3>an elment plus button who should be disabled when cookies are sold out</h3>
    <el-button v-bind:disabled="cookiesSoldOut">Buy a cookie</el-button>
  </div>
</template>

<script setup>
  const url = "https://www.vuemastery.com/dashboard"
  const cookiesSoldOut = true

</script>

<style scoped>
  .spacing {
    margin-bottom: 80px;
  }
  
</style>
