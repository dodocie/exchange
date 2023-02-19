import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product, ProductFE } from '@/lib/types'
import { transProductToFE, transProductToServer } from '@/lib/jumble'

const useProduct = () => {
  const products = ref<Record<string, Product>>({})
  const setProduct = (product: ProductFE) => {
    products.value[product.id] = transProductToServer(product)
  }

  const getProducts = (ids: string[]) => {
    return ids.map(id=>products.value[id] && transProductToFE(products.value[id])).filter(v => !!v)
  }

  return {setProduct, getProducts}
}


export const useProductStore = defineStore('product', ()=>{
  const products = useProduct()
  return {...products}
})
