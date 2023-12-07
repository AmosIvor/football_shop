import { AuthResponse } from '~/types/auth.type'
import { Register as RegisterResponse } from '~/types/register.type'
import http from '~/utils/http'
import { RegisterSchema } from '~/utils/rules'

type RegisterRequest = Omit<RegisterSchema, 'confirm_password'>

const authApi = {
  registerAccount(body: RegisterRequest) {
    return http.post<RegisterResponse>('/register', body)
  },
  loginAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },
  logout() {
    return http.get('/logout')
  }
}

export default authApi
