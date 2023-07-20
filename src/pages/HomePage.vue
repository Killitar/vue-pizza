<script setup lang="ts">
import { useItemStore } from '../stores/ItemsStore.ts';

import Categories from '../components/CategoriesComponent.vue';
import Pizza from '../components/PizzaComponent.vue';
import Sort from '../components/SortComponent.vue';
import Skeleton from '../components/SkeletonComponent.vue';

const itemStore = useItemStore();
</script>

<template>
  <div class="container">
    <div class="content__top">
      <Categories />
      <Sort />
    </div>
    <h2 class="content__title">Все пиццы</h2>

    <div class="content__items">
      <template v-if="itemStore.isItemsLoading">
        <Skeleton v-for="n in 4" :key="n" />
      </template>
      <template v-else>
        <Pizza
          v-for="pizza in itemStore.items"
          :key="pizza.title"
          v-bind="pizza"
        />
      </template>
    </div>
  </div>
</template>
