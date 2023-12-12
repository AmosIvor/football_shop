import { API } from '~/constants/api'
import { ProductListConfig } from './../types/product.type'
import { Product, ProductList } from '~/types/product.type'
import http from '~/utils/http'

const PRICE_MIN = 0
const PRICE_MAX = 100000000

const productApi = {
  getProducts() {
    return http.get<ProductList>(`${API.product}/get-all`)
  },
  getProductsByPage({ page = 1, limit = 10 }: ProductListConfig) {
    return http.get<ProductList>(`${API.product}/get-all-by-page/${page}/${limit}`)
  },
  getProductsBestSeller() {
    return http.get<Product>(`${API.product}/best-seller`)
  },
  getProductsNewArrival() {
    return http.get<Product>(`${API.product}/new-arrival`)
  },
  getProductsByPrice({ price_min = PRICE_MIN, price_max = PRICE_MAX, page = 1, limit = 10 }: ProductListConfig) {
    return http.get<Product>(`${API.product}/get-by-price/${price_min}/${price_max}/${page}/${limit}`)
  },
  getProductsByCategory({ category, value, page, limit }: ProductListConfig) {
    return http.get<Product>(`${API.product}/get-by-cate/${category}/${value}/${page}/${limit}`)
  },

  getProductDetail(idProduct: string) {
    return http.get<Product>(`${API.product}/get-by-id/${idProduct}`)
  }
}

export default productApi
