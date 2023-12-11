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
  urlMain: string
  urlSub1: string
  urlSub2: string
  urlThumb: string
}

export type ProductList = Product[]

export interface ProductListConfig {
  page?: number
  limit?: number
  price_min?: number
  price_max?: number
  category?: string
}
