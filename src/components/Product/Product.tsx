import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to=''>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwd2f53edb/images/large/861339652001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
            alt='shirt'
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2 text-black'>
          <div className='line-clamp-2 min-h-[3rem] capitalize'>
            Manchester City Manchester City Manchester City Manchester City 22/23
          </div>
          <div className='mt-2 flex items-center'>
            <div className='trucate max-w-[50%] text-gray-500 line-through'>
              <span className='text-sm'>đ</span>
              <span className='text-lg'>218.000</span>
            </div>
            <div className='ml-2 truncate text-football-primary'>
              <span className='text-sm'>đ</span>
              <span className='text-lg'>119.000</span>
            </div>
          </div>
          <div className='mt-2 flex items-center justify-between'>
            <div className='flex items-center gap-[2px]'>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    width={14}
                    height={15}
                    className='fill-football-primary'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    key={index}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.43 14.415L7 12.453l3.57 1.962c.513.282 1.111-.178 1.013-.779l-.68-4.147 2.883-2.939c.418-.426.189-1.17-.387-1.258L9.41 4.686 7.627.909a.685.685 0 00-1.254 0L4.59 4.686.6 5.292c-.575.087-.804.832-.386 1.258L3.098 9.49l-.68 4.147c-.1.601.499 1.061 1.013.779z'
                      className='fill-inherit'
                    />
                  </svg>
                ))}
            </div>
            <div className='mr-1'>Đã bán 4,5K</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
