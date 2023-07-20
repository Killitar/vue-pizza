<script setup lang="ts">
import { useFilterStore } from '../stores/FilterStore.ts';

const filterStore = useFilterStore();

const isActiveCategory = (id: number) => {
  return filterStore.activeCategory === id ? 'active' : '';
};
</script>

<template>
  <div class="categories">
    <ul>
      <li
        v-for="(category, id) in filterStore.categoriesList"
        :key="category"
        :class="isActiveCategory(id)"
        @click="filterStore.setActiveCategory(id)"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
