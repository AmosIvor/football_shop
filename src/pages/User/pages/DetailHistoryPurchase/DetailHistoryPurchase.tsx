export default function DetailHistoryPurchase() {
  return (
    <div className='bg-transparent'>
      <div className='mb-3 rounded-sm bg-white px-8 py-5 text-lg font-normal text-black shadow'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <h1 className='capitalized text-2xl font-semibold text-black'>Chi tiết đơn hàng #628254234</h1>
          <div className='flex items-center'>
            <svg
              enableBackground='new 0 0 15 15'
              viewBox='0 0 15 15'
              x={0}
              y={0}
              className='mr-3 h-5 w-5 stroke-[#26aa99]'
            >
              <g>
                <line fill='none' strokeLinejoin='round' strokeMiterlimit={10} x1='8.6' x2='4.2' y1='9.8' y2='9.8' />
                <circle cx={3} cy='11.2' fill='none' r={2} strokeMiterlimit={10} />
                <circle cx={10} cy='11.2' fill='none' r={2} strokeMiterlimit={10} />
                <line fill='none' strokeMiterlimit={10} x1='10.5' x2='14.4' y1='7.3' y2='7.3' />
                <polyline
                  fill='none'
                  points='1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
                <polyline
                  fill='none'
                  points='9.9 3.8 14 3.8 14.5 10.2 11.9 10.2'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </g>
            </svg>
            <span className='text-[#26aa99]'>Giao hàng thành công</span>
            <div className='mx-3 h-4 w-[1px] bg-football-gray7A/40'></div>
            <span className='font-semibold uppercase text-football-primary'>Hoàn thành</span>
          </div>
        </div>
        <div className='pt-1'>Ngày đặt hàng: 22:20 12/07/2022</div>
      </div>

      {/* Address */}
      <div className='grid w-full grid-cols-3 gap-7 bg-transparent'>
        <div className='w-full rounded-sm bg-white px-8 pb-5 pt-4 shadow-sm'>
          <div className='mb-3 font-semibold uppercase text-black'>Địa chỉ người nhận</div>
          <div>Trần Tuấn Vũ</div>
          <div className='mt-1 text-football-gray7A'>0332 541 875</div>
          <div className='mt-1 text-football-gray7A'>43 Tân Lập, Đông Hoà, Dĩ An, Bình Dương</div>
        </div>

        <div className='w-full rounded-sm bg-white px-8 pb-5 pt-4 shadow-sm'>
          <div className='mb-3 font-semibold uppercase text-black'>Hình thức giao hàng</div>
          <div className='text-football-gray7A'>Giao Tiết Kiệm</div>
          <div className='mt-1 text-football-gray7A'>Giao vào 15/07</div>
          <div className='mt-1 text-football-gray7A'>Được giao bởi VIETTELPOST</div>
          <div className='mt-1 text-football-gray7A'>Phí vận chuyển: 2.895đ</div>
        </div>

        <div className='w-full rounded-sm bg-white px-8 pb-5 pt-4 shadow-sm'>
          <div className='mb-3 font-semibold uppercase text-black'>Hình thức thanh toán</div>
          <div className='text-football-gray7A'>Thanh toán bằng tiền mặt khi nhận hàng</div>
        </div>
      </div>

      {/* History Purchases */}
      <div className='w-full text-lg font-normal text-black'>
        {/* Purchases */}
        <div className='mt-4 rounded-[4px] bg-white px-8 py-3 text-lg text-black shadow-sm'>
          {/* Title */}
          <div className='grid grid-cols-12 gap-3 px-5'>
            <div className='col-span-5 flex items-center'>
              <span className='-ml-5'>Sản phẩm</span>
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
                    <div className='col-span-3 justify-self-end font-semibold text-football-primary'>1.360.000đ</div>
                  </div>
                </div>
              ))}
          </div>

          <div className='mb-2 mt-7 h-[1px] w-full bg-football-gray7A/30'></div>

          {/* Total */}
          <div className='flex flex-col items-center bg-white pb-2 pt-4'>
            <div className='mb-[6px] flex w-full items-end text-lg text-football-gray7A'>
              <div className='flex w-[78%] items-center justify-end'>Tổng tiền hàng</div>
              <div className='flex w-[22%] items-center justify-end text-xl'>720.000đ</div>
            </div>

            <div className='mb-[6px] flex w-full items-end text-lg text-football-gray7A'>
              <div className='flex w-[78%] items-center justify-end'>Khuyến mãi</div>
              <div className='flex w-[22%] items-center justify-end text-xl'>- 81.000đ</div>
            </div>

            <div className='mb-[6px] flex w-full items-end text-lg text-football-gray7A'>
              <div className='flex w-[78%] items-center justify-end'>Phí vận chuyển</div>
              <div className='flex w-[22%] items-center justify-end text-xl'>50.000đ</div>
            </div>

            <div className='flex w-full items-end text-lg text-football-gray7A'>
              <div className='flex w-[78%] items-center justify-end'>Tổng cộng</div>
              <div className='flex w-[22%] items-center justify-end text-2xl font-semibold text-football-primary'>
                719.000đ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
