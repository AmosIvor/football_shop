interface Props {
  classNameWrapper?: string
}

export default function QuantityController({ classNameWrapper = 'ml-10' }: Props) {
  return (
    <div className={`flex items-center ${classNameWrapper}`}>
      <button className='flex h-10 w-10 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
        </svg>
      </button>

      <div className=''>
        <input
          type='text'
          className='h-10 w-14 border-b border-t border-gray-300 bg-transparent p-1 text-center outline-none focus:border-gray-300 focus:ring-transparent'
        />
      </div>

      <button className='flex h-10 w-10 items-center justify-center rounded-r-sm border border-gray-300 text-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  )
}
