import { Customer } from './customer.type'
import { CartResponse } from './purchase.type'

export interface OrderRequest {
  customerID: string
  value: number
  payMethod: string
  deliveryMethod: string
  note: string
  shipping: number
  voucherID: string
  name: string
  phone: string
  address: string
  selectedProducts: ProductSelected[]
}

export interface ProductSelected {
  productID: string
  size: string
  quantity: number
}

export interface OrderResponse {
  address: string
  customer: Customer
  customerID: string
  deliveryDate: string
  deliveryMethod: string
  id: number
  isPaid: boolean
  name: string
  note: string
  payMethod: string
  phone: string
  shipping: number
  status: string
  timeCreate: string
  value: number
  voucherID: string
}
// voucher: Voucher

export interface HistoryPurchaseResponse extends OrderResponse {
  status: string
}

export type ProductPurchase = Omit<CartResponse, 'customerID' | 'productID' | 'customer'>

export interface OrderDetailResponse {
  order: HistoryPurchaseResponse
  products: ProductPurchase[]
}
