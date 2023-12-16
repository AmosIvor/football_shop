import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { isUndefined, omit, omitBy } from 'lodash'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import productApi from '~/apis/product.api'
import Product from '~/components/Product'
import { CLUB } from '~/constants/club'
import { NATION } from '~/constants/nation'
import PATH from '~/constants/path'
import useQueryParams from '~/hooks/useQueryParams'
import { ProductListConfig } from '~/types/product.type'

type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

const CATEGORY = {
  club: 'club',
  nation: 'nation'
} as const

export default function Home() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      productPerPage: queryParams.productPerPage || '20',
      sortBy: queryParams.sortBy || 'Name',
      club: queryParams.club || 'true',
      nation: queryParams.nation || 'false'
    },
    isUndefined
  )
  const { club, nation } = queryConfig
  console.log('query config: ', queryConfig)

  const navigate = useNavigate()

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    }
  })

  const isActiveCategory = (nameCategory: keyof typeof CATEGORY) => () => {
    if (nameCategory === CATEGORY.club) {
      return club && club === 'true'
    } else if (nameCategory === CATEGORY.nation) {
      return nation && nation === 'true'
    }
  }

  const handleSort = (nameCategory: keyof typeof CATEGORY) => () => {
    let resultParams = {}
    if (nameCategory === CATEGORY.club) {
      resultParams = {
        ...queryConfig,
        club: true,
        nation: false
      }
    } else if (nameCategory === CATEGORY.nation) {
      resultParams = {
        ...queryConfig,
        nation: true,
        club: false
      }
    }

    navigate({
      pathname: PATH.home,
      search: createSearchParams(omit(resultParams, ['productPerPage', 'page', 'sortBy'])).toString()
    })
  }

  console.log('productList: ', productsData)

  return (
    <div className='bg-football-grayF6'>
      <div className='mx-auto w-full px-0 md:w-[90%] md:px-4 lg:w-[84%] xl:w-[78%]'>
        {/* Slider */}
        <div className='relative'>
          <div className='md:h-[480px]'>
            <img
              src='https://www.mykhel.com/img/2018/04/kevindebruyne-cropped_mj5kuoisho5611r2iq9at50tv.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <button className='absolute left-[1%] top-[50%] -translate-y-1/2'>
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
          </button>
          <button className='absolute right-[1%] top-[50%] -translate-y-1/2'>
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
          </button>
          <div className='absolute bottom-[2%] left-[50%] flex w-auto -translate-x-1/2 items-center gap-2 bg-transparent'>
            <button className='h-3 w-3 rounded-full border bg-football-primary'></button>
            <button className='h-3 w-3 rounded-full border bg-white'></button>
            <button className='h-3 w-3 rounded-full border bg-white'></button>
          </div>
        </div>
      </div>
      <div className='asir-container'>
        {/* Collection */}
        <div className='py-[70px] text-lg font-semibold text-football-blue11'>
          <h2 className='mb-8 capitalize'>Bộ sưu tập</h2>
          <div className='mx-5 flex items-center justify-center gap-6 md:mx-10 md:gap-10'>
            <button
              className={classNames(
                'flex h-[50px] w-[30%] flex-col items-center justify-start border-b-[3px] font-bold uppercase hover:border-football-primary hover:text-football-primary',
                {
                  'border-b-football-primary text-football-primary': isActiveCategory(CATEGORY.club)(),
                  'border-b-football-gray7A/80 text-football-gray7A/80': !isActiveCategory(CATEGORY.club)()
                }
              )}
              onClick={handleSort(CATEGORY.club)}
            >
              Câu lạc bộ
            </button>

            <button
              className={classNames(
                'flex h-[50px] w-[30%] flex-col items-center justify-start border-b-[3px] font-bold uppercase hover:border-football-primary hover:text-football-primary',
                {
                  'border-b-football-primary text-football-primary': isActiveCategory(CATEGORY.nation)(),
                  'border-b-football-gray7A/80 text-football-gray7A/80': !isActiveCategory(CATEGORY.nation)()
                }
              )}
              onClick={handleSort(CATEGORY.nation)}
            >
              Đội tuyển
            </button>
          </div>

          <div className='grid grid-cols-12 justify-items-center gap-2 pt-14 lg:mx-10 lg:gap-6 xl:grid-cols-10 xl:gap-8'>
            {isActiveCategory(CATEGORY.club)() &&
              CLUB.map((item, index) => {
                if (index >= 5) {
                  return
                }
                return (
                  <div
                    className='col-span-6 flex h-[175px] w-[172px] cursor-pointer flex-col items-center justify-center transition-transform duration-100 hover:translate-y-[-0.8rem] hover:text-football-primary sm:col-span-4 lg:col-span-3 xl:col-span-2'
                    key={index}
                  >
                    <div className='h-[120px] w-[120px] overflow-hidden rounded-full bg-white shadow-lg hover:shadow-lg'>
                      <img src={item.imageNoText} alt='option' className='h-full w-full object-cover' />
                    </div>
                    <span className='mt-3 truncate normal-case sm:uppercase'>{item.name}</span>
                  </div>
                )
              })}
            {isActiveCategory(CATEGORY.nation)() &&
              NATION.map((item, index) => {
                return (
                  <div
                    className='col-span-6 flex h-[175px] w-[172px] cursor-pointer flex-col items-center justify-center transition-transform duration-100 hover:translate-y-[-0.8rem] hover:text-football-primary sm:col-span-4 lg:col-span-3 xl:col-span-2'
                    key={index}
                  >
                    <div className='h-[120px] w-[120px] overflow-hidden rounded-full bg-white shadow-lg hover:shadow-lg'>
                      <img src={item.imageNoText} alt='option' className='h-full w-full object-cover' />
                    </div>
                    <span className='mt-3 truncate normal-case sm:uppercase'>{item.name}</span>
                  </div>
                )
              })}
          </div>
        </div>

        {/* New arrival */}
        <div className='pb-[70px] text-base font-medium text-football-blue11'>
          <div className='mb-6 flex items-center justify-between text-lg font-semibold'>
            <h2 className='capitalize'>Hàng mới về</h2>
            <Link to={PATH.products} className='flex items-center gap-2'>
              <h2 className='font-normal text-football-gray7A'>Xem thêm</h2>
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
          {/* products */}
          <div className='grid grid-cols-12 gap-x-3 gap-y-5 xs:gap-4 sm:gap-2 md:gap-4 2xl:grid-cols-10'>
            {/* product */}
            {Array(5)
              .fill(0)
              .map((productIndex) => (
                <div
                  className='col-span-6 xs:col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2'
                  key={productIndex}
                >
                  <Product />
                </div>
              ))}
          </div>
        </div>

        {/* Recommend */}
        <div className='pb-[70px] text-base font-medium text-football-blue11'>
          <div className='mb-6 flex items-center justify-between text-lg font-semibold'>
            <h2 className='capitalize'>HVPP Sports gợi ý</h2>
            <Link to={PATH.products} className='flex items-center gap-2'>
              <h2 className='font-normal text-football-gray7A'>Xem thêm</h2>
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
            </Link>
          </div>

          {/* products */}
          <div className='grid grid-cols-12 gap-x-3 gap-y-5 xs:gap-4 sm:gap-2 md:gap-4 2xl:grid-cols-10'>
            {/* product */}
            {Array(5)
              .fill(0)
              .map((productIndex) => (
                <div
                  className='col-span-6 xs:col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2'
                  key={productIndex}
                >
                  <Product />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
