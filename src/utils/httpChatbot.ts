import axios, { AxiosInstance } from 'axios'

class HttpChatbot {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://chatbot-hvpp-sports.vercel.app/',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const httpChatbot = new HttpChatbot().instance
export default httpChatbot
