interface Props {
  rating: number
  activeClassName?: string
  noneActiveClassName?: string
}

export default function ProductRating({
  rating,
  activeClassName = 'fill-football-primary text-football-primary',
  noneActiveClassName = 'fill-current text-football-gray7A/50'
}: Props) {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    }
    return '0%'
  }
  return (
    <div className='flex items-center gap-[2px]'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative' key={index}>
            <div className='absolute left-0 top-0 h-full overflow-hidden' style={{ width: handleWidth(index + 1) }}>
              <svg width={14} height={15} className={activeClassName} xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.43 14.415L7 12.453l3.57 1.962c.513.282 1.111-.178 1.013-.779l-.68-4.147 2.883-2.939c.418-.426.189-1.17-.387-1.258L9.41 4.686 7.627.909a.685.685 0 00-1.254 0L4.59 4.686.6 5.292c-.575.087-.804.832-.386 1.258L3.098 9.49l-.68 4.147c-.1.601.499 1.061 1.013.779z'
                  className='fill-inherit'
                />
              </svg>
            </div>
            <svg width={14} height={15} className={noneActiveClassName} xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.43 14.415L7 12.453l3.57 1.962c.513.282 1.111-.178 1.013-.779l-.68-4.147 2.883-2.939c.418-.426.189-1.17-.387-1.258L9.41 4.686 7.627.909a.685.685 0 00-1.254 0L4.59 4.686.6 5.292c-.575.087-.804.832-.386 1.258L3.098 9.49l-.68 4.147c-.1.601.499 1.061 1.013.779z'
                className='fill-inherit'
              />
            </svg>
          </div>
        ))}
    </div>
  )
}
