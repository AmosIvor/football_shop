import { Customer } from './customer.type'
import { Product } from './product.type'

export interface CartResponse {
  customerID: string
  productID: string
  size: string
  quantity: number
  customer: Customer
  product: Product
}

export interface CartRequest {
  CustomerID: string
  ProductID: string
  Size: string
  Quantity: number
}
