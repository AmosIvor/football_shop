import LogoShop from '~/components/LogoShop'
import Admin from '../Admin'
import Client from '../Client'
import { useContext, useEffect, useState } from 'react'
import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useMutation } from '@tanstack/react-query'
import chatApi from '~/apis/chat.api'
import { Customer } from '~/types/customer.type'
import { AppContext } from '~/contexts/app.context'

interface Props {
  setOpenChat: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChatMessages({ setOpenChat }: Props) {
  const { profile } = useContext(AppContext)
  const [connection, setConnection] = useState<null | HubConnection>(null)
  // // const [inputText, setInputText] = useState('')

  // get all message api
  // const

  // send message api
  const sendMessageMutation = useMutation({
    mutationFn: chatApi.sendMessage
  })

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .configureLogging(LogLevel.Debug)
      .withUrl('https://localhost:7030/chathub', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build()
    setConnection(connect)
  }, [])

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          connection.on('ReceiveMessage', (message) => {
            console.log('message:', message)
          })
        })
        .catch((error) => console.log(error))
    }
  }, [connection])

  // const sendMessage = async () => {
  //   if (connection) await connection.send('SendMessage', 'hello Vu')
  // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('into submit')
    event.preventDefault()

    sendMessageMutation.mutate(
      {
        customerID: (profile as Customer).id,
        content: 'hello Vu tran',
        isCustomerSend: true
      },
      {
        onSuccess: (data) => {
          console.log('data chat', data)
        }
      }
    )
    connection?.invoke('SendMessage', 'hello Vu')
  }
  return (
    <div className='fixed bottom-0 right-4 z-20 flex h-[420px] w-[360px] flex-col rounded-t-[6px] bg-white text-base font-normal shadow'>
      {/* header */}
      <div className='flex items-center justify-between px-3 py-2'>
        <div className='text-xl font-semibold text-football-primary'>HVPP Chat</div>
        <button
          className='rounded-[4px] p-[6px] hover:bg-football-primary/10 hover:text-football-gray7A'
          onClick={() => setOpenChat(false)}
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
        <Admin message='hello' />
        <Client message='hello shop' />
      </div>
      <div className='h-[1px] w-full bg-football-gray7A/30 shadow'></div>

      {/* submit chat */}
      <form className='flex h-[50px] items-center px-3 py-2' onSubmit={handleSubmit}>
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
          <svg className='h-6 w-6 rotate-90' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
          </svg>
        </button>
      </form>
    </div>
  )
}
