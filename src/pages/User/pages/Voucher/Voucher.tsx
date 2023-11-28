import { Link } from 'react-router-dom'
import PATH from '~/constants/path'

export default function Voucher() {
  return (
    <div className='bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex rounded-t-sm bg-white text-base shadow-sm md:text-lg'>
        <Link
          to={PATH.home}
          className='flex flex-1 items-center justify-center border-b-2 border-transparent border-b-football-primary bg-white py-3 text-center text-football-primary hover:text-football-primary'
        >
          Mới nhất
        </Link>

        <Link
          to={PATH.home}
          className='flex flex-1 items-center justify-center border-b-2 border-transparent bg-white py-3 text-center hover:text-football-primary'
        >
          Phổ biến
        </Link>

        <Link
          to={PATH.home}
          className='flex flex-1 items-center justify-center border-b-2 border-transparent bg-white py-3 text-center hover:text-football-primary'
        >
          Sắp hết hạn
        </Link>
      </div>

      {/* Body */}
      <div className='mt-4 grid grid-cols-1 gap-y-4 rounded-sm bg-white px-7 py-6 shadow-sm xs:px-8 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-4 md:gap-x-5 md:gap-y-4 lg:gap-x-5 lg:gap-y-4 xl:gap-x-10 xl:gap-y-7'>
        {/* Voucher List */}
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              className='relative flex h-[120px] rounded-sm border border-football-gray7A/30 text-gray-800 shadow laptop:h-[140px]'
              key={index}
            >
              {/* <div className='my-5 border-b border-dashed pt-5'>
            <div className='absolute -left-2 -mt-2 h-5 w-5 rounded-full border border-football-gray7A/30 bg-white'></div>
            <div className='absolute -right-2 -mt-2 h-5 w-5 rounded-full border border-football-gray7A/30 bg-white'></div>
          </div> */}
              <div className='w-[120px] border-r border-dashed p-2 sm:w-[38%] md:w-[34%] lg:w-[40%] xl:w-[120px] laptop:w-[140px]'>
                <div className='flex h-full w-full flex-col items-center justify-center rounded-sm bg-football-primary/70 text-xl font-bold'>
                  <span className='text-football-blue11'>HVPP</span>
                  <span className='text-white'>Sports</span>
                </div>
              </div>
              <div className='flex flex-col justify-between p-2 text-base sm:w-[62%] md:w-[66%] md:text-lg lg:w-[60%] xl:w-auto'>
                <div className='flex flex-col'>
                  <span>Giảm 5%</span>
                  <span className='mt-[2px] text-base text-football-gray7A/80'>Cho đơn hàng từ 350K</span>
                </div>
                <div className='text-base text-football-gray7A/80'>HSD: 23/10/2023</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
