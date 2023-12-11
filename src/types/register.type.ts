import { SuccessResponse } from './utils.type'

export type Register = {
  id: string
  name: string
  phone: string
  email: string
}

export type RegisterResponse = SuccessResponse<Register>
