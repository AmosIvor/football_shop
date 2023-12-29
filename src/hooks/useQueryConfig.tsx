import { ProductListConfig } from '~/types/product.type'
import useQueryParams from './useQueryParams'
import { RESULT, SORT_BY } from '~/constants/product'
import { isUndefined, omitBy } from 'lodash'

// export type QueryConfig = {
//   [key in keyof ProductListConfig]: string
// }

export type QueryConfig = {
  [key in keyof Omit<ProductListConfig, 'groups' | 'names'>]: string
} & {
  groups?: string[] | undefined
  names?: string[] | undefined
}

export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      productPerPage: queryParams.productPerPage || '8',
      names: queryParams.names,
      seasons: queryParams.seasons,
      club: queryParams.club || RESULT.false,
      nation: queryParams.nation || RESULT.false,
      minPrice: queryParams.minPrice,
      maxPrice: queryParams.maxPrice,
      sortBy: queryParams.sortBy || SORT_BY.TopSelling,
      descending: queryParams.descending,
      sizeS: queryParams.sizeS,
      sizeM: queryParams.sizeM,
      sizeL: queryParams.sizeL,
      sizeXL: queryParams.sizeXL,
      groups: queryParams.groups || ['']
    },
    isUndefined
  )
  return queryConfig
}
