import { Link } from 'react-router-dom'

export default function SortProductList() {
  return (
    <div className='py-4'>
      <div className='flex flex-wrap items-center justify-between gap-2 text-lg font-normal'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sắp xếp theo</div>

          <button className='ml-2 items-center justify-center border border-football-primary bg-white px-4 py-[6px] text-center text-base capitalize text-football-primary hover:border-football-primary hover:bg-football-primary hover:text-white'>
            Phổ biến
          </button>

          <button className='ml-2 items-center justify-center border border-football-primary bg-white px-4 py-[6px] text-center text-base capitalize text-football-primary hover:border-football-primary hover:bg-football-primary hover:text-white'>
            Mới nhất
          </button>

          <button className='ml-2 items-center justify-center border border-football-primary bg-white px-4 py-[6px] text-center text-base capitalize text-football-primary hover:border-football-primary hover:bg-football-primary hover:text-white'>
            Bán chạy
          </button>

          <select className='ml-2 cursor-pointer border border-football-primary bg-white px-4 py-[6px] text-base capitalize text-football-primary outline-none'>
            <option value='' disabled className='bg-white text-gray-400'>
              Giá
            </option>
            <option className='bg-white text-black'>Giá: Thấp đến Cao</option>
            <option className='bg-white text-black'>Giá: Cao đến Thấp</option>
          </select>
        </div>

        <div className='flex items-center'>
          <div>
            <span className='text-football-primary'>1</span>
            <span>/3</span>
          </div>

          <div className='ml-3 flex'>
            <Link
              to=''
              className='flex h-[37px] items-center justify-center rounded-bl-sm rounded-tl-sm border border-football-primary bg-white px-4 hover:bg-football-primary hover:text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </Link>
            <Link
              to=''
              className='flex h-[37px] items-center justify-center rounded-br-sm rounded-tr-sm border-b border-r border-t border-football-primary bg-white px-4 hover:bg-football-primary hover:text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
