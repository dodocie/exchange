<script lang="ts" setup>
import Stuff from "./Selector.vue";
import AsideMenu from "./AsideMenu.vue";
import Billboard from "./Billboard.vue";
import { ref, onMounted, computed } from "vue";
import {useProductStore} from '@/stores/products'
import type { ProductFE } from '@/lib/types';

const {getProducts} = useProductStore()

const items = ref<ProductFE[]>([]);
const searchResults = ref<ProductFE[]>([]);
const searchFlag = ref<0 | 1 | 2>(0)

type SuggestItem = Pick<ProductFE, 'category' | 'subCategory' | 'id'> & {value: string}

const searchHandler = (val: string, category?: string) => {
  updateFlag(2)
  searchResults.value = items.value
    .filter(item=>item.name.indexOf(val) > -1 && (!category || item.category === category))

};
const onSuggest = (itemPicked: SuggestItem) => {
  const result = items.value.find(item=>item.id === itemPicked.id)
  if(!result) return
  searchResults.value = [result]
  updateFlag(2)
}

const updateFlag = (flag: 0 | 1 | 2) => {
  searchFlag.value = flag
}

/** 树形选择器 */
const onSelect = (val: string[]) => {
  updateFlag(2)
  const [c1, c2] = val
  searchResults.value = items.value.filter(item=>item.category === c1 && item.subCategory === c2)
};

const PAGESIZE = 6
const currPage = ref(1)
const setCurrPage = (page: number) => {
  currPage.value = page
}

onMounted(() => {
  if (!items.value.length) {
    items.value = getProducts();
  }
});

const displayItems = computed(() => {
  if(searchFlag.value === 0) return items.value
  return searchResults.value
})
</script>

<template>
  <div class="mt-4 pt-16">
    <el-container>
      <el-aside width="300px" class="pl-2">
        <Stuff :handle-search="searchHandler" :on-suggest="onSuggest" :items="items"/>
        <AsideMenu style="height: 75vh; overflow: scroll" :on-select="onSelect" />
      </el-aside>
      <el-main class="ml-4" style="padding-top: 0">
        <div class="mb-3" style="height: 76vh; overflow: scroll">
          <Billboard :items="displayItems.slice(PAGESIZE * currPage - 6, PAGESIZE * currPage)" />
        </div>
        <el-pagination
          class="justify-center"
          :hide-on-single-page="true"
          layout="prev, pager, next"
          :page-size="PAGESIZE"
          :total="displayItems.length"
          @current-change="setCurrPage"
        />
      </el-main>
    </el-container>
  </div>
</template>
