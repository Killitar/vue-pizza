<script setup lang="ts">
import { ContentLoader } from 'vue-content-loader';
</script>

<template>
  <content-loader
    class="pizza-block"
    viewBox="0 0 280 500"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="427" rx="13" ry="13" width="152" height="45" />
  </content-loader>
</template>
