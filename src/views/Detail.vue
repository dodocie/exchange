<script setup lang="ts">
import { useProductStore } from "@/stores/products";
import { ref, computed } from "vue";
import { ChatRound } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { ElMessageBox } from "element-plus";
import { getCategoryName } from "@/lib/jumble";

const route = useRoute();
console.log("route", route.params.id);
const productStore = useProductStore();
const detail = computed(() => {
  const id = route.params.id;
  const ids = typeof id === "string" ? [id] : id;
  return productStore.getProducts(ids)?.[0];
});
const pageHeader = computed(() => {
  if (!detail.value) return null;
  return getCategoryName(detail.value.category, detail.value.subCategory);
});

const like = ref(0);
const useLike = (val: number) => {
  like.value = val;
};

const onContact = () => {
  ElMessageBox.alert("功能尚未开放，敬请期待", "", {
    confirmButtonText: "返回",
  });
};
</script>

<template>
  <div v-if="detail" class="product-detail mt-4 pt-16 w-9/12 mx-auto">
    <el-breadcrumb v-if="pageHeader" separator="/">
      <el-breadcrumb-item :to="{ path: '/product', query: { category: detail.category } }"
        ><span v-text="pageHeader.c1"></span
      ></el-breadcrumb-item>
      <el-breadcrumb-item
        v-show="detail.subCategory"
        :to="{
          path: '/product',
          query: { category: detail.category, subCategory: detail.subCategory },
        }"
        ><span v-text="pageHeader.c2"></span
      ></el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>
    <section class="flex mt-6">
      <el-carousel class="grow" :interval="4000" type="card" height="150px">
        <el-carousel-item v-for="item in detail.imageUrls" :key="item">
          <img :src="item" alt="picture" />
        </el-carousel-item>
      </el-carousel>
      <el-card class="box-card ml-12 w-3/5" style="">
        <el-descriptions class="margin-top" :title="detail.name" :column="1" size="large">
          <template #extra>
            <div class="flex items-center">
              <el-rate
                v-model="like"
                @change="useLike"
                class="mr-2"
                size="large"
                :max="1"
                clearable
              />
              <el-tooltip content="联系卖家" placement="bottom" effect="light">
                <el-button
                  type="primary"
                  size="small"
                  :icon="ChatRound"
                  circle
                  @click="onContact"
                />
              </el-tooltip>
            </div>
          </template>
          <el-descriptions-item label="原价"
            ><span v-text="detail.price"></span
          ></el-descriptions-item>
          <el-descriptions-item label="描述"
            ><span v-text="detail.descr"></span
          ></el-descriptions-item>
        </el-descriptions>
        <el-tag v-show="detail.hasInvoice">有发票</el-tag>
      </el-card>
    </section>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
