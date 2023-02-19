import { keyExists } from '@/utils/types';
import type { ProductFE, Product, CategoryTypes, SubCategoryTypes} from './types'
import { Category, SubCategory } from './types'

export const enum Jumble {
  DIGITAL = 'digital',
  BOOKS = 'books',
  SPORTS = 'sports',
  FITTING = 'fitting',
}

const menuMap = {
  [Jumble.DIGITAL]: '数码',
  [Jumble.BOOKS]: '书籍',
  [Jumble.SPORTS]: '运动',
  [Jumble.FITTING]: '家居',
} as const

export const stuff = {
  [Jumble.DIGITAL]: genStuff(Jumble.DIGITAL, '数码'),
  [Jumble.BOOKS]: genStuff(Jumble.BOOKS, '书籍'),
  [Jumble.SPORTS]: genStuff(Jumble.SPORTS, '运动'),
  [Jumble.FITTING]: genStuff(Jumble.FITTING, '家居'),
}

export interface StuffItem {
  id: string
  name: string
  descr: string
  createdTime: number
}

function genStuff(type: string, name: string) {
  const arr = new Array(20).fill(1)
  return arr.map((v, i) => {
    const ramdownStr = Math.random().toString(32).slice(2)
    const ownerId = Math.random().toString(36).slice(-8)
    return {
      id: `${type}_${ramdownStr}`,
      name: `${name}_${i}`,
      category: type,
      descr: `${name}_描述_${i}`,
      ownerId,
      createdTime: Date.now(),
    }
  })
}

const stuffTree = {
  [Jumble.DIGITAL]: {
    laptop: '笔记本电脑',
    cellphone: '手机',
    headset: '耳机',
    sportsWatch: '运动手表',
  },
  [Jumble.SPORTS]: {
    racket: '球拍',
  },
  [Jumble.BOOKS]: {
    scifi: '科幻',
  },
  [Jumble.FITTING]: {
    treadmill: '跑步机',
    spinning: '动感单车',
  },
}

export function getCategoryName(cateogry: CategoryTypes, subCategory?: SubCategoryTypes){
  const cc = stuffTree[cateogry]
  const c2 = subCategory && keyExists(cc, subCategory) ? cc[subCategory] : ''
  return {
    c1: menuMap[cateogry],
    c2
  }
}

export function genStuffMenu() {
  return Object.keys(stuffTree).reduce((arr, key) => {
    const subMenu = stuffTree[key as keyof typeof stuffTree]
    const subGroup = Object.keys(subMenu).map(subKey => ({
      value: subKey,
      label: subMenu[subKey as keyof typeof subMenu],
    }))
    arr.push({
      value: key,
      label: menuMap[key as keyof typeof menuMap],
      children: subGroup,
      subMenuType: 'item',
    })

    return arr
  }, [] as StuffMenu[])
}

type StuffMenu = {
  value: string
  label: string
  subMenuType?: 'group' | 'item'
  children?: StuffMenu[]
}

export function transProductToServer(product: ProductFE): Product {
  const key = product.category
  return {
    ...product,
    category: Category[key],
    subCategory: product.subCategory ? SubCategory[product.subCategory] : 0,
  }
}

export function transProductToFE(product: Product): ProductFE{
  const key = product.category
  const val = Category[key] as CategoryTypes
  return {
    ...product,
    category: val,
    subCategory: product.subCategory ? SubCategory[product.subCategory] as SubCategoryTypes : undefined,
  }
}