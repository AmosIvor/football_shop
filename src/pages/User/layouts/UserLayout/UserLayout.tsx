import { Outlet } from 'react-router-dom'
import UserSideNav from '../../components/UserSideNav'

export default function UserLayout() {
  return (
    <div className='bg-football-grayF6 py-6'>
      {/* <div className='asir-container'> */}
      <div className='mx-auto w-full px-0 xs:px-7 md:w-[90%] md:px-4 lg:w-[90%] xl:w-[90%] 2xl:w-[78%]'>
        <div className='grid grid-cols-12 gap-6'>
          {/* User Side Nav */}
          <div className='col-span-12 lg:col-span-4 xl:col-span-3 laptopXS:col-span-3 2xl:col-span-3'>
            <UserSideNav />
          </div>

          {/* Page User */}
          <div className='col-span-12 lg:col-span-8 xl:col-span-9 laptopXS:col-span-9 2xl:col-span-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
