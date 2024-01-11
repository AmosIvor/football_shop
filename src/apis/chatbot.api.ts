import httpChatbot from '~/utils/httpChatbot'
import { ChatbotRequest, ChatbotResponse } from './../types/chatbot.type'

const chatbotApi = {
  queryFromCustomer(body: ChatbotRequest) {
    return httpChatbot.post<ChatbotResponse>('chatbot', body)
  },
  getHome() {
    return httpChatbot.get<string>()
  }
}

export default chatbotApi
