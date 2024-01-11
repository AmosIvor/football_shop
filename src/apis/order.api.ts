import http from '~/utils/http'
import { HistoryPurchaseResponse, OrderDetailResponse, OrderRequest, OrderResponse } from './../types/order.type'
import { API } from '~/constants/api'
import { SuccessResponse } from '~/types/utils.type'
const orderApi = {
  createOrder(body: OrderRequest) {
    return http.post<SuccessResponse<OrderResponse>>(`${API.order}/new-order`, body)
  },
  getOrders(idCustomer: string, status: number) {
    return http.get<HistoryPurchaseResponse[]>(`${API.order}/get-by-customerID/${idCustomer}/${status}`)
  },
  getOrderDetail(idPurchase: number) {
    return http.get<OrderDetailResponse>(`${API.orderDetail}/get-detail/${idPurchase}`)
  }
}

export default orderApi
