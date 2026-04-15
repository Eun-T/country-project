<script setup>
import Home from './pages/Home.vue';
</script>

<template>
  <div class="bg-app">
    <!-- <Home /> -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.bg-app {
  height: 100%;
  overflow: hidden;
  background: url('@/assets/images/bg.jpg') center/cover no-repeat;
}
</style>
