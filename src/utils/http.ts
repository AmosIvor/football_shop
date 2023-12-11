import axios, { AxiosError, AxiosInstance } from 'axios'
import { AuthResponse } from '~/types/auth.type'
import {
  clearLocalStorage,
  getAccessTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
  setProfileToLocalStorage
} from './auth'
import { omit } from 'lodash'
import { User } from '~/types/user.type'

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
          console.log('config_request: ', config)
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
        console.log('response', response)
        const { url } = response.config
        // if (url === '/login' || url === '/register')
        if (url === '/api/Accounts/login') {
          const data = response.data as AuthResponse
          this.accessToken = `Bearer ${data.data.access_token}`

          // Save to local storage
          setAccessTokenToLocalStorage(this.accessToken)
          const user: User = omit(data.data, ['access_token'])
          setProfileToLocalStorage(user)
        } else if (url === '/api/Accounts/logout') {
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
