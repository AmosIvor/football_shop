import { Link } from 'react-router-dom'
import PATH from '~/constants/path'

export default function Payment() {
  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='container'>
        <h1 className='text-lg font-bold uppercase text-football-primary'>Thanh toán</h1>
        <div className='grid grid-cols-12 gap-4'>
          {/* Left Contents */}
          <div className='col-span-9 text-lg font-normal text-black'>
            {/* Purchases */}
            <div className='mt-4 rounded-[4px] bg-white px-5 py-3 text-lg text-black shadow-sm'>
              {/* Title */}
              <div className='grid grid-cols-12 gap-3 px-5'>
                <div className='col-span-5 flex items-center'>
                  <span className='text-xl font-semibold text-football-primary'>Sản phẩm</span>
                </div>

                <div className='col-span-7 grid grid-cols-10 items-center justify-items-center gap-3 text-football-gray7A/50'>
                  <div className='col-span-2 '>
                    <span className=''>Kích thước</span>
                  </div>
                  <div className='col-span-3'>Đơn giá</div>
                  <div className='col-span-2'>Số lượng</div>
                  <div className='col-span-3 justify-self-end'>Thành tiền</div>
                </div>
              </div>

              {/* Products */}
              <div className='my-4'>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div className='mt-3 grid grid-cols-12 gap-3 border border-gray-200 p-5' key={index}>
                      <div className='col-span-5 flex items-center'>
                        <div className='mr-3 h-[65px] w-[65px] overflow-hidden rounded-[4px] shadow-sm'>
                          <img
                            src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                            alt=''
                            className='h-full w-full object-cover'
                          />
                        </div>
                        <span className=''>Manchester City 22 / 23</span>
                      </div>
                      <div className='col-span-7 grid grid-cols-10 items-center justify-items-center gap-3'>
                        <div className='col-span-2'>
                          <span className=''>M</span>
                        </div>
                        <div className='col-span-3'>360.000đ</div>
                        <div className='col-span-2'>1</div>
                        <div className='col-span-3 justify-self-end font-semibold text-football-primary'>
                          1.360.000đ
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Payment */}
            <div className='mt-4 rounded-[4px] bg-white px-5 py-3 text-lg text-black shadow-sm'>
              <div className='flex flex-col gap-3 px-5'>
                <h1 className='text-xl font-semibold text-football-primary'>Phương thức thanh toán</h1>

                <div>
                  <div className='mb-4 flex items-center'>
                    <input
                      id='default-radio-1'
                      type='radio'
                      name='default-radio'
                      className='h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent'
                    />
                    <label htmlFor='default-radio-1' className='ml-3'>
                      Thanh toán khi nhận hàng (COD)
                    </label>
                  </div>

                  <div className='mb-4 flex items-center'>
                    <input
                      id='default-radio-1'
                      type='radio'
                      name='default-radio'
                      className='h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent'
                    />
                    <label htmlFor='default-radio-1' className='ml-3'>
                      Thanh toán qua Ví MoMo
                    </label>
                  </div>

                  <div className='mb-4 flex items-center'>
                    <input
                      id='default-radio-2'
                      type='radio'
                      name='default-radio'
                      className='h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent'
                    />
                    <label htmlFor='default-radio-3' className='ml-3'>
                      Thanh toán qua thẻ Ngân hàng
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 text-lg font-normal text-black'>
            <div className='mt-4 rounded-[4px] bg-white px-5 pb-4 pt-3 shadow-sm'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold text-football-gray7A'>Giao tới</span>
                <button className='flex bg-transparent text-center text-football-primary'>Thay đổi</button>
              </div>
              <div className='my-3 flex items-center'>
                <span className='font-semibold'>Amos Ivor</span>
                <div className='mx-4 h-[12px] w-[1px] bg-gray-300'></div>
                <span className='font-semibold'>0332 541 875</span>
              </div>
              <div className='text-football-gray7A'>43 Tân Lập, Phường Đông Hoà, Thị xã Dĩ An, Tỉnh Bình Dương</div>
            </div>

            <div className='mt-4 rounded-[4px] bg-white px-5 pb-4 pt-3 shadow-sm'>
              <span className='text-xl font-semibold text-football-gray7A'>HVPP Sports khuyến mãi</span>
              <button className='mb-1 mt-3 flex items-center bg-transparent text-football-primary'>
                <svg width={24} height={24} className='fill-football-primary' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M14.8 8L16 9.2 9.2 16 8 14.8 14.8 8zM4 4h16c1.11 0 2 .89 2 2v4a2 2 0 000 4v4c0 1.11-.89 2-2 2H4a2 2 0 01-2-2v-4c1.11 0 2-.89 2-2a2 2 0 00-2-2V6a2 2 0 012-2zm0 2v2.54a3.994 3.994 0 010 6.92V18h16v-2.54a3.994 3.994 0 010-6.92V6H4zm5.5 2c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11 8 10.33 8 9.5 8.67 8 9.5 8zm5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z'
                    className='fill-inherit'
                  />
                </svg>
                <span className='ml-3'>Chọn khuyến mãi phù hợp</span>
              </button>
            </div>

            <div className='mt-4 flex flex-col items-center rounded-[4px] bg-white px-5 pb-4 pt-4 shadow-sm'>
              <div className='flex w-full items-center justify-between'>
                <span className='text-lg font-semibold text-football-gray7A'>Tổng tiền hàng</span>
                <span className='text-xl font-semibold text-football-gray7A'>720.000đ</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <span className='text-lg font-semibold text-football-gray7A'>Khuyến mãi</span>
                <span className='text-xl font-semibold text-football-gray7A'>- 81.000đ</span>
              </div>
              <div className='flex w-full items-center justify-between'>
                <span className='text-lg font-semibold text-football-gray7A'>Phí vận chuyển</span>
                <span className='text-xl font-semibold text-football-gray7A'>50.000đ</span>
              </div>

              <div className='my-5 h-[1px] w-full bg-gray-300/50'></div>

              <div className='flex w-full items-center justify-between'>
                <span className='text-xl font-semibold text-football-gray7A'>Thanh toán</span>
                <span className='text-[28px] font-semibold text-football-primary'>711.000đ</span>
              </div>
            </div>

            <Link
              to={PATH.payment}
              className='mt-4 flex w-full items-center justify-center bg-football-primary py-2 text-lg uppercase text-white shadow hover:bg-football-primary/90'
            >
              Đặt hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
