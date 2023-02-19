export type Product = {
  id: string
  name: string
  imageUrls?: string[]
  category: Category
  subCategory?: SubCategory
  price: number
  descr: string
  createdTime: number
  ownerId: string
  hasInvoice?: boolean
}

export type ProductFE = {
  id: string
  name: string
  price: number
  imageUrls?: string[]
  category: CategoryTypes
  subCategory?: SubCategoryTypes
  descr: string
  createdTime: number
  ownerId: string
  hasInvoice?: boolean
}

// export const CategoryNames = [Category.digital, Category.books, Category.sports, Category.fitting]

export type CategoryTypes = keyof typeof Category
export type SubCategoryTypes = keyof typeof SubCategory
export type CategoryVal = {
  digital: Digital
  sports: Sports
  books: Books
  fitting: fitting
}

type Digital = 'laptop' | 'cellphone' | 'headset' | 'sportsWatch'
type fitting = 'treadmill' | 'spinning'
type Sports = 'racket'
type Books = 'scifi'

/** 如果用const 常量枚举，编译时会直接编译成值，比如 const digital = 0, 就不能用动态的方式访问 */
export enum Category {
  'digital',
  'books',
  'sports',
  'fitting'
}

export enum SubCategory {
  'laptop',
  'cellphone',
  'headset',
  'sportsWatch',
  'racket',
  'scifi',
  'treadmill',
  'spinning'
}