import { Link } from 'react-router-dom'
import PATH from '~/constants/path'
import Popover from '../Popover'
import PopoverNotArrow from '../PopoverNotArrow'

export default function Header() {
  return (
    <div className='flex w-full justify-center bg-gradient-to-b from-football-primary/20 to-white pb-[11px]'>
      <div className='asir-container'>
        <div className='lg:gap-15 mt-5 flex items-center justify-between gap-10 md:justify-start xl:gap-20'>
          <Link to='/' className='text-[28px] font-bold text-football-primary md:text-[30px] xl:text-[34px]'>
            <span className='text-football-blue11'>HVPP </span>
            <span>Sports</span>
          </Link>

          <div className='hidden h-[38px] grow rounded-md bg-white md:flex xl:h-[44px]'>
            <input
              type='text'
              className='flex w-[100%] items-center rounded rounded-bl-md rounded-tl-md border-none pl-6 pr-3 text-base font-normal outline-none lg:text-lg'
              placeholder='Tìm kiếm'
            />
            <button className='rounded-br-md rounded-tr-md border-none bg-football-primary px-7'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>

          <div className='flex cursor-pointer items-center justify-end text-football-blue11 hover:text-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mr-[6px] h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>

            <span className='hidden font-semibold capitalize lg:inline-block'>Tiếng Việt</span>
            <span className='inline-block font-semibold capitalize lg:hidden'>VI</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='ml-2 h-4 w-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </div>
        </div>

        <div className='navbar-container mt-5 flex items-center justify-between font-semibold capitalize text-football-blue11'>
          <div className='left-container flex  items-center gap-4 lg:gap-6 xl:gap-10'>
            <Link to='' className='inline-block text-football-blue11 md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </Link>
            <Link to='/products' className='asir-item-new-arrival hidden text-[#cd151c] md:inline-block'>
              Hàng mới về
            </Link>
            <Link to='/products' className='asir-top-menu-item hidden md:inline-block'>
              Câu lạc bộ
            </Link>
            <Link to='/products' className='asir-top-menu-item hidden md:inline-block'>
              Đội tuyển quốc gia
            </Link>
            <PopoverNotArrow
              className=''
              placement='bottom'
              renderPopover={
                <div className='grid grid-cols-12 gap-x-20 bg-gray-200 px-5 py-4'>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <div className='col-span-2 flex flex-col gap-2 text-base' key={index}>
                        <div className='mb-2 font-semibold uppercase'>Premier League</div>
                        <div className='font-normal capitalize'>Manchester City</div>
                        <div className='font-normal capitalize'>Manchester City</div>
                        <div className='font-normal capitalize'>Manchester City</div>
                        <div className='font-normal capitalize'>Manchester City</div>
                      </div>
                    ))}
                </div>
              }
            >
              <Link to='/products' className='asir-top-menu-item hidden md:inline-block'>
                Test
              </Link>
            </PopoverNotArrow>
          </div>
          <div className='right-container x flex items-center justify-end gap-8 lg:gap-6 xl:gap-10'>
            <Link to={PATH.cart} className='flex items-center'>
              <div className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='relative h-6 w-6 stroke-football-blue11'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
                <div className='absolute left-[11px] top-[-5px] z-10 rounded-full bg-football-primary px-[8px] py-[1px] text-xs'>
                  1
                </div>
              </div>
              <span className='ml-[14px] hidden lg:inline-block'>Giỏ hàng</span>
            </Link>
            {/* <Link to={PATH.profile} className='flex items-center'>
              <div className='flex h-[24px] w-[24px] items-center justify-center'>
                <img
                  src='https://bizweb.dktcdn.net/100/438/408/themes/919724/assets/icon-user.svg?1699408922234'
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              <span className='ml-2 hidden xl:inline-block'>Đăng ký / Đăng nhập</span>
            </Link> */}

            <Link to={PATH.profile} className='flex items-center'>
              <div className='h-[24px] w-[24px] overflow-hidden rounded-full'>
                <img
                  src='https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              <span className='ml-2 hidden normal-case lg:inline-block'>tuanvu@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
