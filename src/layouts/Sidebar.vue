<script setup>
</script>

<template>
  <el-menu router default-active="/">
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/expressions">Expressions</el-menu-item>
    <el-menu-item index="/binding">Binding</el-menu-item>
    <el-sub-menu index="directives">
      <template #title>Directives</template>
      <el-menu-item index="/directives/v-if">v-if (this or that)</el-menu-item>
      <el-menu-item index="/directives/v-else-if">v-else-if (this or that or that)</el-menu-item>
      <el-menu-item index="/directives/v-show">v-show</el-menu-item>
      <el-menu-item index="/directives/v-model">v-model</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="list-rendering">
      <template #title>List rendering</template>
      <el-menu-item index="/list-rendering">List rendering</el-menu-item>
      <el-menu-item index="/list-rendering/object-list-rendering">Object list rendering</el-menu-item>
      <el-menu-item index="/list-rendering/build-custom-component-while-rendering">Build custom component while rendering</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/memory-hooks">Memory hooks</el-menu-item>
    <el-menu-item index="/training">Training</el-menu-item>
    <el-menu-item index="/events">Events</el-menu-item>
  </el-menu>
</template>

<style scoped>
</style>