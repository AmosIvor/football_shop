import { User } from '~/types/user.type'
import http from '~/utils/http'

const userApi = {
  getProfile() {
    return http.get<User>('api/Accounts/read-me')
  }
}

export default userApi
