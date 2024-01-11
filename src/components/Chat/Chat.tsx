import { useState } from 'react'
import ICON from '~/assets/icons'

import ChatbotMessages from './components/ChatbotMessages'
import ChatMessages from './components/ChatMessages'

const typeChat = {
  chat: 'chat',
  chatbot: 'chatbot'
}

export default function Chat() {
  const [openChat, setOpenChat] = useState<boolean>(false)
  const [openChatBot, setOpenChatBot] = useState<boolean>(false)

  const handleOpen = (type: string) => {
    if (type === typeChat.chat) {
      setOpenChat(true)
    } else {
      setOpenChatBot(true)
    }
  }

  return (
    <>
      {!(openChat && openChatBot) && (
        <div className='fixed bottom-10 right-4 z-20 overflow-hidden rounded-[10px] shadow'>
          <button
            className=' flex flex-col items-center justify-center gap-x-3 bg-white px-3 py-3 text-xl font-semibold text-football-primary shadow'
            onClick={() => handleOpen(typeChat.chatbot)}
          >
            <img src={ICON.chatbot_64} alt='chatbot' className='h-7 w-7 object-cover' />
            <span className='text-lg'>Trợ lý</span>
          </button>

          <div className='h-[1px] w-full bg-gray-300/5'></div>

          <button
            className='flex w-full flex-col items-center justify-center gap-x-3 bg-white px-3 py-3 text-xl font-semibold text-football-primary shadow'
            onClick={() => handleOpen(typeChat.chat)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='h-7 w-7 fill-current'>
              <path d='M18 6.07a1 1 0 01.993.883L19 7.07v10.365a1 1 0 01-1.64.768l-1.6-1.333H6.42a1 1 0 01-.98-.8l-.016-.117-.149-1.783h9.292a1.8 1.8 0 001.776-1.508l.018-.154.494-6.438H18zm-2.78-4.5a1 1 0 011 1l-.003.077-.746 9.7a1 1 0 01-.997.923H4.24l-1.6 1.333a1 1 0 01-.5.222l-.14.01a1 1 0 01-.993-.883L1 13.835V2.57a1 1 0 011-1h13.22zm-4.638 5.082c-.223.222-.53.397-.903.526A4.61 4.61 0 018.2 7.42a4.61 4.61 0 01-1.48-.242c-.372-.129-.68-.304-.902-.526a.45.45 0 00-.636.636c.329.33.753.571 1.246.74A5.448 5.448 0 008.2 8.32c.51 0 1.126-.068 1.772-.291.493-.17.917-.412 1.246-.74a.45.45 0 00-.636-.637z'></path>
            </svg>
            <span className='text-lg'>Chat</span>
          </button>
        </div>
      )}

      {/* Chat */}
      {openChat && <ChatMessages setOpenChat={setOpenChat} />}

      {/* ChatBot */}
      {openChatBot && <ChatbotMessages setOpenChatBot={setOpenChatBot} />}
    </>
  )
}
