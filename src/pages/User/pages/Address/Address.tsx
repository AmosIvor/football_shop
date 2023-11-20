export default function Address() {
  return (
    <div className='rounded-sm bg-white px-8 py-5 text-lg font-normal text-black shadow'>
      {/* Header */}
      <div className='just flex items-start justify-between border-b border-b-gray-200 pb-3'>
        <div className=''>
          <h1 className='capitalized text-2xl font-semibold text-black'>Địa chỉ của tôi</h1>
          <div className='pb-2 pt-1 text-base text-gray-700'>Cập nhật thông tin địa chỉ để nhận hàng sớm hơn</div>
        </div>
        <button className='mt-1 flex items-center bg-football-primary py-3 pl-6 pr-8 text-white hover:bg-football-primary/90'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-2 h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
          Thêm mới địa chỉ
        </button>
      </div>

      {/* Body */}
      <div className='pt-3'>
        {/* address list */}
        <div className='my-7 flex '>
          <div className='flex w-[80%] flex-col'>
            <div className='flex items-center'>
              <span>Trần Tuấn Vũ</span>
              <div className='mx-4 h-4 w-[1px] bg-football-gray7A/40'></div>
              <span className='text-football-gray7A'>0332 541 875</span>
            </div>

            <div className='mt-[2px] text-football-gray7A'>43 Tân Lập, Đông Hoà, Dĩ An, Bình Dương</div>
            <div className='mt-1 flex items-center text-[#27ae60]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='-mt-[0.5px] h-4 w-4 stroke-[#27ae60]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                />
              </svg>
              <span className='ml-[6px] text-base'>Địa chỉ mặc định</span>
            </div>
          </div>
          <div className='flex w-[20%] flex-col text-base'>
            <div className='mb-2 flex items-center justify-end text-football-primary'>
              <button className='bg-transparent px-2 py-1 text-football-primary hover:text-football-primary/90'>
                Cập nhật
              </button>
              <button className='ml-3 bg-transparent px-2 py-1 text-football-primary hover:text-football-primary/90'>
                Xoá
              </button>
            </div>
            <button className='border border-football-gray7A/50 bg-white px-2 py-1 hover:text-black/90'>
              Thiết lập mặc định
            </button>
          </div>
        </div>

        <div className='h-[1px] w-full bg-football-gray7A/40'></div>

        <div className='my-7 flex'>
          <div className='flex w-[80%] flex-col'>
            <div className='flex items-center'>
              <span>Trần Tuấn Vũ</span>
              <div className='mx-4 h-4 w-[1px] bg-football-gray7A/40'></div>
              <span className='text-football-gray7A'>0332 541 875</span>
            </div>

            <div className='mt-[2px] text-football-gray7A'>43 Tân Lập, Đông Hoà, Dĩ An, Bình Dương</div>
            <div className='mt-1 flex items-center text-[#27ae60]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='-mt-[0.5px] h-4 w-4 stroke-[#27ae60]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                />
              </svg>
              <span className='ml-[6px] text-base'>Địa chỉ mặc định</span>
            </div>
          </div>
          <div className='flex w-[20%] flex-col text-base'>
            <div className='mb-2 flex items-center justify-end text-football-primary'>
              <button className='bg-transparent px-2 py-1 text-football-primary hover:text-football-primary/90'>
                Cập nhật
              </button>
              <button className='ml-3 bg-transparent px-2 py-1 text-football-primary hover:text-football-primary/90'>
                Xoá
              </button>
            </div>
            <button className='border border-football-gray7A/50 bg-white px-2 py-1 hover:text-black/90'>
              Thiết lập mặc định
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
