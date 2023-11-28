import { Link } from 'react-router-dom'
import PATH from '~/constants/path'

export default function RatingProducted() {
  return (
    <div className='overflow-hidden bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex rounded-t-sm bg-white text-base shadow-sm sm:text-lg'>
        <Link
          to={PATH.home}
          className='flex flex-1 items-center justify-center border-b-2 border-transparent border-b-football-primary bg-white py-3 text-center text-football-primary hover:text-football-primary'
        >
          Chờ đánh giá
        </Link>
        <Link
          to={PATH.home}
          className='flex flex-1 items-center justify-center border-b-2 border-transparent bg-white py-3 text-center hover:text-football-primary'
        >
          Đã đánh giá
        </Link>
      </div>

      {/* Body */}
      <div className='bg-transparent text-base sm:text-lg'>
        {/* Product List */}
        <div className='mt-4 w-full rounded-sm border-black/10 bg-white px-7 py-6 text-gray-800 shadow-sm xs:px-8'>
          <Link to={PATH.home} className='flex'>
            {/* image product */}
            <div className='h-[160px] w-[120px] flex-shrink-0 xs:h-[150px] xs:w-[150px] sm:h-[140px] sm:w-[140px]'>
              <img
                className='h-full w-full object-cover'
                src='https://m.media-amazon.com/images/I/51B0Mn43X8L._AC_UY1000_.jpg'
                alt='manchester city'
              />
            </div>
            {/* name product */}
            <div className='ml-4 flex h-[160px] flex-col justify-between xs:h-[150px] sm:ml-8 sm:h-[140px]'>
              <div className='line-clamp-2 sm:line-clamp-1'>
                Manchester City 22/23 Manchester City 22/23 Manchester City 22/23 Manc
              </div>
              <div className='flex flex-col items-start xs:flex-row xs:items-center'>
                <div className=''>Size: M</div>
                <div className='mx-4 hidden h-4 w-[1px] bg-football-gray7A/40 xs:inline-block'></div>
                <div className='mt-1 xs:mt-0'>Số lượng: 2</div>
              </div>
              <button className='w-[180px] rounded-sm bg-football-primary px-4 py-1 text-white shadow-sm hover:bg-football-primary/90'>
                Đánh giá
              </button>
            </div>
          </Link>
        </div>

        <div className='mt-3 w-full rounded-sm border-black/10 bg-white px-7 py-6 text-gray-800 shadow-sm xs:px-8'>
          <Link to={PATH.home} className='flex'>
            {/* image product */}
            <div className='h-[160px] w-[120px] flex-shrink-0 xs:h-[150px] xs:w-[150px] sm:h-[140px] sm:w-[140px]'>
              <img
                className='h-full w-full object-cover'
                src='https://m.media-amazon.com/images/I/51B0Mn43X8L._AC_UY1000_.jpg'
                alt='manchester city'
              />
            </div>
            {/* name product */}
            <div className='ml-4 flex h-[160px] flex-col justify-between xs:h-[150px] sm:ml-8 sm:h-[140px]'>
              <div className='line-clamp-2 sm:line-clamp-1'>
                Manchester City 22/23 Manchester City 22/23 Manchester City 22/23 Manc
              </div>
              <div className='flex flex-col items-start xs:flex-row xs:items-center'>
                <div className=''>Size: M</div>
                <div className='mx-4 hidden h-4 w-[1px] bg-football-gray7A/40 xs:inline-block'></div>
                <div className='mt-1 xs:mt-0'>Số lượng: 2</div>
              </div>
              <button className='w-[180px] rounded-sm bg-football-primary px-4 py-1 text-white shadow-sm hover:bg-football-primary/90'>
                Đánh giá
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
