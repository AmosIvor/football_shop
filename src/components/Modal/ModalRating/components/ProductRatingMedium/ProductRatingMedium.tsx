export default function ProductRatingMedium() {
  return (
    <div className='flex items-center gap-[6px]'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <svg width={26} height={26} className='fill-football-primary' xmlns='http://www.w3.org/2000/svg' key={index}>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.456 25.677l6.543-3.596 6.544 3.596c.942.518 2.04-.325 1.858-1.427l-1.247-7.604 5.287-5.387c.766-.78.346-2.147-.71-2.308l-7.313-1.11-3.27-6.925c-.471-1-1.826-1-2.298 0L8.581 7.84 1.267 8.951c-1.055.16-1.475 1.527-.709 2.308l5.287 5.387-1.248 7.604c-.18 1.102.917 1.945 1.859 1.427z'
              className='fill-inherit'
            />
          </svg>
        ))}
    </div>
  )
}
