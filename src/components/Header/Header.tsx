import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex w-full justify-center bg-gradient-to-b from-football-sub to-white pb-[11px] font-Nunito'>
      <div className='container'>
        <div className='top-header mt-5 grid grid-cols-12 gap-10'>
          <Link
            to='/'
            className='logo lg:[text-40px] col-span-3 self-center text-[28px] font-bold text-football-primary md:text-[34px]'
          >
            <span className='text-football-blue11'>HVPP </span>
            <span>Sports</span>
          </Link>

          <div className='col-span-6 flex rounded-lg bg-white'>
            <input
              type='text'
              className='w-[100%] rounded-bl-md rounded-tl-md border-none py-2 pl-6 pr-3 text-lg font-normal outline-none'
              placeholder='Tìm kiếm'
            />
            <button className='rounded-br-md rounded-tr-md border-none bg-football-primary px-7 py-2'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>

          <div className='col-span-2 col-start-11 self-center text-right'>0332 541 875</div>
        </div>
        <div className='navbar-container mt-5 flex items-center font-semibold capitalize text-football-blue11'>
          <div className='left-container flex basis-8/12 items-center gap-10'>
            <Link to='/register' className='asir-top-menu-item text-[#cd151c]'>
              Hàng mới về
            </Link>
            <Link to='/register' className='asir-top-menu-item hidden lg:inline-block'>
              Câu lạc bộ
            </Link>
            <Link to='/register' className='asir-top-menu-item hidden lg:inline-block'>
              Đội tuyển quốc gia
            </Link>
          </div>
          <div className='right-container flex basis-4/12 items-center justify-end gap-10'>
            <Link to='/register' className='flex items-center'>
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
              <span className='ml-[14px] hidden xl:inline-block'>Giỏ hàng</span>
            </Link>
            <Link to='/register' className='flex items-center'>
              <div className='flex h-[24px] w-[24px] items-center justify-center'>
                <img
                  src='https://bizweb.dktcdn.net/100/438/408/themes/919724/assets/icon-user.svg?1699408922234'
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              <span className='ml-2 hidden xl:inline-block'>Đăng ký / Đăng nhập</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
