import classNames from 'classnames'
import { Link, createSearchParams } from 'react-router-dom'
import PATH from '~/constants/path'
import { PURCHASES_STATUS } from '~/constants/purchase'
import useQueryParams from '~/hooks/useQueryParams'

const purchaseTabs = [
  { status: PURCHASES_STATUS.all, name: 'Tất cả' },
  { status: PURCHASES_STATUS.waitForConfirmation, name: 'Chờ xác nhận' },
  { status: PURCHASES_STATUS.waitForGetting, name: 'Chờ lấy hàng' },
  { status: PURCHASES_STATUS.inProgress, name: 'Đang giao' },
  { status: PURCHASES_STATUS.delivered, name: 'Đã giao' },
  { status: PURCHASES_STATUS.cancelled, name: 'Đã hủy' }
]

export default function HistoryPurchase() {
  const queryParams: { status?: string } = useQueryParams()
  const status: number = Number(queryParams.status) || PURCHASES_STATUS.all

  const purchaseTabsLink = purchaseTabs.map((tab) => (
    <Link
      key={tab.status}
      to={{
        pathname: PATH.historyPurchase,
        search: createSearchParams({
          status: String(tab.status)
        }).toString()
      }}
      className={classNames(
        'md:first:grow-1 md:last:grow-1 flex w-auto flex-shrink-0 items-center justify-center border-b-2 border-transparent bg-white px-5 py-3 text-center hover:text-football-primary userScreenS:flex-1 userScreenS:px-0 lg:w-auto lg:flex-auto lg:flex-shrink-0 lg:px-5 xl:flex-1 xl:px-0',
        {
          'border-b-2 border-b-football-primary text-football-primary': status === tab.status,
          'border-transparent text-black': status !== tab.status
        }
      )}
    >
      {tab.name}
    </Link>
  ))

  return (
    <div className='bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex overflow-x-auto scroll-smooth rounded-t-sm bg-white text-base text-black shadow-sm scrollbar-hide sm:flex sm:flex-nowrap sm:overflow-auto sm:text-lg lg:overflow-x-scroll xl:overflow-auto'>
        {purchaseTabsLink}
      </div>

      {/* Body */}
      <div className='bg-transparent text-base text-black sm:text-lg'>
        {/* Product List */}
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              className='mt-4 w-full rounded-sm border-black/10 bg-white px-7 py-6 text-gray-800 shadow-sm xs:px-8'
              key={index}
            >
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
                      <span className='hidden truncate text-football-gray7A/50 line-through sm:inline-block'>
                        ₫160.000
                      </span>
                      <span className='ml-3 truncate text-black sm:ml-4 sm:text-football-primary'>₫110.000</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className='mb-4 mt-6 h-[1px] w-full bg-football-gray7A/30'></div>
              <div className='flex flex-col items-start sm:flex-row sm:items-end sm:justify-between'>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='-mt-[2px] mr-2 h-5 w-5 stroke-[#cd151c] xs:mr-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                    />
                  </svg>
                  <span className='font-semibold uppercase text-[#cd151c]'>Đã huỷ</span>
                </div>
                <div className='mt-2 flex w-full items-end justify-between sm:mt-0 sm:w-auto sm:items-end sm:justify-start'>
                  <span className='text-lg text-black'>Thành tiền</span>
                  <span className='ml-2 text-2xl text-football-primary xs:ml-4 sm:text-[28px]'>₫1.160.000</span>
                </div>
              </div>
            </div>
          ))}

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
          <div className='flex items-end justify-between'>
            <div className='flex items-center'>
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

              <span className='font-semibold uppercase text-[#27ae60]'>Hoàn thành</span>
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
