import { Customer } from './customer.type'
import { User } from './user.type'
import { SuccessResponse } from './utils.type'

export type AuthResponse = SuccessResponse<{ access_token: string; customer: Customer } & User>
