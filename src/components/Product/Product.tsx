import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating'
import PATH from '~/constants/path'

export default function Product() {
  return (
    <Link to={PATH.productDetail} preventScrollReset={false}>
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
          <div className='xs:flex-row xs:items-center mt-2 flex flex-col items-start'>
            <div className='trucate max-w-[50%] text-gray-500 line-through'>
              <span className='text-sm'>đ</span>
              <span className='text-lg'>218.000</span>
            </div>
            <div className='xs:ml-2 xs:mt-0 ml-0 mt-0 truncate text-football-primary'>
              <span className='text-sm'>đ</span>
              <span className='text-lg'>119.000</span>
            </div>
          </div>
          <div className='xs:flex-row xs:items-center mt-2 flex flex-col items-start justify-between'>
            <ProductRating />
            <div className='xs:mt-0 xs:inline-block mr-1 mt-2 hidden sm:mr-0 md:mr-1'>Đã bán 4,5K</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
