import { Link } from 'react-router-dom'
import PATH from '~/constants/path'
// import useQueryParams from '~/hooks/useQueryParams'

export default function HistoryPurchase() {
  // const searchParams = useQueryParams()

  return (
    <div className='overflow-hidden bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex rounded-t-sm bg-white text-lg shadow-sm'>
        <Link
          to={PATH.home}
          className='flex flex-1 items-center justify-center border-b-2 border-transparent border-b-football-primary bg-white py-3 text-center text-football-primary hover:text-football-primary'
        >
          Tất cả
        </Link>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Link
              to={PATH.home}
              className='flex flex-1 items-center justify-center border-b-2 border-transparent bg-white py-3 text-center hover:text-football-primary'
              key={index}
            >
              Tất cả
            </Link>
          ))}
      </div>

      {/* Body */}
      <div className='bg-transparent'>
        {/* Product List */}
        <div className='mt-4 w-full rounded-sm border-black/10 bg-white px-8 py-6 text-gray-800 shadow-sm'>
          <Link to={PATH.detailHistoryPurchase} className='flex'>
            <div className='flex basis-[70%] overflow-hidden'>
              <div className='h-[120px] w-[120px] flex-shrink-0'>
                <img
                  className='h-full w-full object-cover'
                  src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                  alt='manchester city'
                />
              </div>
              {/* name product */}
              <div className='ml-3 flex h-[120px] flex-grow flex-col items-stretch justify-between overflow-hidden'>
                <div className='line-clamp-2'>Manchester City 22/23</div>
                <div className=''>Size: M</div>
                <div className=''>x 2</div>
              </div>
            </div>
            <div className='-mt-5 flex flex-shrink-0 basis-[30%] items-center justify-end'>
              <span className='truncate text-football-gray7A/50 line-through'>₫160.000</span>
              <span className='ml-4 truncate text-football-primary'>₫110.000</span>
            </div>
          </Link>
          <div className='mb-4 mt-6 h-[1px] w-full bg-football-gray7A/30'></div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='-mt-[2px] mr-3 h-5 w-5 stroke-[#cd151c]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                />
              </svg>

              <span className='hidden text-[#26aa99]'>Giao hàng thành công</span>
              <div className='mx-3 hidden h-[50%] w-[1px] bg-football-gray7A'></div>
              <span className='font-semibold uppercase text-[#cd151c]'>Đã huỷ</span>
            </div>
            <div>
              <span>Tổng giá tiền</span>
              <span className='ml-4 text-[28px] text-football-primary'>₫160.000</span>
            </div>
          </div>
        </div>
        <div className='mt-3 w-full rounded-sm border-black/10 bg-white px-8 py-6 text-gray-800 shadow-sm'>
          <Link to={PATH.home} className='flex'>
            <div className='flex basis-[70%] overflow-hidden'>
              <div className='h-[120px] w-[120px] flex-shrink-0'>
                <img
                  className='h-full w-full object-cover'
                  src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                  alt='manchester city'
                />
              </div>
              {/* name product */}
              <div className='ml-3 flex h-[120px] flex-grow flex-col items-stretch justify-between overflow-hidden'>
                <div className='line-clamp-2'>Manchester City 22/23</div>
                <div className=''>Size: M</div>
                <div className=''>x 2</div>
              </div>
            </div>
            <div className='-mt-5 flex flex-shrink-0 basis-[30%] items-center justify-end'>
              <span className='truncate text-football-gray7A/50 line-through'>₫160.000</span>
              <span className='ml-4 truncate text-football-primary'>₫110.000</span>
            </div>
          </Link>
          <div className='mb-4 mt-6 h-[1px] w-full bg-football-gray7A/30'></div>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <svg
                enableBackground='new 0 0 15 15'
                viewBox='0 0 15 15'
                x={0}
                y={0}
                className='mr-3 h-5 w-5 stroke-[#26aa99]'
              >
                <g>
                  <line fill='none' strokeLinejoin='round' strokeMiterlimit={10} x1='8.6' x2='4.2' y1='9.8' y2='9.8' />
                  <circle cx={3} cy='11.2' fill='none' r={2} strokeMiterlimit={10} />
                  <circle cx={10} cy='11.2' fill='none' r={2} strokeMiterlimit={10} />
                  <line fill='none' strokeMiterlimit={10} x1='10.5' x2='14.4' y1='7.3' y2='7.3' />
                  <polyline
                    fill='none'
                    points='1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                  <polyline
                    fill='none'
                    points='9.9 3.8 14 3.8 14.5 10.2 11.9 10.2'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </g>
              </svg>
              <span className='text-[#26aa99]'>Giao hàng thành công</span>
              <div className='mx-3 h-[50%] w-[1px] bg-football-gray7A/40'></div>
              <span className='font-semibold uppercase text-football-primary'>Hoàn thành</span>
            </div>
            <div>
              <span>Tổng giá tiền</span>
              <span className='ml-4 text-[28px] text-football-primary'>₫160.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
