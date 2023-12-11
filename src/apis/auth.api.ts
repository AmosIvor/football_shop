import { AuthResponse } from '~/types/auth.type'
import { RegisterResponse } from '~/types/register.type'
import http from '~/utils/http'
import { RegisterSchema } from '~/utils/rules'

export type RegisterRequest = Omit<RegisterSchema, 'confirm_password'>

const authApi = {
  registerAccount(body: RegisterRequest) {
    return http.post<RegisterResponse>('/api/Accounts/register', body)
  },
  loginAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/api/Accounts/login', body)
  },
  logout() {
    return http.get('/api/Accounts/logout')
  }
}

export default authApi
