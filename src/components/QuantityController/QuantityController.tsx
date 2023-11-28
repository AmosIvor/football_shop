interface Props {
  classNameWrapper?: string
  heightWrapper?: string
  widthButtonStyle?: string
  widthInputStyle?: string
  sizeIconStyle?: string
}

export default function QuantityController({
  classNameWrapper = 'ml-10',
  heightWrapper = 'h-10',
  widthButtonStyle = 'w-10',
  widthInputStyle = 'w-14',
  sizeIconStyle = 'h-4 w-4'
}: Props) {
  return (
    <div className={`flex items-center ${classNameWrapper}`}>
      <button
        className={`flex ${heightWrapper} ${widthButtonStyle} items-center justify-center rounded-l-sm border border-gray-300 text-gray-600`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={sizeIconStyle}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
        </svg>
      </button>

      <div className=''>
        <input
          type='text'
          className={`${heightWrapper} ${widthInputStyle} border-b border-t border-gray-300 bg-transparent p-1 text-center outline-none focus:border-gray-300 focus:ring-transparent`}
        />
      </div>

      <button
        className={`flex ${heightWrapper} ${widthButtonStyle} items-center justify-center rounded-r-sm border border-gray-300 text-gray-600`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={sizeIconStyle}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  )
}
