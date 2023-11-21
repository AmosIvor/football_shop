import Product from '~/components/Product'
import AsideFilter from './components/AsideFilter'
import Pagination from '~/components/Pagination'
import SortProductList from './components/SortProductList'

export default function ProductList() {
  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='asir-container'>
        <div className='grid grid-cols-12 gap-6'>
          {/* Aside Filter */}
          <div className='hidden lg:col-span-3 lg:inline-flex'>
            <AsideFilter />
          </div>

          {/* Product List */}
          <div className='col-span-12 lg:col-span-9'>
            {/* Sort Product List */}
            <SortProductList />

            {/* Products */}
            <div className='mt-6 grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-3 sm:gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-4 xl:grid-cols-3 xl:gap-x-3 xl:gap-y-4 2xl:grid-cols-4 2xl:gap-x-3 2xl:gap-y-4'>
              {Array(12)
                .fill(0)
                .map((_, index) => (
                  <Product key={index} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}
