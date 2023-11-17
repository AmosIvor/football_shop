import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import PATH from '~/constants/path'

export default function UserSideNav() {
  return (
    <div className='w-full rounded-sm bg-white px-5 py-5 text-lg font-normal shadow'>
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
        <NavLink
          to={PATH.profile}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end'>
            <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z'
                fill='#000'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.983 8.983 0 017.092 3.458A9.001 9.001 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.991 6.991 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z'
                fill='#000'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center'>
            <span className='mt-[2px]'>Tài khoản của tôi</span>
          </div>
        </NavLink>

        <NavLink
          to={PATH.changePassword}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end'>
            <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z'
                fill='#000'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.983 8.983 0 017.092 3.458A9.001 9.001 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.991 6.991 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z'
                fill='#000'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center'>
            <span className='mt-[2px]'>Đổi mật khẩu</span>
          </div>
        </NavLink>

        <NavLink
          to={PATH.historyPurchase}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end'>
            <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z'
                fill='#000'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.983 8.983 0 017.092 3.458A9.001 9.001 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.991 6.991 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z'
                fill='#000'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center'>
            <span className='mt-[2px]'>Lịch sử đơn hàng</span>
          </div>
        </NavLink>

        <NavLink
          to={PATH.ratingProducted}
          className={({ isActive }) =>
            classNames('mb-1 flex h-[50px] items-center gap-4', {
              'bg-gray-200/70 text-black': isActive,
              'bg-transparent text-black': !isActive
            })
          }
        >
          <div className='flex w-[25%] justify-end'>
            <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z'
                fill='#000'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.983 8.983 0 017.092 3.458A9.001 9.001 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.991 6.991 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z'
                fill='#000'
              />
            </svg>
          </div>
          <div className='flex w-[75%] items-center'>
            <span className='mt-[2px]'>Đánh giá sản phẩm</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
