import { Link } from 'react-router-dom'
import QuantityController from '~/components/QuantityController'
import PATH from '~/constants/path'

export default function Cart() {
  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='asir-container text-lg font-normal text-black'>
        <h1 className='text-lg font-bold uppercase text-football-primary'>Giỏ hàng</h1>
      </div>

      <div className='mx-auto w-full px-0 text-lg font-normal text-black sm:px-7 md:w-[90%] md:px-4 lg:w-[84%] xl:w-[78%]'>
        {/* Title Purchase */}
        <div className='mt-4 grid grid-cols-12 gap-3 rounded-[4px] bg-white px-7 py-3 text-base text-black shadow sm:px-10 md:px-9 md:text-base lg:px-10 lg:text-base xl:text-lg'>
          <div className='col-span-12 flex items-center sm:col-span-9 md:col-span-5 lg:col-span-4'>
            <input type='checkbox' className='h-5 w-5 bg-white text-football-primary' />
            <span className='ml-4'>Tất cả (5 sản phẩm)</span>
          </div>

          <div className='hidden gap-3 sm:col-span-3 sm:inline-block md:col-span-7 md:grid md:grid-cols-10 md:items-center md:justify-items-center md:gap-3 lg:col-span-8 lg:gap-5 2xl:gap-3'>
            <div className='hidden lg:col-span-2 lg:inline-block'>
              <span className=''>Kích thước</span>
            </div>
            <div className='col-span-2 text-right md:col-span-3 lg:col-span-2 2xl:col-span-3'>Đơn giá</div>
            <div className='hidden md:col-span-4 md:inline-block lg:col-span-3 2xl:col-span-2'>Số lượng</div>
            <div className='hidden md:col-span-3 md:inline-block md:justify-self-end lg:col-span-2 lg:justify-self-auto'>
              Thành tiền
            </div>
            <div className='hidden lg:col-span-1 lg:mt-[-5px] lg:inline-block lg:justify-self-end'>
              <svg width={20} height={21} fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8 4h4a2 2 0 10-4 0zM6.5 4a3.5 3.5 0 117 0h5.75a.75.75 0 110 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0113.026 21H6.974a3.75 3.75 0 01-3.733-3.389L2.07 5.5H.75a.75.75 0 010-1.5H6.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 101.5 0v-7.5zM12.25 8a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zm-7.516 9.467a2.25 2.25 0 002.24 2.033h6.052a2.25 2.25 0 002.24-2.033L16.424 5.5H3.576l1.158 11.967z'
                  fill='#7A7A9D'
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Purchases */}
        <div className='my-3 rounded-[4px] bg-white p-3 shadow sm:p-5'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              // item
              <div
                className='mb-3 mt-3 grid grid-cols-12 items-start gap-3 border border-gray-200  px-4 py-4 text-base text-black sm:px-5 md:px-4 md:text-base lg:items-center lg:px-5 lg:text-base xl:text-lg'
                key={index}
              >
                {/* checkbox, image, name item: all screens */}
                <div className='col-span-12 flex items-start sm:col-span-9 md:col-span-5 lg:col-span-4 lg:items-center'>
                  {/* Checkbox: all screens */}
                  <input type='checkbox' className='h-5 w-5 self-center bg-white text-football-primary lg:self-auto' />

                  {/* Image: all screens */}
                  <div className='mx-3 h-[140px] w-[100px] shrink-0 overflow-hidden rounded-[4px] shadow-sm xs:mx-4 xs:h-[160px] xs:w-[120px] sm:h-[140px] sm:w-[100px] md:h-[100px] md:w-[75px] lg:h-[65px] lg:w-[65px]'>
                    <img
                      src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                      alt=''
                      className='h-full w-full object-cover'
                    />
                  </div>

                  {/* Content */}
                  <div className='flex h-[140px] flex-grow flex-col justify-between xs:h-[160px] sm:h-[140px] md:h-[100px] lg:h-auto'>
                    {/* Name item: all screen */}
                    <span className='line-clamp-2'>Manchester City 22 / 23 Manchester City 22 / 23</span>

                    <div className='flex flex-col lg:hidden'>
                      {/* Size: (mini) 0 -> md */}
                      <span className='mb-0 sm:mb-2 md:mb-0'>Kích thước: M</span>

                      {/* Price: (mini) 0 -> xs */}
                      <div className='mb-1 flex flex-row items-center sm:hidden'>
                        <span className='text-football-gray7A line-through'>360.000đ</span>
                        <span className='ml-2 xs:ml-3'>219.000đ</span>
                      </div>

                      <div className='flex items-center justify-between md:hidden'>
                        {/* QuantityController: (mini) 0 -> sm */}
                        <QuantityController
                          classNameWrapper='ml-0'
                          sizeIconStyle='xs:h-4 xs:w-4 h-3 w-3'
                          heightWrapper='h-8 xs:h-10'
                          widthButtonStyle='w-8 xs:w-10'
                          widthInputStyle='w-12 xs:w-14'
                        />

                        {/* Button Delete: (mini) 0 -> xs */}
                        <button className='flex items-center bg-transparent sm:hidden'>
                          <svg
                            width={20}
                            height={21}
                            className='fill-football-gray7A'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M8 4h4a2 2 0 10-4 0zM6.5 4a3.5 3.5 0 117 0h5.75a.75.75 0 110 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0113.026 21H6.974a3.75 3.75 0 01-3.733-3.389L2.07 5.5H.75a.75.75 0 010-1.5H6.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 101.5 0v-7.5zM12.25 8a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zm-7.516 9.467a2.25 2.25 0 002.24 2.033h6.052a2.25 2.25 0 002.24-2.033L16.424 5.5H3.576l1.158 11.967z'
                              className='fill-inherit'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='hidden h-[140px] flex-col items-end justify-between sm:col-span-3 sm:flex md:col-span-7 md:grid md:h-auto md:grid-cols-10 md:items-start md:justify-items-center md:gap-3 lg:col-span-8 lg:items-center lg:gap-5 2xl:gap-3'>
                  {/* Size: lg -> max */}
                  <div className='hidden lg:col-span-2 lg:inline-block'>
                    <span className=''>M</span>
                  </div>

                  {/* Button Delete: (mini): sm */}
                  <button className='flex items-center bg-transparent md:hidden lg:hidden'>
                    <svg width={20} height={21} className='fill-football-gray7A' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8 4h4a2 2 0 10-4 0zM6.5 4a3.5 3.5 0 117 0h5.75a.75.75 0 110 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0113.026 21H6.974a3.75 3.75 0 01-3.733-3.389L2.07 5.5H.75a.75.75 0 010-1.5H6.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 101.5 0v-7.5zM12.25 8a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zm-7.516 9.467a2.25 2.25 0 002.24 2.033h6.052a2.25 2.25 0 002.24-2.033L16.424 5.5H3.576l1.158 11.967z'
                        className='fill-inherit'
                      />
                    </svg>
                  </button>

                  {/* Price: md -> max */}
                  <div className='flex flex-col md:col-span-3 lg:col-span-2 2xl:col-span-3 2xl:flex-row'>
                    <span className='text-football-gray7A line-through'>360.000đ</span>
                    <span className='ml-0 2xl:ml-3'>219.000đ</span>
                  </div>

                  {/* QuantityController: md -> max */}
                  <div className='hidden md:col-span-4 md:inline-block lg:col-span-3 2xl:col-span-2'>
                    <QuantityController classNameWrapper='ml-0' />
                  </div>

                  <div className='hidden h-[100px] md:col-span-3 md:flex md:flex-col md:items-end md:justify-between md:justify-self-end md:font-semibold md:text-football-primary lg:col-span-2 lg:h-auto lg:justify-self-auto'>
                    {/* Price: md -> max */}
                    <span>1.360.000đ</span>

                    {/* Button delete: (mini): sm -> md */}
                    <button className='mb-[2px] flex items-center bg-transparent lg:hidden'>
                      <svg width={20} height={21} className='fill-football-gray7A' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8 4h4a2 2 0 10-4 0zM6.5 4a3.5 3.5 0 117 0h5.75a.75.75 0 110 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0113.026 21H6.974a3.75 3.75 0 01-3.733-3.389L2.07 5.5H.75a.75.75 0 010-1.5H6.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 101.5 0v-7.5zM12.25 8a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zm-7.516 9.467a2.25 2.25 0 002.24 2.033h6.052a2.25 2.25 0 002.24-2.033L16.424 5.5H3.576l1.158 11.967z'
                          className='fill-inherit'
                        />
                      </svg>
                    </button>
                  </div>

                  <div className='hidden lg:col-span-1 lg:inline-block lg:justify-self-end'>
                    {/* Button Delete: lg -> max */}
                    <button className='mt-[-5px] flex items-center bg-transparent'>
                      <svg width={20} height={21} className='fill-football-gray7A' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8 4h4a2 2 0 10-4 0zM6.5 4a3.5 3.5 0 117 0h5.75a.75.75 0 110 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0113.026 21H6.974a3.75 3.75 0 01-3.733-3.389L2.07 5.5H.75a.75.75 0 010-1.5H6.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 101.5 0v-7.5zM12.25 8a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zm-7.516 9.467a2.25 2.25 0 002.24 2.033h6.052a2.25 2.25 0 002.24-2.033L16.424 5.5H3.576l1.158 11.967z'
                          className='fill-inherit'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Sticky Total Bill */}
        <div className='border-gay-100 sticky bottom-0 z-10 mt-4 flex items-center rounded-sm border bg-white px-7 py-5 shadow sm:px-10'>
          <div className='hidden lg:flex lg:items-center'>
            {/* input */}
            <div className='mr-4 flex flex-shrink-0 items-center justify-center'>
              <input type='checkbox' className='h-5 w-5 bg-white text-football-primary' />
            </div>

            {/* button choose all */}
            <button className='mr-3 border-none bg-none'>Chọn tất cả</button>

            {/* button delete */}
            <button className='boder-none mx-10 bg-none'>Xoá</button>
          </div>

          {/* total bills */}
          <div className='ml-auto mt-0 flex w-full flex-col items-center justify-between xs:flex-row lg:w-auto'>
            <div className='w-full xs:w-auto'>
              {/* first row */}
              <div className='flex flex-row items-center justify-between xs:flex-col md:flex-row lg:flex-col lg:items-end 2xl:flex-row 2xl:items-center 2xl:justify-end'>
                <div className='flex flex-row'>
                  <span className='md:normal-case lg:uppercase xl:normal-case'>Tổng thanh toán</span>
                  <span className='hidden xl:ml-1 xl:inline-block'> (5 sản phẩm)</span>
                </div>
                <div className='ml-0 text-2xl text-football-primary xs:text-2xl md:ml-2 md:text-3xl'>đ1.950.000</div>
              </div>

              {/* second row */}
              <div className='mt-2 flex items-center justify-between xs:mt-0 xs:hidden md:flex md:items-center md:justify-end md:text-base'>
                <div className='text-football-gray7A'>Tiết kiệm</div>
                <div className='ml-5 text-football-primary'>đ150.000</div>
              </div>
            </div>

            {/* Button Purchase */}
            <Link
              to={PATH.payment}
              className='ml-0 mt-4 flex w-full items-center justify-center bg-football-primary py-2 text-center text-lg uppercase text-white hover:bg-football-primary/90 xs:ml-4 xs:mt-0 xs:w-56'
            >
              <span>Mua hàng</span>
              <span className='ml-2 inline-block lg:ml-2 xl:hidden'>(5)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
