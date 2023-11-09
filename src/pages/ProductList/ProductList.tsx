import Product from '~/components/Product'
import AsideFilter from './components/AsideFilter'
import SortProductList from './components/SortProductList'
import Pagination from '~/components/Pagination'

export default function ProductList() {
  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          {/* Aside Filter */}
          <div className='col-span-3'>
            <AsideFilter />
          </div>

          {/* Product List */}
          <div className='col-span-9'>
            {/* Sort Product List */}
            <SortProductList />

            {/* Products */}
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4'>
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
