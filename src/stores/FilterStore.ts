import { defineStore } from 'pinia';
import { ref } from 'vue';

interface ISort {
  name: string;
  sortProperty: string;
}

export const useFilterStore = defineStore('categoriesStore', () => {
  const activeCategory = ref<number>(0);
  const activeSort = ref<ISort>({
    name: 'популярности',
    sortProperty: 'rating'
  });
  const showPopupSort = ref<boolean>(false);

  const sortList: ISort[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' }
  ];

  const categoriesList: Array<string> = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ];

  const setActiveSort = (name: string, sortProperty: string) => {
    activeSort.value = { name, sortProperty };
  };

  const toggleSortPopup = () => {
    showPopupSort.value = !showPopupSort.value;
  };

  const setActiveCategory = (id: number) => {
    activeCategory.value = id;
  };

  return {
    activeCategory,
    setActiveCategory,
    activeSort,
    setActiveSort,
    showPopupSort,
    toggleSortPopup,
    sortList,
    categoriesList
  };
});
