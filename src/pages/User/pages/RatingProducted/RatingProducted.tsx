import { Link } from 'react-router-dom'
import PATH from '~/constants/path'

export default function RatingProducted() {
  return (
    <div className='overflow-hidden bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex rounded-t-sm bg-white text-lg shadow-sm'>
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
      <div className='bg-transparent'>
        {/* Product List */}
        <div className='mt-4 w-full rounded-sm border-black/10 bg-white px-8 py-6 text-gray-800 shadow-sm'>
          <Link to={PATH.home} className='flex'>
            <div className='flex basis-[70%] overflow-hidden'>
              <div className='h-[140px] w-[140px] flex-shrink-0'>
                <img
                  className='h-full w-full object-cover'
                  src='https://m.media-amazon.com/images/I/51B0Mn43X8L._AC_UY1000_.jpg'
                  alt='manchester city'
                />
              </div>
              {/* name product */}
              <div className='ml-8 flex h-[140px] flex-grow flex-col items-stretch justify-between overflow-hidden'>
                <div className='line-clamp-2'>Manchester City 22/23</div>
                <div className='flex items-center'>
                  <div className=''>Size: M</div>
                  <div className='mx-4 h-[50%] w-[1px] bg-football-gray7A/40'></div>
                  <div className=''>Số lượng: 2</div>
                </div>
                <button className='w-[35.3%] rounded-sm bg-football-primary px-4 py-1 text-white shadow-sm hover:bg-football-primary/90'>
                  Đánh giá
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className='mt-3 w-full rounded-sm border-black/10 bg-white px-8 py-6 text-gray-800 shadow-sm'>
          <Link to={PATH.home} className='flex'>
            <div className='flex basis-[70%] overflow-hidden'>
              <div className='h-[140px] w-[140px] flex-shrink-0'>
                <img
                  className='h-full w-full object-cover'
                  src='https://m.media-amazon.com/images/I/51B0Mn43X8L._AC_UY1000_.jpg'
                  alt='manchester city'
                />
              </div>
              {/* name product */}
              <div className='ml-8 flex h-[140px] flex-grow flex-col items-stretch justify-between overflow-hidden'>
                <div className='line-clamp-2'>Manchester City 22/23</div>
                <div className='flex items-center'>
                  <div className=''>Size: M</div>
                  <div className='mx-4 h-[50%] w-[1px] bg-football-gray7A/40'></div>
                  <div className=''>Số lượng: 2</div>
                </div>
                <button className='w-[35.3%] rounded-sm bg-football-primary px-4 py-1 text-white shadow-sm hover:bg-football-primary/90'>
                  Đánh giá
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
