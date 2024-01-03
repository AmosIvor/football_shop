import { SuccessResponse } from 'src/types/utils.type'
import { Customer } from '~/types/customer.type'
import { UserUpdateRequestType } from './../types/user.type'
import http from '~/utils/http'

const userApi = {
  getProfile() {
    return http.get<SuccessResponse<Customer>>('api/Accounts/read-me')
  },
  updateInfo(body: UserUpdateRequestType) {
    return http.put<UserUpdateRequestType>('api/Customers/update-info', body)
  }
}

export default userApi
