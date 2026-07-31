<script setup>
  import Sidebar from './layouts/Sidebar.vue'

  const product = 'cookie'
  const isWorking = true
</script>

<template>
  <div class="layout">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>

</template>

<style scoped>
  .layout {
  display: flex;
  }
  .content {
    flex: 1;
  }

</style>
