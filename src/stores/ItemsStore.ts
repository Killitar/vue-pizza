import { ref, watch, onMounted } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useFilterStore } from './FilterStore.ts';

export const useItemStore = defineStore('itemsStore', () => {
  const items = ref();
  const isItemsLoading = ref<boolean>(true);

  const filterStore = useFilterStore();
  const { activeCategory, activeSort } = storeToRefs(filterStore);

  const sort = () => filterStore.activeSort.sortProperty;
  const category = () =>
    filterStore.activeCategory > 0
      ? `category=${filterStore.activeCategory}`
      : '';

  const url = 'https://64010af23779a86262512f51.mockapi.io/items?';

  const getItems = async () => {
    isItemsLoading.value = true;

    const response = await fetch(
      `${url}${category()}&sortBy=${sort()}&order=desc`
    );
    const pizza = await response.json();

    items.value = pizza;
    isItemsLoading.value = false;
  };

  onMounted(() => {
    getItems();
  });

  watch([activeCategory, activeSort], async () => {
    getItems();
  });

  return {
    items,
    isItemsLoading,
    getItems
  };
});
