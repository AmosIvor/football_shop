import { API } from '~/constants/api'
import { ProductListConfig } from './../types/product.type'
import { Product, ProductList } from '~/types/product.type'
import http from '~/utils/http'
import qs from 'qs'

const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<ProductList>(`${API.product}/filter-by`, {
      params,
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
    })
  },
  getByGroups(params: { groups?: string[] }) {
    return http.get<string[]>(`${API.product}/get-by-groups`, {
      params,
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
    })
  },
  getProductDetail(idProduct: string) {
    return http.get<Product>(`${API.product}/get-by-id/${idProduct}`)
  }
}

export default productApi
