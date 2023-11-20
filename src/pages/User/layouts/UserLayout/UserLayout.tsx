import { Outlet } from 'react-router-dom'
import UserSideNav from '../../components/UserSideNav'

export default function UserLayout() {
  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
          {/* User Side Nav */}
          <div className='md:col-span-4 lg:col-span-3'>
            <UserSideNav />
          </div>

          {/* Page User */}
          <div className='md:col-span-8 lg:col-span-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
