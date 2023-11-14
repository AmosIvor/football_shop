import { Link } from 'react-router-dom'
import QuantityController from '~/components/QuantityController'
import PATH from '~/constants/path'

export default function Cart() {
  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='container text-lg font-normal text-black'>
        <h1 className='text-lg font-bold uppercase text-football-primary'>Giỏ hàng</h1>

        {/* Title */}
        <div className='mt-4 grid grid-cols-12 gap-3 rounded-[4px] bg-white px-10 py-3 text-lg text-black shadow'>
          <div className='col-span-4 flex items-center'>
            <input type='checkbox' className='h-5 w-5 bg-white text-football-primary' />
            <span className='ml-4'>Tất cả (5 sản phẩm)</span>
          </div>

          <div className='col-span-8 grid grid-cols-10 items-center justify-items-center gap-3'>
            <div className='col-span-2'>
              <span className=''>Kích thước</span>
            </div>
            <div className='col-span-3'>Đơn giá</div>
            <div className='col-span-2'>Số lượng</div>
            <div className='col-span-2'>Thành tiền</div>
            <div className='col-span-1 mt-[-5px] justify-self-end'>
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
        <div className='my-3 rounded-[4px] bg-white p-5 shadow'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                className='rouned-sm mb-3 mt-3 grid grid-cols-12 items-center gap-3 border border-gray-200 px-5 py-4 text-lg text-black'
                key={index}
              >
                <div className='col-span-4 flex items-center'>
                  <input type='checkbox' className='h-5 w-5 bg-white text-football-primary' />
                  <div className='mx-4 h-[65px] w-[65px] overflow-hidden rounded-[4px] shadow-sm'>
                    <img
                      src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                      alt=''
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <span className=''>Manchester City 22 / 23</span>
                </div>
                <div className='col-span-8 grid grid-cols-10 items-center justify-items-center gap-3'>
                  <div className='col-span-2'>
                    <span className=''>M</span>
                  </div>
                  <div className='col-span-3'>
                    <span className='text-football-gray7A line-through'>360.000đ</span>
                    <span className='ml-3'>219.000đ</span>
                  </div>
                  <div className='col-span-2'>
                    <QuantityController classNameWrapper='ml-0' />
                  </div>
                  <div className='col-span-2 font-semibold text-football-primary'>1.360.000đ</div>
                  <div className='col-span-1 justify-self-end'>
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
        {/* <div className='col-span-3 text-lg font-normal text-black'>
            <Link
              to={PATH.payment}
              className='mt-4 flex w-full items-center justify-center bg-football-primary py-3 text-xl capitalize text-white shadow hover:bg-football-primary/90'
            >
              Mua hàng (2)
            </Link>
          </div> */}

        <div className='border-gay-100 sticky bottom-0 z-10 mt-4 flex items-center rounded-sm border bg-white px-10 py-5 shadow'>
          <div className='flex items-center'>
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
          <div className='ml-auto mt-0 flex flex-row items-center'>
            <div>
              {/* first row */}
              <div className='flex items-center justify-end'>
                <div>Tổng thanh toán (5 sản phẩm)</div>
                <div className='ml-2 text-3xl text-football-primary'>đ1.950.000</div>
              </div>

              {/* second row */}
              <div className='flex items-center justify-end text-base'>
                <div className='text-football-gray7A'>Tiết kiệm</div>
                <div className='ml-6 text-football-primary'>đ150.000</div>
              </div>
            </div>

            {/* <button className='ml-4 mt-5 flex h-10 w-52 items-center justify-center bg-football-primary text-center text-sm uppercase text-white hover:bg-football-primary/90 sm:mt-0'>
              Mua hàng
            </button> */}
            <Link
              to={PATH.payment}
              className='ml-4 mt-5 flex w-56 items-center justify-center bg-football-primary py-2 text-center text-lg uppercase text-white hover:bg-football-primary/90 sm:mt-0'
            >
              Mua hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
