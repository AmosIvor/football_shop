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
