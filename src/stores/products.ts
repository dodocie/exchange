import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product, ProductFE } from '@/lib/types'
import { transProductToFE, transProductToServer } from '@/lib/jumble'

const useProduct = () => {
  const products = ref<Record<string, Product>>({})
  const setProduct = (product: ProductFE) => {
    products.value[product.id] = transProductToServer(product)
  }
  const useProductState = (productGroup: Record<string, Product>) => {
    products.value = productGroup
  }

  const getProducts = (ids?: string[]) => {
    if(!ids) return Object.keys(products.value).map(id=>transProductToFE(products.value[id]))
    return ids.map(id=>products.value[id] && transProductToFE(products.value[id])).filter(v => !!v)
  }

  return {products, setProduct, getProducts, useProductState}
}


export const useProductStore = defineStore('product', ()=>{
  const products = useProduct()
  return {...products}
})
