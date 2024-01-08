import { Customer } from './customer.type'

export interface DeliveryRequest {
  customerID: string
  name: string
  address: string
  phone: string
}

export interface DeliveryResponse {
  customerID: string
  name: string
  address: string
  phone: string
  priority: number
  customer: Customer
}
