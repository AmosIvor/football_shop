import http from '~/utils/http'
import { ChatRequest, ChatResponse } from './../types/chat.type'
import { API } from '~/constants/api'

const chatApi = {
  sendMessage(body: ChatRequest) {
    return http.post(`${API.chat}/send-message`, body)
  },
  getMessages(idRoom: number) {
    return http.get<ChatResponse[]>(`${API.chat}/get-messages/${idRoom}`)
  }
}

export default chatApi
