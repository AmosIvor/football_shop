import { API } from '~/constants/api'
import { ProductListConfig } from './../types/product.type'
import { Product, ProductList } from '~/types/product.type'
import http from '~/utils/http'

const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<ProductList>(`${API.product}/filter-by`, {
      params
    })
  },
  getLeagues(nameLeague: string) {
    return http.get<ProductList>(`${API.product}/get-by-league/${nameLeague}`)
  },
  getNations(nameNation: string) {
    return http.get<ProductList>(`${API.product}/get-by-nation/${nameNation}`)
  },
  getProductDetail(idProduct: string) {
    return http.get<Product>(`${API.product}/get-by-id/${idProduct}`)
  }
}

export default productApi
