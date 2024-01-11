import { Link } from 'react-router-dom'
import { ORDER_INFOR, orderStatusList } from '~/constants/order'
import PATH from '~/constants/path'
import { HistoryPurchaseResponse } from '~/types/order.type'

interface Props {
  status: string
  idPurchase: number
}

export default function ProductHistory({ status, idPurchase }: Props) {
  const indexStatus = orderStatusList.indexOf(status)

  return (
    <div className='mt-3 w-full rounded-sm border-black/10 bg-white px-7 py-6 text-gray-800 shadow-sm first:mt-4 xs:px-8'>
      <Link to={PATH.detailHistoryPurchase} className='flex'>
        <div className='h-[150px] w-[130px] flex-shrink-0 sm:h-[120px] sm:w-[120px]'>
          <img
            className='h-full w-full object-cover'
            src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
            alt='manchester city'
          />
        </div>
        {/* name product */}
        <div className='ml-3 flex h-[150px] grow flex-col justify-between text-black sm:h-[120px]'>
          <div className='line-clamp-2 sm:line-clamp-1'>
            Manchester City 22/23 Manchester City 22/23 Manchester City 22/23
          </div>

          <div className=''>Size: M</div>
          <div className='flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between'>
            <div className='hidden sm:inline-block'>x2</div>
            <span className='sm:hidden'>Số lượng: 2</span>
            <div className='mt-2 flex items-center sm:mt-0'>
              <span className='sm:hidden'>Đơn giá:</span>
              <span className='hidden truncate text-football-gray7A/50 line-through sm:inline-block'>₫160.000</span>
              <span className='ml-3 truncate text-black sm:ml-4 sm:text-football-primary'>₫110.000</span>
            </div>
          </div>
        </div>
      </Link>
      <div className='mb-4 mt-6 h-[1px] w-full bg-football-gray7A/30'></div>
      <div className='flex flex-col items-start sm:flex-row sm:items-end sm:justify-between'>
        <div className='flex items-center'>
          {/* svg */}

          {(status === orderStatusList[1] || status === orderStatusList[2]) && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='-mt-[4px] mr-2 h-5 w-5 stroke-black xs:mr-3'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
            </svg>
          )}

          {status === orderStatusList[3] && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='-mt-[4px] mr-2 h-5 w-5 stroke-football-primary xs:mr-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
              />
            </svg>
          )}

          {status === orderStatusList[4] && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='-mt-[2px] mr-3 h-5 w-5 stroke-[#27ae60]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
              />
            </svg>
          )}
          <span className={`font-semibold uppercase ${ORDER_INFOR[indexStatus].textColor}`}>
            {ORDER_INFOR[indexStatus].statusVI}
          </span>
        </div>
        <div className='mt-2 flex w-full items-end justify-between sm:mt-0 sm:w-auto sm:items-end sm:justify-start'>
          <span className='text-lg text-black'>Thành tiền</span>
          <span className='ml-2 text-2xl text-football-primary xs:ml-4 sm:text-[28px]'>₫1.160.000</span>
        </div>
      </div>
    </div>
  )
}
