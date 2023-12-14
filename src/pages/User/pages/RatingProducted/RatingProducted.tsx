import classNames from 'classnames'
import { useState } from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import ModalRating from '~/components/Modal/ModalRating'
import ProductRating from '~/components/ProductRating'
import PATH from '~/constants/path'
import { RATING_STATUS } from '~/constants/rating'
import useQueryParams from '~/hooks/useQueryParams'

const ratingTabs = [
  { status: RATING_STATUS.waitingReview, name: 'Chờ đánh giá' },
  { status: RATING_STATUS.reviewed, name: 'Đã đánh giá' }
]

export default function RatingProducted() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const queryParams: { status?: string } = useQueryParams()
  const status: number = Number(queryParams.status) || RATING_STATUS.waitingReview

  const ratingTabsLink = ratingTabs.map((tab) => (
    <Link
      key={tab.status}
      to={{
        pathname: PATH.ratingProducted,
        search: createSearchParams({
          status: String(tab.status)
        }).toString()
      }}
      className={classNames(
        'flex flex-1 items-center justify-center bg-white py-3 text-center hover:text-football-primary',
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
    <div className='overflow-hidden bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex rounded-t-sm bg-white text-base shadow-sm sm:text-lg'>{ratingTabsLink}</div>

      {/* Body */}
      <div className='bg-transparent text-base sm:text-lg'>
        {/* Product List */}
        {status === RATING_STATUS.waitingReview && (
          <>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  className='mt-3 w-full rounded-sm border-black/10 bg-white px-7 py-6 text-gray-800 shadow-sm first:mt-4 xs:px-8'
                  key={index}
                >
                  <div className='flex'>
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
                      <button
                        className='w-[180px] rounded-sm bg-football-primary px-4 py-1 text-white shadow-sm hover:bg-football-primary/90'
                        onClick={() => setIsVisible(true)}
                      >
                        Đánh giá
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}

        {status === RATING_STATUS.reviewed && (
          <>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  className='mt-3 w-full rounded-sm border-black/10 bg-white px-7 py-6 text-gray-800 shadow-sm first:mt-4 xs:px-8'
                  key={index}
                >
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
                    <div className='ml-4 flex h-[160px] w-full flex-col justify-between xs:h-[150px] sm:ml-8 sm:h-[140px]'>
                      <div className='mb-1 flex items-start justify-between gap-x-10'>
                        <div className='line-clamp-1'>
                          Manchester City Manchester City Manchester City Manchester City 12 12 12 12 12 12
                        </div>
                        <button>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='h-6 w-6 flex-shrink-0'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                            />
                          </svg>
                        </button>
                      </div>
                      <ProductRating />
                      <div className='mt-[6px] text-football-gray7A/80'>21:17 17/10/2023</div>
                      <div className='mr-16 line-clamp-1 text-football-gray7A/80'>
                        Giao hàng nhanh, nhưng gói Giao hàng nhanh, nhưng gói Giao hàng nhanh, nhưng gói Giao hàng
                        nhanh, nhưng gói Giao hàng nhanh, nhưng góichưa kĩ
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </>
        )}
      </div>
      <ModalRating
        isVisible={isVisible}
        handleSubmit={() => setIsVisible(false)}
        handleCancel={() => setIsVisible(false)}
      />
    </div>
  )
}
