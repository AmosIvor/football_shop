import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import chatbotApi from '~/apis/chatbot.api'
import LogoShop from '~/components/LogoShop'
import { ChatContext } from '~/contexts/chat.context'
import { ChatbotSchema, chatbotSchema } from '~/utils/rules'
import { generateRandomString } from '~/utils/utils'
import Client from '../Client'
import Admin from '../Admin'
import { AppContext } from '~/contexts/app.context'

interface Props {
  setOpenChatBot: React.Dispatch<React.SetStateAction<boolean>>
}

type FormData = ChatbotSchema

export default function ChatbotMessages({ setOpenChatBot }: Props) {
  const { profile } = useContext(AppContext)
  const messageEndRef = useRef<HTMLDivElement>(null)
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
    reset({
      message: ''
    })
  }, [isSubmitSuccessful, reset])

  useEffect(() => {
    setFocus('message')
  }, [isSubmitSuccessful, setFocus])

  useEffect(() => {
    if (messageEndRef) {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

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
  return (
    <div className='fixed bottom-0 right-4 z-20 flex h-[420px] w-[360px] flex-col rounded-t-[6px] bg-white text-base font-normal shadow'>
      {/* header */}
      <div className='flex items-center justify-between px-3 py-2'>
        <div className='text-xl font-semibold text-football-primary'>HVPP Trợ lý</div>
        <button
          className='rounded-[4px] p-[6px] hover:bg-football-primary/10 hover:text-football-gray7A'
          onClick={() => setOpenChatBot(false)}
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
          <svg className='h-6 w-6 rotate-90' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
          </svg>
        </button>
      </form>
    </div>
  )
}
