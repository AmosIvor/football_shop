import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import ICON from '~/assets/icons'
import PATH from '~/constants/path'

export default function UserSideNav() {
  return (
    <div className='w-full rounded-sm bg-white px-7 py-5 text-lg font-normal shadow xs:px-5 lg:px-4 laptopXS:px-5'>
      {/* header */}
      <div className='flex flex-col items-center'>
        <div className='h-20 w-20 flex-shrink overflow-hidden rounded-full border border-black/10'>
          <img
            src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <span className='mt-2 font-semibold'>Amos Ivor</span>
      </div>

      <div className='mb-8 mt-5 h-[1px] w-full bg-gray-300/50'></div>

      {/* side nav */}
      <div className='flex flex-col'>
        {/* Profile */}
        <NavLink
          to={PATH.profile}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end xs:w-[29%] sm:w-[35%] md:w-[38%] lg:w-[21%] xl:w-[19%] laptopXS:w-[20%] 2xl:w-[20%] laptop:w-[25%]'>
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
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center xs:w-[71%] sm:w-[65%] md:w-[62%] lg:w-[79%] xl:w-[81%] laptopXS:w-[80%] 2xl:w-[80%] laptop:w-[75%]'>
            <span className='mt-[2px]'>Tài khoản của tôi</span>
          </div>
        </NavLink>

        {/* Address */}
        <NavLink
          to={PATH.address}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end xs:w-[29%] sm:w-[35%] md:w-[38%] lg:w-[21%] xl:w-[19%] laptopXS:w-[20%] 2xl:w-[20%] laptop:w-[25%]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center xs:w-[71%] sm:w-[65%] md:w-[62%] lg:w-[79%] xl:w-[81%] laptopXS:w-[80%] 2xl:w-[80%] laptop:w-[75%]'>
            <span className='mt-[2px]'>Sổ địa chỉ</span>
          </div>
        </NavLink>

        {/* ChangePassword */}
        <NavLink
          to={PATH.changePassword}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end xs:w-[29%] sm:w-[35%] md:w-[38%] lg:w-[21%] xl:w-[19%] laptopXS:w-[20%] 2xl:w-[20%] laptop:w-[25%]'>
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
                d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center xs:w-[71%] sm:w-[65%] md:w-[62%] lg:w-[79%] xl:w-[81%] laptopXS:w-[80%] 2xl:w-[80%] laptop:w-[75%]'>
            <span className='mt-[2px]'>Đổi mật khẩu</span>
          </div>
        </NavLink>

        {/* History Purchase */}
        <NavLink
          to={PATH.historyPurchase}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end xs:w-[29%] sm:w-[35%] md:w-[38%] lg:w-[21%] xl:w-[19%] laptopXS:w-[20%] 2xl:w-[20%] laptop:w-[25%]'>
            <div className='h-6 w-6'>
              <img src={ICON.historyPurchase_64} alt='history-purchase' className='h-full w-full object-cover' />
            </div>
          </div>
          <div className='flex w-[75%] items-center xs:w-[71%] sm:w-[65%] md:w-[62%] lg:w-[79%] xl:w-[81%] laptopXS:w-[80%] 2xl:w-[80%] laptop:w-[75%]'>
            <span className='mt-[2px]'>Lịch sử đơn hàng</span>
          </div>
        </NavLink>

        {/* Voucher */}
        <NavLink
          to={PATH.voucher}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end xs:w-[29%] sm:w-[35%] md:w-[38%] lg:w-[21%] xl:w-[19%] laptopXS:w-[20%] 2xl:w-[20%] laptop:w-[25%]'>
            <div className='h-6 w-6'>
              <img src={ICON.coupon_64} alt='coupon' className='h-full w-full object-cover' />
            </div>
          </div>
          <div className='flex w-[75%] items-center xs:w-[71%] sm:w-[65%] md:w-[62%] lg:w-[79%] xl:w-[81%] laptopXS:w-[80%] 2xl:w-[80%] laptop:w-[75%]'>
            <span className='mt-[2px]'>Ví voucher</span>
          </div>
        </NavLink>

        {/* RatingProducted */}
        <NavLink
          to={PATH.ratingProducted}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end xs:w-[29%] sm:w-[35%] md:w-[38%] lg:w-[21%] xl:w-[19%] laptopXS:w-[20%] 2xl:w-[20%] laptop:w-[25%]'>
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
                d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center xs:w-[71%] sm:w-[65%] md:w-[62%] lg:w-[79%] xl:w-[81%] laptopXS:w-[80%] 2xl:w-[80%] laptop:w-[75%]'>
            <span className='mt-[2px]'>Đánh giá sản phẩm</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
