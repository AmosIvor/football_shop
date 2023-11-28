export default function DetailHistoryPurchase() {
  return (
    <div className='bg-transparent'>
      <div className='mb-3 rounded-sm bg-white px-7 py-5 text-lg font-normal text-black shadow xs:px-8'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <h1 className='capitalized text-2xl font-semibold text-black'>Chi tiết đơn hàng #628254234</h1>
          <div className='hidden items-center md:flex lg:hidden xl:flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='-mt-[2px] mr-3 h-5 w-5 stroke-[#27ae60]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
              />
            </svg>

            <span className='font-semibold uppercase text-[#27ae60]'>Hoàn thành</span>
          </div>
        </div>
        <div className='pt-1'>Ngày đặt hàng: 22:20 12/07/2022</div>
        <div className='mt-2 flex items-center md:hidden lg:flex xl:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='-mt-[2px] mr-3 h-5 w-5 stroke-[#27ae60]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
            />
          </svg>

          <span className='font-semibold uppercase text-[#27ae60]'>Hoàn thành</span>
        </div>
      </div>

      {/* Address */}
      <div className='grid w-full grid-cols-1 gap-2 bg-transparent text-base xs:gap-2 xs:text-lg sm:gap-3 md:gap-3 lg:gap-2 lg:text-base xl:grid-cols-3 xl:gap-4 laptopXS:gap-3 laptopXS:text-lg 2xl:gap-7'>
        <div className='w-full rounded-sm bg-white px-7 pb-5 pt-4 shadow-sm xs:px-8'>
          <div className='mb-2 font-semibold uppercase text-black xl:mb-3'>Địa chỉ người nhận</div>
          <div className='flex flex-row items-center xl:flex-col xl:items-start'>
            <div className=''>Trần Tuấn Vũ</div>
            <div className='mx-4 h-4 w-[1px] bg-football-gray7A/40 lg:h-[14px] xl:hidden'></div>
            <div className='mt-0 text-football-gray7A xl:mt-1'>0332 541 875</div>
          </div>
          <div className='mt-1 text-football-gray7A'>43 Tân Lập, Đông Hoà, Dĩ An, Bình Dương</div>
        </div>

        <div className='w-full rounded-sm bg-white px-7 pb-5 pt-4 shadow-sm xs:px-8'>
          <div className='mb-2 font-semibold uppercase text-black xl:mb-3'>Hình thức giao hàng</div>
          <div className='flex flex-row items-center xl:flex-col xl:items-start'>
            <div className='text-football-gray7A'>Giao Tiết Kiệm</div>
            <div className='mx-4 h-4 w-[1px] bg-football-gray7A/40 lg:h-[14px] xl:hidden'></div>
            <div className='mt-0 text-football-gray7A xl:mt-1'>Giao vào 15/07/2023</div>
          </div>
          <div className='mt-1 text-football-gray7A'>Được giao bởi VIETTELPOST</div>
          <div className='mt-1 text-football-gray7A'>Phí vận chuyển: 2.895đ</div>
        </div>

        <div className='w-full rounded-sm bg-white px-7 pb-5 pt-4 shadow-sm xs:px-8'>
          <div className='mb-2 font-semibold uppercase text-black xl:mb-3'>Hình thức thanh toán</div>
          <div className='text-football-gray7A'>Thanh toán bằng tiền mặt khi nhận hàng</div>
        </div>
      </div>

      {/* History Purchases */}
      <div className='w-full text-lg font-normal text-black'>
        {/* Purchases */}
        <div className='mt-4 rounded-[4px] bg-white px-7 py-3 text-lg text-black shadow-sm xs:px-8'>
          {/* Title */}
          <div className='grid grid-cols-12 gap-3 px-5'>
            <div className='col-span-12 flex items-center sm:col-span-9 md:col-span-6 lg:col-span-9 xl:col-span-6 laptopXS:col-span-5'>
              <span className='-ml-1 font-normal text-black sm:-ml-5 lg:text-lg xl:text-lg'>Sản phẩm</span>
            </div>

            <div className='gap-3 text-base text-football-gray7A/50 sm:col-span-3 sm:flex sm:items-center sm:justify-end md:col-span-6 md:grid md:grid-cols-9 md:items-center md:justify-items-center lg:col-span-3 lg:flex lg:items-center lg:justify-end xl:col-span-6 xl:grid xl:grid-cols-9 xl:items-center xl:justify-items-center laptopXS:col-span-7 laptopXS:grid-cols-10 laptop:text-lg'>
              <div className='hidden laptopXS:col-span-2 laptopXS:inline-block'>
                <span className=''>Kích thước</span>
              </div>
              <div className='hidden md:col-span-3 md:inline-block lg:hidden xl:col-span-3 xl:inline-block laptopXS:col-span-3'>
                Đơn giá
              </div>
              <div className='hidden md:col-span-3 md:inline-block lg:hidden xl:col-span-3 xl:inline-block laptopXS:col-span-2'>
                Số lượng
              </div>
              <div className='hidden justify-self-end sm:col-span-5 sm:inline-block md:col-span-3 lg:col-span-5 lg:inline-block xl:col-span-3 laptopXS:col-span-3'>
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
                  className='mt-3 grid grid-cols-12 gap-3 border border-gray-200 p-4 text-base sm:p-5 2xl:text-lg'
                  key={index}
                >
                  <div className='col-span-12 flex items-center sm:col-span-9 md:col-span-6 lg:col-span-9 xl:col-span-6 laptopXS:col-span-5'>
                    <div className='mr-3 h-[140px] w-[100px] shrink-0 overflow-hidden rounded-[4px] shadow-sm xs:h-[160px] xs:w-[120px] sm:h-[140px] sm:w-[100px] md:h-[100px] md:w-[75px] lg:h-[140px] lg:w-[100px] xl:h-[100px] xl:w-[75px] laptopXS:h-[65px] laptopXS:w-[65px]'>
                      <img
                        src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw74498a3b/images/large/701225663CP001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
                        alt=''
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <div className='flex h-[140px] flex-grow flex-col justify-between xs:h-[160px] sm:h-[140px] md:h-[100px] lg:h-[140px] xl:h-[100px] laptopXS:h-auto'>
                      <span className=''>Manchester City 22 / 23</span>
                      <div className='flex flex-col'>
                        <span className='mb-2 md:mb-0 lg:mb-2 xl:mb-0 laptopXS:hidden'>Kích thước: M</span>
                        <span className='mb-2 hidden xs:inline-block sm:hidden'>Đơn giá: 360.000đ</span>
                        <div className='flex flex-col xs:flex-row xs:items-center xs:justify-between md:hidden lg:flex lg:flex-row lg:items-center lg:justify-between xl:hidden'>
                          <span className='mb-2 xs:mb-0'>Số lượng: 1</span>
                          <div className='flex items-center'>
                            <span className='mr-2 xs:hidden'>Thành tiền:</span>
                            <span className='font-semibold text-football-primary sm:hidden'>1.360.000đ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='hidden gap-3 sm:col-span-3 sm:flex sm:flex-col sm:items-end md:col-span-6 md:grid md:grid-cols-9 md:items-start md:justify-items-center lg:col-span-3 lg:flex lg:flex-col lg:items-end xl:col-span-6 xl:grid xl:grid-cols-9 xl:items-start xl:justify-items-center laptopXS:col-span-7 laptopXS:grid-cols-10 laptopXS:items-center'>
                    <div className='hidden laptopXS:col-span-2 laptopXS:inline-block'>
                      <span className=''>M</span>
                    </div>
                    <div className='hidden md:col-span-3 md:inline-block lg:hidden xl:col-span-3 xl:inline-block laptopXS:col-span-3'>
                      360.000đ
                    </div>
                    <div className='hidden md:col-span-3 md:inline-block lg:hidden xl:col-span-3 xl:inline-block laptopXS:col-span-2'>
                      1
                    </div>
                    <div className='justify-self-end font-semibold text-football-primary sm:col-span-10 md:col-span-3 lg:col-span-10 xl:col-span-3 laptopXS:col-span-3'>
                      1.360.000đ
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className='mb-2 mt-7 h-[1px] w-full bg-football-gray7A/30'></div>

          {/* Total */}
          <div className='flex flex-col items-center bg-white pb-2 pt-4'>
            <div className='mb-[6px] flex w-full items-end justify-between text-lg text-football-gray7A xs:justify-start'>
              <div className='xs:flex xs:w-[60%] xs:items-center xs:justify-end sm:w-[72%] md:w-[75%] lg:w-[72%] xl:w-[76%] laptopXS:w-[78%]'>
                Tổng tiền hàng
              </div>
              <div className='text-xl xs:flex xs:w-[40%] xs:items-center xs:justify-end sm:w-[28%] md:w-[25%] lg:w-[28%] xl:w-[24%] laptopXS:w-[22%]'>
                720.000đ
              </div>
            </div>

            <div className='mb-[6px] flex w-full items-end justify-between text-lg text-football-gray7A xs:justify-start'>
              <div className='xs:flex xs:w-[60%] xs:items-center xs:justify-end sm:w-[72%] md:w-[75%] lg:w-[72%] xl:w-[76%] laptopXS:w-[78%]'>
                Khuyến mãi
              </div>
              <div className='text-xl xs:flex xs:w-[40%] xs:items-center xs:justify-end sm:w-[28%] md:w-[25%] lg:w-[28%] xl:w-[24%] laptopXS:w-[22%]'>
                - 81.000đ
              </div>
            </div>

            <div className='mb-[6px] flex w-full items-end justify-between text-lg text-football-gray7A xs:justify-start'>
              <div className='xs:flex xs:w-[60%] xs:items-center xs:justify-end sm:w-[72%] md:w-[75%] lg:w-[72%] xl:w-[76%] laptopXS:w-[78%]'>
                Phí vận chuyển
              </div>
              <div className='text-xl xs:flex xs:w-[40%] xs:items-center xs:justify-end sm:w-[28%] md:w-[25%] lg:w-[28%] xl:w-[24%] laptopXS:w-[22%]'>
                50.000đ
              </div>
            </div>

            <div className='flex w-full items-end justify-between text-lg text-football-gray7A xs:justify-start'>
              <div className='xs:flex xs:w-[60%] xs:items-center xs:justify-end sm:w-[72%] md:w-[75%] lg:w-[72%] xl:w-[76%] laptopXS:w-[78%]'>
                Tổng cộng
              </div>
              <div className='text-2xl font-semibold text-football-primary xs:flex xs:w-[40%] xs:items-center xs:justify-end sm:w-[28%] md:w-[25%] lg:w-[28%] xl:w-[24%] laptopXS:w-[22%]'>
                1.719.000đ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
