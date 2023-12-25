import { SORT_BY } from './../constants/product'
export interface Product {
  id: string
  name: string
  club: string
  nation: string
  season: string
  price: number
  sizeS: number
  sizeM: number
  sizeL: number
  sizeXL: number
  status: string
  timeAdded: string
  description: string
  point: number
  sold: number
  urlMain: string
  urlSub1: string
  urlSub2: string
  urlThumb: string
}

export type ProductList = Product[]

export interface ProductListConfig {
  names?: string
  seasons?: string
  club?: boolean
  nation?: boolean
  minPrice?: number
  maxPrice?: number
  sortBy?: keyof typeof SORT_BY
  descending?: boolean
  sizeS?: boolean
  sizeM?: boolean
  sizeL?: boolean
  sizeXL?: boolean
  page?: number
  productPerPage?: number
  category?: string
}
