import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalPayment from '~/components/Modal/ModalPayment'
import PATH from '~/constants/path'

export default function Payment() {
  const [idPurchase, setIdPurchase] = useState<null | number>(null)

  const isVisible = useMemo(() => {
    return idPurchase !== null
  }, [idPurchase])

  const showModal = (id: number) => {
    // console.log(isVisible)
    setIdPurchase(id)
  }

  const hideModal = () => {
    // console.log('modal when hide: ', isVisible)
    setIdPurchase(null)
  }

  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='asir-container'>
        <h1 className='text-lg font-bold uppercase text-football-primary'>Thanh toán</h1>
      </div>

      <div className='mx-auto w-full px-0 sm:px-7 md:w-[90%] md:px-4 lg:w-[84%] xl:w-[78%]'>
        <div className='grid grid-cols-12 gap-4'>
          {/* Left Contents */}
          <div className='col-span-12 text-lg font-normal text-black 2xl:col-span-9'>
            {/* Purchases */}
            <div className='mt-4 rounded-[4px] bg-white px-3 py-3 text-lg text-black shadow-sm sm:px-5'>
              {/* Title */}
              <div className='grid grid-cols-12 gap-3 px-5'>
                <div className='col-span-12 flex items-center sm:col-span-9 md:col-span-6 lg:col-span-5'>
                  <span className='-ml-1 text-football-gray7A/80 sm:-ml-5 lg:text-lg xl:text-xl'>Sản phẩm</span>
                </div>

                <div className='gap-3 text-base text-football-gray7A/50 sm:col-span-3 sm:flex sm:items-center sm:justify-end md:col-span-6 md:grid md:grid-cols-9 md:items-center md:justify-items-center lg:col-span-7 lg:grid-cols-10 xl:text-lg'>
                  <div className='hidden lg:col-span-2 lg:inline-block'>
                    <span className=''>Kích thước</span>
                  </div>
                  <div className='hidden md:col-span-3 md:inline-block lg:col-span-3'>Đơn giá</div>
                  <div className='hidden md:col-span-3 md:inline-block lg:col-span-2'>Số lượng</div>
                  <div className='hidden justify-self-end sm:col-span-5 sm:inline-block md:col-span-3 lg:col-span-3'>
                    Thành tiền
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className='my-4'>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className='mt-3 grid grid-cols-12 gap-3 border border-gray-200 p-4 text-base sm:p-5 xl:text-lg'
                      key={index}
                    >
                      <div className='col-span-12 flex items-center sm:col-span-9 md:col-span-6 lg:col-span-5'>
                        <div className='mr-3 h-[140px] w-[100px] shrink-0 overflow-hidden rounded-[4px] shadow-sm xs:h-[160px] xs:w-[120px] sm:h-[140px] sm:w-[100px] md:h-[100px] md:w-[75px] lg:h-[65px] lg:w-[65px]'>
                          <img
                            src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                            alt=''
                            className='h-full w-full object-cover'
                          />
                        </div>
                        <div className='flex h-[140px] flex-grow flex-col justify-between xs:h-[160px] sm:h-[140px] md:h-[100px] lg:h-auto'>
                          <span className=''>Manchester City 22 / 23</span>
                          <div className='flex flex-col'>
                            <span className='mb-2 md:mb-0 lg:hidden'>Kích thước: M</span>
                            <span className='mb-2 hidden xs:inline-block sm:hidden'>Đơn giá: 360.000đ</span>
                            <div className='flex flex-col xs:flex-row xs:items-center xs:justify-between md:hidden'>
                              <span className='mb-2 xs:mb-0'>Số lượng: 1</span>
                              <div className='flex items-center'>
                                <span className='mr-2 xs:hidden'>Thành tiền:</span>
                                <span className='font-semibold text-football-primary sm:hidden'>1.360.000đ</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='hidden gap-3 sm:col-span-3 sm:flex sm:flex-col sm:items-end md:col-span-6 md:grid md:grid-cols-9 md:items-start md:justify-items-center lg:col-span-7 lg:grid-cols-10 lg:items-center'>
                        <div className='hidden lg:col-span-2 lg:inline-block'>
                          <span className=''>M</span>
                        </div>
                        <div className='hidden md:col-span-3 md:inline-block lg:col-span-3'>360.000đ</div>
                        <div className='hidden md:col-span-3 md:inline-block lg:col-span-2'>1</div>
                        <div className='justify-self-end font-semibold text-football-primary sm:col-span-10 md:col-span-3 lg:col-span-3'>
                          1.360.000đ
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Payment */}
            <div className='mt-4 rounded-[4px] bg-white px-7 py-3 text-lg text-black shadow-sm sm:px-5'>
              <div className='flex flex-col gap-3 px-5'>
                <h1 className='-ml-4 text-xl font-semibold text-football-gray7A xs:-ml-5'>Phương thức thanh toán</h1>

                <div className='-ml-4 sm:ml-0'>
                  <div className='mb-4 flex items-start xs:items-center'>
                    <input
                      id='default-radio-1'
                      type='radio'
                      name='default-radio'
                      className='mt-[6px] h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent xs:mt-0'
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

                  <div className='mb-4 flex items-start xs:items-center'>
                    <input
                      id='default-radio-2'
                      type='radio'
                      name='default-radio'
                      className='mt-[6px] h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent xs:mt-0'
                    />
                    <label htmlFor='default-radio-3' className='ml-3'>
                      Thanh toán qua thẻ Ngân hàng
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className='col-span-12 text-lg font-normal text-black 2xl:col-span-3'>
            <div className='mt-4 rounded-[4px] bg-white px-7 pb-4 pt-3 shadow-sm sm:px-5 2xl:px-4 laptop:px-5'>
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

            <div className='mt-4 rounded-[4px] bg-white px-7 pb-4 pt-3 shadow-sm sm:px-5 2xl:px-4 laptop:px-5'>
              <span className='text-xl font-semibold text-football-gray7A'>HVPP Sports khuyến mãi</span>
              <button className='mb-1 mt-3 flex items-center bg-transparent text-football-primary'>
                <svg width={24} height={24} className='fill-football-primary' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M14.8 8L16 9.2 9.2 16 8 14.8 14.8 8zM4 4h16c1.11 0 2 .89 2 2v4a2 2 0 000 4v4c0 1.11-.89 2-2 2H4a2 2 0 01-2-2v-4c1.11 0 2-.89 2-2a2 2 0 00-2-2V6a2 2 0 012-2zm0 2v2.54a3.994 3.994 0 010 6.92V18h16v-2.54a3.994 3.994 0 010-6.92V6H4zm5.5 2c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11 8 10.33 8 9.5 8.67 8 9.5 8zm5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z'
                    className='fill-inherit'
                  />
                </svg>
                <span className='ml-3 2xl:ml-2 laptop:ml-3'>Chọn khuyến mãi phù hợp</span>
              </button>
            </div>

            <div className='mt-4 flex flex-col items-center rounded-[4px] bg-white px-7 pb-4 pt-4 shadow-sm sm:px-5 2xl:px-4 laptop:px-5'>
              <div className='flex w-full items-center justify-between text-lg font-normal text-football-gray7A 2xl:font-semibold'>
                <span className='flex w-auto items-center justify-start sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] xl:justify-end 2xl:w-[50%] 2xl:justify-start'>
                  Tổng tiền hàng
                </span>
                <span className='flex w-auto items-center justify-end text-xl sm:w-[35%] md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-[50%]'>
                  720.000đ
                </span>
              </div>
              <div className='mt-3 flex w-full items-center justify-between text-lg font-normal text-football-gray7A xl:mt-2 2xl:mt-0 2xl:font-semibold'>
                <span className='flex w-auto items-center justify-start sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] xl:justify-end 2xl:w-[50%] 2xl:justify-start'>
                  Khuyến mãi
                </span>
                <span className='flex w-auto items-center justify-end text-xl sm:w-[35%] md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-[50%]'>
                  - 81.000đ
                </span>
              </div>
              <div className='mt-3 flex w-full items-center justify-between text-lg font-normal text-football-gray7A xl:mt-2 2xl:mt-0 2xl:font-semibold'>
                <span className='flex w-auto items-center justify-start sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] xl:justify-end 2xl:w-[50%] 2xl:justify-start'>
                  Phí vận chuyển
                </span>
                <span className='flex w-auto items-center justify-end text-xl sm:w-[35%] md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-[50%]'>
                  50.000đ
                </span>
              </div>

              <div className='my-5 h-[1px] w-full bg-gray-300/50'></div>

              <div className='flex w-full items-end justify-between font-medium 2xl:font-semibold'>
                <span className='mb-[1px] flex w-auto items-center justify-start text-xl text-football-gray7A sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] 2xl:w-auto 2xl:justify-start'>
                  Thanh toán
                </span>
                <span className='flex w-auto items-center justify-end text-2xl font-semibold text-football-primary sm:w-[35%] sm:text-3xl md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-auto 2xl:text-2xl'>
                  1.711.000đ
                </span>
              </div>
            </div>

            <div className='mt-4 flex flex-col-reverse items-center rounded-[4px] bg-white px-7 py-4 shadow-sm sm:flex-row sm:justify-between sm:px-5 2xl:mt-0 2xl:bg-transparent 2xl:px-0 2xl:pb-0 2xl:pt-4'>
              <Link
                to={PATH.cart}
                className='mt-4 flex items-center text-lg font-normal text-football-primary sm:mt-0 2xl:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='mr-2 h-4 w-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
                Quay trở lại giỏ hàng
              </Link>
              <button
                className='flex w-full items-center justify-center bg-football-primary px-6 py-2 text-lg uppercase text-white shadow hover:bg-football-primary/90 sm:w-52 2xl:w-full'
                onClick={() => showModal(1)}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModalPayment isVisible={isVisible} handleSubmit={hideModal} handleCancel={hideModal} />
    </div>
  )
}
