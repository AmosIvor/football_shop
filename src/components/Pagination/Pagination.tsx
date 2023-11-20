import { Link } from 'react-router-dom'

export default function Pagination() {
  return (
    <div className='mt-6 flex flex-wrap justify-center'>
      <Link
        to=''
        className='mx-2 flex items-center justify-center rounded border border-football-primary bg-white px-3 py-[6px] text-base text-football-primary hover:bg-football-primary hover:text-white'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
        </svg>
      </Link>

      <Link
        to=''
        className='mx-2 rounded border border-football-primary bg-football-primary px-3 py-[6px] text-base  text-white hover:bg-football-primary hover:text-white'
      >
        1
      </Link>

      <Link
        to=''
        className='mx-2 rounded border border-football-primary bg-white px-3 py-[6px] text-base text-football-primary hover:bg-football-primary hover:text-white'
      >
        2
      </Link>

      <Link
        to=''
        className='mx-2 flex items-center justify-center rounded border border-football-primary bg-white px-3 py-[6px] text-base text-football-primary hover:bg-football-primary hover:text-white'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
        </svg>
      </Link>
    </div>
  )
}
