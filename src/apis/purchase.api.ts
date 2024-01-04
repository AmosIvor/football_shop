import { CartRequest, PurchaseUpdate } from './../types/purchase.type'
import { API } from '~/constants/api'
import { CartResponse } from '~/types/purchase.type'
import http from '~/utils/http'

const purchaseApi = {
  addToCart(body: CartRequest) {
    return http.post<CartResponse>(`${API.cart}/add-to-cart`, body)
  },
  getCart(idCustomer: string) {
    return http.get<CartResponse[]>(`${API.cart}/get-carts/${idCustomer}`)
  },
  increasePurchase(body: PurchaseUpdate) {
    return http.put<CartResponse>(`${API.cart}/increase/${body.customerID}/${body.productID}/${body.size}`)
  },
  decreasePurchase(body: PurchaseUpdate) {
    return http.put<CartResponse>(`${API.cart}/decrease/${body.customerID}/${body.productID}/${body.size}`)
  }
}
export default purchaseApi
