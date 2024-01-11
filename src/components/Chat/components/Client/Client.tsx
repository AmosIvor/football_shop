import { useContext } from 'react'
import { AppContext } from '~/contexts/app.context'
import { Customer } from '~/types/customer.type'

interface Props {
  message: string
}

export default function Client({ message }: Props) {
  const { profile } = useContext(AppContext)
  return (
    <div className='mb-3 flex w-full'>
      <div className='w-[20%]'></div>
      <div className='flex w-[80%] items-end justify-end gap-x-2'>
        <div className='flex flex-col gap-y-1'>
          <div className='rounded-l-[18px] rounded-r-[4px] bg-football-primary/80 px-3 py-[6px] text-gray-900 first:rounded-tr-[18px] last:rounded-br-[18px]'>
            {message}
          </div>
        </div>
        <div className='h-7 w-7 shrink-0 overflow-hidden rounded-full border shadow'>
          <img src={(profile as Customer).avatar} alt='logo' className='h-full w-full object-cover' />
        </div>
      </div>
    </div>
  )
}

// {Array(3)
//   .fill(0)
//   .map((_, index) => (
//     <div
//       className='rounded-l-[18px] rounded-r-[4px] bg-football-primary/80 px-3 py-[6px] text-gray-900 first:rounded-tr-[18px] last:rounded-br-[18px]'
//       key={index}
//     >
//       {message}
//     </div>
//   ))}
