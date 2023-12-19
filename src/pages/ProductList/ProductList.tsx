import Product from '~/components/Product'
import AsideFilter from './components/AsideFilter'
import Pagination from '~/components/Pagination'
import SortProductList from './components/SortProductList'
import useQueryConfig from '~/hooks/useQueryConfig'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import productApi from '~/apis/product.api'
import { ProductListConfig } from '~/types/product.type'

export default function ProductList() {
  const queryConfig = useQueryConfig()
  console.log(queryConfig)

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    placeholderData: keepPreviousData,
    staleTime: 3 * 60 * 1000
  })

  // console.log('list product: ', productsData)
  return (
    <div className='bg-football-grayF6 pb-6 pt-4'>
      <div className='asir-container'>
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            {/* Aside Filter */}
            <div className='hidden lg:col-span-3 lg:inline-flex'>
              <AsideFilter queryConfig={queryConfig} />
            </div>

            {/* Product List */}
            <div className='col-span-12 lg:col-span-9'>
              {/* Sort Product List */}
              <SortProductList queryConfig={queryConfig} />

              {/* Products */}
              <div className='mt-6 grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-3 sm:gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-4 xl:grid-cols-3 xl:gap-x-3 xl:gap-y-4 2xl:grid-cols-4 2xl:gap-x-3 2xl:gap-y-4'>
                {productsData.data.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
