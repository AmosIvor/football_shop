import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating'
import PATH from '~/constants/path'
import { Product as ProductType } from '~/types/product.type'
import DEFAULT_VALUE from '~/constants/default'
import { formatCurrency, formatNumberToSocialStyle, generateNameId } from '~/utils/utils'

interface Props {
  product: ProductType
}

export default function Product({ product }: Props) {
  return (
    <Link to={`${PATH.home}${generateNameId({ name: product.name, id: product.id })}`} preventScrollReset={false}>
      <div className='font-medidum overflow-hidden rounded-sm bg-white text-base shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src={product.urlThumb || DEFAULT_VALUE.club.image}
            alt={product.name || DEFAULT_VALUE.club.name}
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2 text-black'>
          <div className='line-clamp-1 min-h-[1.5rem] capitalize'>{product.name || DEFAULT_VALUE.club.name}</div>
          <div className='mt-2 flex flex-col items-start xs:flex-row xs:items-center'>
            <div className='trucate max-w-[50%] text-football-gray7A/70 line-through'>
              <span className='text-sm'>đ</span>
              <span className='text-lg'>{formatCurrency(product.price + 10)}</span>
            </div>
            <div className='ml-0 mt-0 truncate text-football-primary xs:ml-2 xs:mt-0'>
              <span className='text-sm'>đ</span>
              <span className='text-lg'>{formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className='mt-2 flex flex-col items-start justify-between xs:flex-row xs:items-center'>
            <ProductRating rating={product.point} />
            <div className='mr-1 mt-2 hidden xs:mt-0 xs:inline-block sm:mr-0 md:mr-1'>
              Đã bán {formatNumberToSocialStyle(product.sold)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
