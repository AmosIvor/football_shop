import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '~/contexts/app.context'
import ICON from '~/assets/icons'
import IMAGE from '~/assets/images'
import LogoShop from '../LogoShop'
import { Customer } from '~/types/customer.type'
import Admin from './components/Admin'
import Client from './components/Client'
import { useMutation } from '@tanstack/react-query'
import chatbotApi from '~/apis/chatbot.api'
import { ChatbotSchema, chatbotSchema } from '~/utils/rules'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { generateRandomString } from '~/utils/utils'
import { MessageChatBot } from '~/types/chatbot.type'
import { ChatContext } from '~/contexts/chat.context'

const typeChat = {
  chat: 'chat',
  chatbot: 'chatbot'
}

type FormData = ChatbotSchema

export default function Chat() {
  const { profile } = useContext(AppContext)
  const messageEndRef = useRef<HTMLDivElement>(null)
  const [openChat, setOpenChat] = useState<boolean>(false)
  const [openChatBot, setOpenChatBot] = useState<boolean>(false)
  const { messages, setMessages } = useContext(ChatContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
    setFocus
  } = useForm<FormData>({
    defaultValues: {
      message: ''
    },
    resolver: yupResolver(chatbotSchema)
  })

  useEffect(() => {
    if (messageEndRef) {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  useEffect(() => {
    reset({
      message: ''
    })
  }, [isSubmitSuccessful, reset])

  useEffect(() => {
    setFocus('message')
  }, [isSubmitSuccessful, setFocus])

  const chatbotMutation = useMutation({
    mutationFn: chatbotApi.queryFromCustomer
  })

  const onSumbitChat = handleSubmit(async (data) => {
    await setMessages((prev) => [
      ...prev,
      {
        isClient: true,
        message: data.message
      }
    ])

    chatbotMutation.mutate(
      {
        userId: profile?.id || generateRandomString(),
        userQuery: data.message
      },
      {
        onSuccess: (data) => {
          console.log('data chat', data)
          setMessages((prev) => [
            ...prev,
            {
              isClient: false,
              message: data.data.chatbotResponse
            }
          ])
        }
      }
    )

    setFocus('message')
  })

  const handleOpen = (type: string) => {
    if (type === typeChat.chat) {
      setOpenChat(true)
    } else {
      setOpenChatBot(true)
    }
  }
  const handleHide = (type: string) => {
    if (type === typeChat.chat) {
      setOpenChat(false)
    } else {
      setOpenChatBot(false)
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
      {openChat && (
        <div className='fixed bottom-0 right-4 z-20 flex h-[420px] w-[360px] flex-col rounded-t-[6px] bg-white text-base font-normal shadow'>
          {/* header */}
          <div className='flex items-center justify-between px-3 py-2'>
            <div className='text-xl font-semibold text-football-primary'>HVPP Chat</div>
            <button
              className='rounded-[4px] p-[6px] hover:bg-football-primary/10 hover:text-football-gray7A'
              onClick={() => handleHide(typeChat.chat)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='h-[1px] w-full bg-football-gray7A/30 shadow'></div>

          {/* chat content */}
          <div className='w-full grow overflow-y-auto scroll-smooth px-3 pt-5'>
            <div className='mb-4 mt-2 flex w-full flex-col items-center justify-center gap-y-2'>
              <LogoShop />
              <span>HVPP Sports - TP.HCM</span>
            </div>

            {/* content chat */}
            <div className='mb-3 text-center text-football-gray7A'>07/11/2023</div>
            {/* admin */}
            <div className='mb-3 flex w-[80%] items-end gap-x-2'>
              <div className='h-7 w-7 shrink-0 overflow-hidden rounded-full border shadow'>
                <img src={IMAGE.logo} alt='logo' className='h-full w-full object-cover' />
              </div>
              <div className='flex flex-col gap-y-1'>
                {Array(3)
                  .fill(0)
                  .map((item, index) => (
                    <div
                      className='rounded-l-[4px] rounded-r-[18px] bg-football-gray7A/10 px-3 py-[6px] text-gray-600 first:rounded-tl-[18px] last:rounded-bl-[18px]'
                      key={index}
                    >
                      Hello my name is Vu and I am from Vietnam hehe
                    </div>
                  ))}
              </div>
            </div>

            {/* client */}
            <div className='mb-3 flex w-full'>
              <div className='w-[20%]'></div>
              <div className='flex w-[80%] items-end gap-x-2'>
                <div className='flex flex-col gap-y-1'>
                  {Array(3)
                    .fill(0)
                    .map((item, index) => (
                      <div
                        className='rounded-l-[18px] rounded-r-[4px] bg-football-primary/80 px-3 py-[6px] text-gray-900 first:rounded-tr-[18px] last:rounded-br-[18px]'
                        key={index}
                      >
                        Hello my name is Vu and I am from Vietnam hehe
                      </div>
                    ))}
                </div>
                <div className='h-7 w-7 shrink-0 overflow-hidden rounded-full border shadow'>
                  <img src={(profile as Customer).avatar} alt='logo' className='h-full w-full object-cover' />
                </div>
              </div>
            </div>
          </div>
          <div className='h-[1px] w-full bg-football-gray7A/30 shadow'></div>

          {/* submit chat */}
          <form className='flex h-[50px] items-center px-3 py-2'>
            {/* image */}
            <button className='text-gray7A inline-flex cursor-pointer justify-center rounded-full p-2 text-gray-600 hover:bg-football-primary/10 hover:text-football-gray7A'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
            </button>

            <textarea
              id='chat'
              rows={1}
              className='mx-2 block w-full resize-none rounded-lg border border-football-gray7A/30 bg-white p-2.5 text-base leading-5 text-black focus:border-football-primary'
              placeholder='Your message...'
            />

            <button
              type='submit'
              className='inline-flex cursor-pointer justify-center rounded-full p-2 text-football-primary hover:bg-football-primary/10'
            >
              <svg
                className='h-6 w-6 rotate-90'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* ChatBot */}
      {openChatBot && (
        <div className='fixed bottom-0 right-4 z-20 flex h-[420px] w-[360px] flex-col rounded-t-[6px] bg-white text-base font-normal shadow'>
          {/* header */}
          <div className='flex items-center justify-between px-3 py-2'>
            <div className='text-xl font-semibold text-football-primary'>HVPP Trợ lý</div>
            <button
              className='rounded-[4px] p-[6px] hover:bg-football-primary/10 hover:text-football-gray7A'
              onClick={() => handleHide(typeChat.chatbot)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='h-[1px] w-full bg-football-gray7A/30 shadow'></div>

          {/* chat content */}
          <div className='w-full grow overflow-y-auto scroll-smooth px-3 pt-5'>
            <div className='mb-4 mt-2 flex w-full flex-col items-center justify-center gap-y-2'>
              <LogoShop subContent='Trợ lý' />
              <span>HVPP Sports - TP.HCM</span>
            </div>

            {/* content chat */}
            <div className='mb-3 text-center text-football-gray7A'>07/11/2023</div>
            {messages.length !== 0 &&
              messages.map((item, index) => {
                if (item.isClient) {
                  return <Client key={index} message={item.message} />
                } else {
                  return <Admin key={index} message={item.message} />
                }
              })}
            <div ref={messageEndRef}></div>
          </div>
          <div className='h-[1px] w-full bg-football-gray7A/30 shadow'></div>

          {/* submit chat */}
          <form className='flex h-[50px] items-center px-3 py-2' onSubmit={onSumbitChat}>
            <textarea
              id='chat'
              rows={1}
              className='mx-2 block w-full resize-none rounded-lg border border-football-gray7A/30 bg-white p-2.5 text-base leading-5 text-black focus:border-football-primary'
              placeholder='Your message...'
              {...register('message')}
            />

            <button
              type='submit'
              className='inline-flex cursor-pointer justify-center rounded-full p-2 text-football-primary hover:bg-football-primary/10'
            >
              <svg
                className='h-6 w-6 rotate-90'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
