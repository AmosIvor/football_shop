import { UserPassword } from './../types/user.type'
import { API } from '~/constants/api'
import { AuthResponse } from '~/types/auth.type'
import { RegisterResponse } from '~/types/register.type'
import http from '~/utils/http'
import { RegisterSchema } from '~/utils/rules'

export type RegisterRequest = Omit<RegisterSchema, 'confirm_password'>

const authApi = {
  registerAccount(body: RegisterRequest) {
    return http.post<RegisterResponse>(`${API.auth}/register`, body)
  },
  loginAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>(`${API.auth}/login`, body)
  },
  changePassword(params: UserPassword) {
    return http.put<{ message: string }>(`${API.auth}/change-password`, { params })
  },
  logout() {
    return http.get(`${API.auth}/logout`)
  }
}

export default authApi
