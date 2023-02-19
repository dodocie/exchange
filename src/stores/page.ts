import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ViewNames } from '@/router';
export const usePageStore = defineStore('page', ()=>{
  const currPage = ref<ViewNames>(ViewNames.HOME)
  const updatePage = (page: ViewNames) => {
    currPage.value = page
  }

  return {currPage, updatePage}
})