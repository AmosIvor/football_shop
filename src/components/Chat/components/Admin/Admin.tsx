import IMAGE from '~/assets/images'

interface Props {
  message: string
}

export default function Admin({ message }: Props) {
  return (
    <div className='mb-3 flex w-[80%] items-end gap-x-2'>
      <div className='h-7 w-7 shrink-0 overflow-hidden rounded-full border shadow'>
        <img src={IMAGE.logo} alt='logo' className='h-full w-full object-cover' />
      </div>
      <div className='flex flex-col gap-y-1'>
        <div className='rounded-l-[4px] rounded-r-[18px] bg-football-gray7A/10 px-3 py-[6px] text-gray-600 first:rounded-tl-[18px] last:rounded-bl-[18px]'>
          {message}
        </div>
      </div>
    </div>
  )
}
