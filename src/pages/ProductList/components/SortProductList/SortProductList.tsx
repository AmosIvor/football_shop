import { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from '~/components/DropdownMenu'
import Filter from '~/components/Filter'
import PATH from '~/constants/path'

export default function SortProductList() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
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

          <button className='ml-2 items-center justify-center border border-football-primary bg-white px-4 py-[6px] text-center text-base capitalize text-football-primary hover:border-football-primary hover:bg-football-primary hover:text-white'>
            Phổ biến
          </button>

          <button className='ml-2 items-center justify-center border border-football-primary bg-white px-4 py-[6px] text-center text-base capitalize text-football-primary hover:border-football-primary hover:bg-football-primary hover:text-white'>
            Mới nhất
          </button>

          <button className='ml-2 items-center justify-center border border-football-primary bg-white px-4 py-[6px] text-center text-base capitalize text-football-primary hover:border-football-primary hover:bg-football-primary hover:text-white'>
            Bán chạy
          </button>

          <select className='ml-2 w-48 cursor-pointer appearance-none border border-football-primary bg-white px-4 py-[6px] text-base capitalize text-football-primary outline-none focus:border-football-primary'>
            <option value='' selected disabled className='bg-white text-gray-400'>
              Giá
            </option>
            <option className='bg-white text-black'>Giá: Thấp đến Cao</option>
            <option className='bg-white text-black'>Giá: Cao đến Thấp</option>
          </select>
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

        <div className='hidden items-center justify-self-end lg:flex'>
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
