import { ProductListConfig } from '~/types/product.type'
import useQueryParams from './useQueryParams'
import { SORT_BY } from '~/constants/product'
import { isUndefined, omitBy } from 'lodash'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      productPerPage: queryParams.productPerPage || '8',
      names: queryParams.names,
      seasons: queryParams.seasons,
      club: queryParams.club,
      nation: queryParams.nation,
      minPrice: queryParams.minPrice,
      maxPrice: queryParams.maxPrice,
      sortBy: queryParams.sortBy || SORT_BY.TopSelling,
      descending: queryParams.descending,
      sizeS: queryParams.sizeS,
      sizeM: queryParams.sizeM,
      sizeL: queryParams.sizeL,
      sizeXL: queryParams.sizeXL,
      category: queryParams.category
    },
    isUndefined
  )
  return queryConfig
}
