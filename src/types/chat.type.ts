import { Customer } from './customer.type'

export interface ChatbotRequest {
  userId: string
  userQuery: string
}

export interface ChatbotResponse {
  intentName: string
  userQuery: string
  chatbotResponse: string
}

export interface MessageChatBot {
  isClient: boolean
  message: string
}

export interface ChatRequest {
  customerID: string
  content: string
  media?: string
  isCustomerSend: boolean
}

export interface ChatResponse {
  messageID: number
  roomID: number
  content: string
  media: string
  sendTime: string
  readTime: string
  isReaded: boolean
  isCustomerSend: boolean
  room: Room
}

export interface Room {
  roomID: number
  customerID: string
  customer: Customer
}
