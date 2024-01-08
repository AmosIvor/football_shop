import axios, { AxiosInstance } from 'axios'

class HttpAddress {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://provinces.open-api.vn/api/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const httpAddress = new HttpAddress().instance
export default httpAddress
