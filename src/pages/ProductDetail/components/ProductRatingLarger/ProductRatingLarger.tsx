export default function ProductRatingLarger() {
  return (
    <div className='flex items-center gap-[6px]'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <svg width={32} height={32} className='fill-football-primary' key={index} xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.97 31.558L16 27.145l8.03 4.413c1.157.635 2.503-.399 2.281-1.752l-1.53-9.332 6.488-6.611c.94-.958.425-2.635-.87-2.832l-8.977-1.363L17.41 1.17a1.541 1.541 0 00-2.82 0l-4.012 8.498-8.976 1.363c-1.295.197-1.811 1.874-.87 2.832l6.488 6.611-1.532 9.332c-.221 1.353 1.125 2.387 2.281 1.752z'
              className='fill-inherit'
            />
          </svg>
        ))}
    </div>
  )
}
