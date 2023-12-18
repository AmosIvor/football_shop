import classNames from 'classnames'
import { omit } from 'lodash'
import { useMemo, useState } from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import DropdownMenu from '~/components/DropdownMenu'
import DropdownMenuNotArrow from '~/components/DropdownMenuNotArrow'
import Filter from '~/components/Filter'
import PATH from '~/constants/path'
import { ORDER, SORT_BY } from '~/constants/product'
import { QueryConfig } from '~/hooks/useQueryConfig'

interface Props {
  queryConfig: QueryConfig
}

const contentSortByPrices = {
  undefined: 'Giá',
  asc: 'Giá: Thấp đến Cao',
  desc: 'Giá: Cao đến Thấp'
}

export default function SortProductList({ queryConfig }: Props) {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const { sortBy, descending } = queryConfig

  const contentPrice = useMemo(() => {
    if (descending === String(ORDER.desc)) {
      return contentSortByPrices.desc
    } else if (descending === String(ORDER.asc)) {
      return contentSortByPrices.asc
    } else return contentSortByPrices.undefined
  }, [descending])

  const isActiveSortBy = (sortByValue: keyof typeof SORT_BY) => {
    return sortBy === sortByValue
  }

  const handleSort = (sortByValue: keyof typeof SORT_BY) => {
    navigate({
      pathname: PATH.products,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sortBy: sortByValue
          },
          ['descending']
        )
      ).toString()
    })
  }

  const handlePriceOrder = (isDescendingValue: boolean) => {
    navigate({
      pathname: PATH.products,
      search: createSearchParams({
        ...queryConfig,
        sortBy: SORT_BY.Price,
        descending: String(isDescendingValue)
      }).toString()
    })
  }

  const showModal = () => {
    setIsVisible(true)
  }

  const hideModal = () => {
    setIsVisible(false)
  }
  return (
    <div className='py-4'>
      <div className='flex flex-row flex-wrap items-center justify-between gap-2 text-lg font-normal'>
        <div className='hidden flex-wrap items-center gap-2 lg:flex'>
          <div>Sắp xếp theo</div>

          <button
            className={classNames(
              'ml-2 items-center justify-center border border-football-primary px-4 py-[6px] text-center text-base capitalize hover:border-football-primary hover:bg-football-primary hover:text-white',
              {
                'bg-football-primary text-white': isActiveSortBy(SORT_BY.Newest),
                'bg-white text-football-primary': !isActiveSortBy(SORT_BY.Newest)
              }
            )}
            onClick={() => handleSort(SORT_BY.Newest)}
          >
            Mới nhất
          </button>

          <button
            className={classNames(
              'ml-2 items-center justify-center border border-football-primary px-4 py-[6px] text-center text-base capitalize hover:border-football-primary hover:bg-football-primary hover:text-white',
              {
                'bg-football-primary text-white': isActiveSortBy(SORT_BY.TopSelling),
                'bg-white text-football-primary': !isActiveSortBy(SORT_BY.TopSelling)
              }
            )}
            onClick={() => handleSort(SORT_BY.TopSelling)}
          >
            Bán chạy
          </button>

          <DropdownMenuNotArrow
            renderPopover={
              <div className='flex w-[200px] flex-col rounded-sm border border-gray-200 bg-white shadow-md'>
                <button
                  className={classNames(
                    'flex items-start bg-white px-6 py-3 hover:bg-white hover:text-football-primary',
                    {
                      'text-football-primary': descending === String(ORDER.asc),
                      'text-black': !(descending === String(ORDER.asc))
                    }
                  )}
                  onClick={() => handlePriceOrder(ORDER.asc)}
                >
                  {contentSortByPrices.asc}
                </button>
                <button
                  className={classNames(
                    'flex items-start bg-white px-6 py-3 hover:bg-white hover:text-football-primary',
                    {
                      'text-football-primary': descending === String(ORDER.desc),
                      'text-black': !(descending === String(ORDER.desc))
                    }
                  )}
                  onClick={() => handlePriceOrder(ORDER.desc)}
                >
                  {contentSortByPrices.desc}
                </button>
              </div>
            }
          >
            {
              <div
                className={classNames(
                  'ml-2 flex w-[200px] cursor-pointer items-center justify-between border border-football-primary  px-4 py-[6px] text-base capitalize',
                  {
                    'bg-football-primary text-white':
                      descending === String(ORDER.asc) || descending === String(ORDER.desc),
                    'bg-white text-football-primary': !(
                      descending === String(ORDER.asc) || descending === String(ORDER.desc)
                    )
                  }
                )}
              >
                <span>{contentPrice}</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-[18px] w-[18px]'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                </svg>
              </div>
            }
          </DropdownMenuNotArrow>
        </div>

        <DropdownMenu
          className='lg:hidden'
          renderPopover={
            <div className='flex flex-col rounded-sm border border-gray-200 bg-white shadow-md'>
              <Link to={PATH.profile} className='bg-white px-6 py-3 hover:bg-white hover:text-football-primary'>
                Phổ biến
              </Link>
              <Link to={PATH.profile} className='bg-white px-6 py-3 hover:bg-white hover:text-football-primary'>
                Mới nhất
              </Link>
              <Link to={PATH.profile} className='bg-white px-6 py-3 hover:bg-white hover:text-football-primary'>
                Bán chạy
              </Link>
              <Link to={PATH.profile} className='bg-white px-6 py-3 hover:bg-white hover:text-football-primary'>
                Giá: Thấp đến Cao
              </Link>
              <Link to={PATH.profile} className='bg-white px-6 py-3 hover:bg-white hover:text-football-primary'>
                Giá: Cao đến Thấp
              </Link>
            </div>
          }
        >
          <div className='flex cursor-pointer items-center gap-x-2 text-lg'>
            <span>Sắp xếp</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='-mt-1 h-[18px] w-[18px]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </div>
        </DropdownMenu>

        <button
          className='flex items-center justify-start bg-transparent text-black hover:text-football-primary lg:hidden'
          onClick={showModal}
        >
          Bộ lọc
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='ml-[6px] h-[22px] w-[22px]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
            />
          </svg>
        </button>

        <div className='hidden items-center justify-self-end xl:flex'>
          <div>
            <span className='text-football-primary'>1</span>
            <span>/3</span>
          </div>

          <div className='ml-3 flex'>
            <Link
              to=''
              className='flex h-[37px] items-center justify-center rounded-bl-sm rounded-tl-sm border border-football-primary bg-white px-4 hover:bg-football-primary hover:text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </Link>
            <Link
              to=''
              className='flex h-[37px] items-center justify-center rounded-br-sm rounded-tr-sm border-b border-r border-t border-football-primary bg-white px-4 hover:bg-football-primary hover:text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Filter isVisible={isVisible} handleSubmit={hideModal} />
    </div>
  )
}
