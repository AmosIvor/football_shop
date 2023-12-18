import axios, { AxiosError, AxiosInstance } from 'axios'
import { AuthResponse } from '~/types/auth.type'
import {
  clearLocalStorage,
  getAccessTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
  setProfileToLocalStorage
} from './auth'
import { Customer } from '~/types/customer.type'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: 'https://localhost:7030/',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Add a request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        console.log('url before: ', url)
        // if (url === '/login' || url === '/register')
        if (url === 'api/Accounts/login') {
          console.log('into login http')
          const data = response.data as AuthResponse
          this.accessToken = `Bearer ${data.data.access_token}`

          // Save to local storage
          setAccessTokenToLocalStorage(this.accessToken)
          const customer: Customer = data.data.customer
          customer.email = data.data.email
          customer.role = data.data.role
          console.log('customer http: ', customer)
          setProfileToLocalStorage(customer)
        } else if (url === 'api/Accounts/logout') {
          // clear storage
          this.accessToken = ''
          clearLocalStorage()
        }
        return response
      },
      function (error: AxiosError) {
        console.log(error)
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http
