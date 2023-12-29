import { CartRequest } from './../types/purchase.type'
import { API } from '~/constants/api'
import { CartResponse } from '~/types/purchase.type'
import http from '~/utils/http'

const purchaseApi = {
  addToCart(body: CartRequest) {
    return http.post<CartResponse>(`${API.cart}/add-to-cart`, body)
  }
}
export default purchaseApi
