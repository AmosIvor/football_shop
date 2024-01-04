import { CartRequest } from './../types/purchase.type'
import { API } from '~/constants/api'
import { CartResponse } from '~/types/purchase.type'
import http from '~/utils/http'

const purchaseApi = {
  addToCart(body: CartRequest) {
    return http.post<CartResponse>(`${API.cart}/add-to-cart`, body)
  },
  getCart(idCustomer: string) {
    return http.get<CartResponse[]>(`${API.cart}/get-carts/${idCustomer}`)
  }
}
export default purchaseApi
