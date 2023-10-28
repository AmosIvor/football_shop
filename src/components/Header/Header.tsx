import { Link } from 'react-router-dom'
import user from '../../assets/icons/user.svg'

export default function Header() {
  return (
    <div className='flex h-[170px] w-full justify-center bg-gradient-to-b from-football-sub to-white font-Nunito'>
      <div className='w-[78%]'>
        <div className='top-header mt-5 flex items-center justify-between'>
          <Link
            to='/'
            className='logo lg:[text-40px] text-[28px] font-bold italic text-football-primary md:text-[34px]'
          >
            HVPP Sports
          </Link>
          <div className='phone'>0332 541 875</div>
        </div>
        <div className='navbar-container mt-5 flex items-center font-semibold uppercase'>
          <div className='left-container flex basis-8/12 items-center gap-10'>
            <Link to='/register' className='asir-top-menu-item'>
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
              <div className='cart'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
              </div>
              <span className='asir-top-menu-item hidden xl:inline-block'>Gio hang</span>
            </Link>
            <Link to='/register' className='flex items-center'>
              <div className='h-[40px] w-[40px]'>
                <img src={user} alt='' className='h-full w-full object-cover' />
              </div>
              <span className='asir-top-menu-item hidden xl:inline-block'>Đăng nhập</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
