<script setup lang="ts">
import Header from './components/HeaderComponent.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
