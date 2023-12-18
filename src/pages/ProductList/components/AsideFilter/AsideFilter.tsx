export default function AsideFilter() {
  return (
    <div className='mr-4 pb-4 pt-[21px]'>
      {/* Your options */}
      <div className='text-base font-normal text-black'>
        <div className='flex items-center justify-between'>
          <span className='text-lg'>Bạn chọn</span>
          <button className='bg-transparent text-lg hover:text-football-primary'>Bỏ hết</button>
        </div>

        {/* options */}
        <div className='mt-2 flex flex-wrap gap-x-3'>
          <button className='mb-2 flex items-center justify-center gap-2 rounded-[4px] bg-football-primary px-3 py-[2px]'>
            <svg width={14} height={14} className='fill-white' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.083 2.917l-8.166 8.166M2.917 2.917l8.166 8.166'
                stroke='#fff'
                strokeWidth={2}
                strokeLinecap='round'
              />
            </svg>
            <span className='capitalize text-white'>Premier League</span>
          </button>

          <button className='mb-2 flex items-center justify-center gap-2 rounded-[4px] bg-football-primary px-3 py-[2px]'>
            <svg width={14} height={14} className='fill-white' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.083 2.917l-8.166 8.166M2.917 2.917l8.166 8.166'
                stroke='#fff'
                strokeWidth={2}
                strokeLinecap='round'
              />
            </svg>
            <span className='capitalize text-white'>Premier League</span>
          </button>
        </div>
        <div className='mb-4 mt-6 h-[1px] bg-gray-300' />
      </div>

      {/* Collections */}
      <div className='text-base font-normal text-black'>
        <span className='text-lg'>Bộ sưu tập</span>

        {/* catalogues */}
        <div className='mt-[6px] flex flex-col flex-wrap gap-x-3 gap-y-3'>
          <div className='flex flex-row items-center'>
            <input
              id='checkbox_club'
              type='checkbox'
              className='h-[18px] w-[18px] cursor-pointer bg-white text-football-primary'
            />
            <label htmlFor='checkbox_club' className='ml-3 capitalize'>
              Câu lạc bộ
            </label>
          </div>

          <div className='flex flex-row items-center'>
            <input
              id='checkbox-nation'
              type='checkbox'
              className='h-[18px] w-[18px] cursor-pointer bg-white text-football-primary'
            />
            <label htmlFor='checkbox-nation' className='ml-3 capitalize'>
              Đội tuyển quốc gia
            </label>
          </div>
        </div>
      </div>

      <div className='mt-7 h-[1px] bg-gray-300' />

      {/* Catalogue */}
      <div className='mt-4 text-base font-normal text-black'>
        <span className='text-lg'>Danh mục sản phẩm</span>

        {/* catalogues */}
        <div className='mt-2 flex flex-wrap gap-x-3'>
          <button className='relative mb-2 overflow-hidden rounded-[4px] border border-football-primary bg-gray-300/30 bg-white px-4 py-2 text-football-gray7A hover:border-football-primary hover:bg-white hover:text-football-primary'>
            <svg width={24} height={22} className='absolute right-0 top-0' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23.825 22H24V4a4 4 0 00-4-4H0v.548L23.825 22z'
                fill='#EE4D2D'
              />
              <g clipPath='url(#prefix__clip0_33_1150)' stroke='#fff' strokeWidth={2} strokeLinecap='round'>
                <path d='M20.333 3.667l-4.666 4.666M15.667 3.667l4.666 4.666' />
              </g>
              <defs>
                <clipPath id='prefix__clip0_33_1150'>
                  <path fill='#fff' transform='translate(14 2)' d='M0 0h8v8H0z' />
                </clipPath>
              </defs>
            </svg>
            <span className='capitalize'>Premier League</span>
          </button>

          <button className='mb-2 flex items-center justify-center rounded-[4px] border border-transparent bg-gray-300/30 px-4 py-2 text-[#7A7A9D] hover:border-football-primary hover:bg-white hover:text-football-primary'>
            <span className='capitalize'>League 1</span>
          </button>
        </div>
      </div>

      <div className='mt-6 h-[1px] bg-gray-300' />

      {/* Size */}
      <div className='mt-4 text-base font-normal text-black'>
        <span className='text-lg'>Kích thước</span>

        {/* sizes */}
        <div className='mt-2 flex flex-wrap gap-x-3'>
          <button className='relative mb-2 overflow-hidden rounded-[4px] border border-transparent bg-gray-300/30 px-4 py-2 text-[#7A7A9D] hover:border-football-primary hover:bg-white hover:text-football-primary'>
            <svg width={24} height={22} className='absolute right-0 top-0' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M23.825 22H24V4a4 4 0 00-4-4H0v.548L23.825 22z'
                fill='#EE4D2D'
              />
              <g clipPath='url(#prefix__clip0_33_1150)' stroke='#fff' strokeWidth={2} strokeLinecap='round'>
                <path d='M20.333 3.667l-4.666 4.666M15.667 3.667l4.666 4.666' />
              </g>
              <defs>
                <clipPath id='prefix__clip0_33_1150'>
                  <path fill='#fff' transform='translate(14 2)' d='M0 0h8v8H0z' />
                </clipPath>
              </defs>
            </svg>
            <span className='capitalize'>S</span>
          </button>

          <button className='mb-2 flex items-center justify-center rounded-[4px] border border-transparent bg-gray-300/30 px-4 py-2 text-[#7A7A9D] hover:border-football-primary hover:bg-white hover:text-football-primary'>
            <span className='capitalize'>M</span>
          </button>
        </div>
      </div>

      <div className='mt-6 h-[1px] bg-gray-300' />

      {/* Price */}
      <div className='mt-4 text-base font-normal text-black'>
        <span className='text-lg'>Khoảng giá</span>

        {/* prices */}
        <form className='mt-2'>
          <div className='flex items-start'>
            <div className='grow'>
              <input
                type='text'
                placeholder='đ TỪ'
                className='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-football-primary focus:shadow-sm'
              />
            </div>

            <div className='mx-2 mt-1 shrink-0'>-</div>

            <div className='grow'>
              <input
                type='text'
                placeholder='đ ĐẾN'
                className='w-full rounded-sm border border-gray-300 p-1 outline-none focus:border-football-primary focus:shadow-sm'
              />
            </div>
          </div>
          <div className='mt-1 min-h-[24px] text-center text-red-600'></div>
          <button className='flex w-full items-center justify-center bg-football-primary p-2 uppercase text-white hover:bg-football-primary/80'>
            Áp dụng
          </button>
        </form>
      </div>
    </div>
  )
}
