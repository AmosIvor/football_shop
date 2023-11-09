export default function ProductRating() {
  return (
    <div className='flex items-center gap-[2px]'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <svg width={14} height={15} className='fill-football-primary' xmlns='http://www.w3.org/2000/svg' key={index}>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3.43 14.415L7 12.453l3.57 1.962c.513.282 1.111-.178 1.013-.779l-.68-4.147 2.883-2.939c.418-.426.189-1.17-.387-1.258L9.41 4.686 7.627.909a.685.685 0 00-1.254 0L4.59 4.686.6 5.292c-.575.087-.804.832-.386 1.258L3.098 9.49l-.68 4.147c-.1.601.499 1.061 1.013.779z'
              className='fill-inherit'
            />
          </svg>
        ))}
    </div>
  )
}
