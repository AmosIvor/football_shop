import { Link } from 'react-router-dom'

export default function Pagination() {
  return (
    <div className='mt-6 flex flex-wrap justify-center'>
      <Link
        to=''
        className='mx-2 rounded border border-football-primary bg-white px-3 py-[6px] text-base text-football-primary hover:bg-football-primary hover:text-white'
      >
        Trang trước
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
        className='mx-2 rounded border border-football-primary bg-white px-3 py-[6px] text-base text-football-primary hover:bg-football-primary hover:text-white'
      >
        Trang kế tiếp
      </Link>
    </div>
  )
}
