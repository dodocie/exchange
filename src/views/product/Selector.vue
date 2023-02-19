<script lang="ts" setup>
import { ref } from "vue";
import {
  Search,
} from '@element-plus/icons-vue'
import type { ProductFE } from '@/lib/types';
import { Jumble } from '@/lib/jumble';

type SuggestItem = Pick<ProductFE, 'category' | 'subCategory' | 'id'> & { value: string }
const props = defineProps<{  handleSearch: (value: string, val?: string) => void, items: ProductFE[], onSuggest: (v: SuggestItem) => void }>();

const searchName = ref("");
const searchCategory = ref("");

const suggestions = ref<SuggestItem[]>([])

const onSearchKeywords = (val: string, category?: string) => {
  suggestions.value = props.items
    .filter(item=>item.name.includes(val) && (!category || item.category === category))
    .map(item=>({value: item.name, category: item.category, subCategory: item.subCategory, id: item.id}))
};
const querySearch = (queryString: string, cb: any) => {
  if (!queryString) return
  onSearchKeywords(queryString, searchCategory.value)
  cb(suggestions.value)
}

const searchOnIcon = () => {
  props.handleSearch(searchName.value, searchCategory.value)
}
</script>

<template>
  <el-autocomplete v-model="searchName" :fetch-suggestions="querySearch" :trigger-on-focus="false" clearable
    placeholder="请输入" size="large" class="input-with-select" @select="props.onSuggest">
    <template #prepend>
      <el-select v-model="searchCategory" placeholder="种类" size="large" style="width: 80px">
        <el-option label="数码" :value="Jumble.DIGITAL" />
        <el-option label="书籍" :value="Jumble.BOOKS" />
        <el-option label="运动" :value="Jumble.SPORTS" />
        <el-option label="健身器材" :value="Jumble.FITTING" />
      </el-select>
    </template>
    <template #suffix><el-button :icon="Search" size="small" circle text @click="searchOnIcon" /></template>
  </el-autocomplete>
</template>
