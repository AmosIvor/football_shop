import { createContext, useState } from 'react'
import { MessageChatBot } from '~/types/chatbot.type'

interface ChatContextInterface {
  messages: MessageChatBot[]
  setMessages: React.Dispatch<React.SetStateAction<MessageChatBot[]>>
}

const initialChatContext: ChatContextInterface = {
  messages: [],
  setMessages: () => null
}

export const ChatContext = createContext<ChatContextInterface>(initialChatContext)

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<MessageChatBot[]>(initialChatContext.messages)

  return <ChatContext.Provider value={{ messages, setMessages }}>{children}</ChatContext.Provider>
}
