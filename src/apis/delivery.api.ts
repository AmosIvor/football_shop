import { API } from '~/constants/api'
import { DeliveryResponse, DeliveryRequest } from './../types/delivery.type'
import http from '~/utils/http'

const deliveryApi = {
  getAddresses(idCustomer: string) {
    return http.get<DeliveryResponse[]>(`${API.delivery}/get-all/${idCustomer}`)
  },
  createAddress(body: DeliveryRequest) {
    return http.post<DeliveryResponse>(`${API.delivery}/new-info`, body)
  },
  updateAddress(priority: number, body: DeliveryRequest) {
    return http.put<DeliveryResponse>(`${API.delivery}/update/${priority}`, body)
  },
  setDefault({ idCustomer, priority }: { idCustomer: string; priority: number }) {
    return http.put(`${API.delivery}/set-default/${idCustomer}/${priority}`)
  },
  deleteAddress({ idCustomer, priority }: { idCustomer: string; priority: number }) {
    return http.delete(`${API.delivery}/delete/${idCustomer}/${priority}`)
  }
}

export default deliveryApi
