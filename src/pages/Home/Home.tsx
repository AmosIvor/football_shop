import Product from '~/components/Product'

export default function Home() {
  return (
    <div className='bg-football-grayF6'>
      <div className='container'>
        {/* Slider */}
        <div className='relative'>
          <div className='h-[480px]'>
            <img
              src='https://i.eurosport.com/2020/08/15/2865191-59049828-2560-1440.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <div className='absolute left-[1%] top-[50%] -translate-y-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 stroke-white'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </div>
          <div className='absolute right-[1%] top-[50%] -translate-y-1/2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 stroke-white'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </div>
          <div className='absolute bottom-[2%] left-[50%] flex w-auto -translate-x-1/2 items-center gap-2 bg-transparent'>
            <div className='h-3 w-3 rounded-full border bg-football-primary'></div>
            <div className='h-3 w-3 rounded-full border bg-white'></div>
            <div className='h-3 w-3 rounded-full border bg-white'></div>
          </div>
        </div>

        {/* Collection */}
        <div className='py-[70px] text-lg font-semibold text-football-blue11'>
          <h2 className='mb-8 capitalize'>Bộ sưu tập</h2>
          <div className='mx-5 flex items-center justify-center gap-10 md:mx-0'>
            <button className='flex h-[50px] w-full flex-col items-center justify-start border-b-[3px] border-football-primary font-bold uppercase text-football-primary hover:border-football-primary hover:text-football-primary lg:w-[30%]'>
              Câu lạc bộ
            </button>

            <button className='flex h-[50px] w-full flex-col items-center justify-start border-b-[3px] border-gray-400 font-bold uppercase text-gray-400 hover:border-football-primary hover:text-football-primary lg:w-[30%]'>
              Đội tuyển quốc gia
            </button>
          </div>

          <div className='flex items-center justify-center pt-14'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  className='ml-6 mr-12 flex h-[175px] w-[172px] cursor-pointer flex-col items-center justify-center transition-transform duration-100 hover:translate-y-[-0.8rem] hover:text-football-primary'
                  key={index}
                >
                  <div className='h-[120px] w-[120px] overflow-hidden rounded-full bg-gray-500 hover:shadow-lg'>
                    <img
                      src='https://sportrankers.com/wp-content/uploads/2022/10/Premier-League-Logos-1024x577.png'
                      alt='option'
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <span className='mt-3 uppercase'>Premier League</span>
                </div>
              ))}
          </div>
        </div>

        {/* New arrival */}
        <div className='pb-[70px] text-base font-medium text-football-blue11'>
          <div className='mb-8 flex items-center justify-between text-lg font-semibold'>
            <h2 className='capitalize'>Hàng mới về</h2>
            <div className='flex items-center gap-2'>
              <h2 className='text-gray-400'>Xem thêm</h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3 stroke-gray-400'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </div>
          </div>
          {/* products */}
          <div className='grid grid-cols-10 gap-10'>
            {/* product */}
            {Array(5)
              .fill(0)
              .map((productIndex) => (
                <div className='col-span-2' key={productIndex}>
                  <Product />
                </div>
              ))}
          </div>
        </div>

        {/* Recommend */}
        <div className='pb-[70px] text-base font-medium text-football-blue11'>
          <div className='mb-8 flex items-center justify-between text-lg font-semibold'>
            <h2 className='capitalize'>HVPP Sports gợi ý cho bạn</h2>
            <div className='flex items-center gap-2'>
              <h2 className='text-gray-400'>Xem thêm</h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3 stroke-gray-400'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </div>
          </div>

          {/* products */}
          <div className='grid grid-cols-10 gap-10'>
            {/* product */}
            {Array(5)
              .fill(0)
              .map((productIndex) => (
                <div className='col-span-2' key={productIndex}>
                  <Product />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
