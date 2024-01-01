import { createSearchParams, useNavigate } from 'react-router-dom'
import { NameSchema, nameSchema } from '~/utils/rules'
import useQueryConfig from './useQueryConfig'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import PATH from '~/constants/path'
import { omit } from 'lodash'
import { SORT_BY } from '~/constants/product'

type FormData = NameSchema

export default function useSearchProducts() {
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })

  const onSubmitSearch = handleSubmit((data) => {
    const config = omit({ ...queryConfig }, [
      'minPrice',
      'maxPrice',
      'club',
      'nation',
      'sizeS',
      'sizeM',
      'sizeL',
      'sizeXL',
      'groups',
      'names',
      'sortBy',
      'descending'
    ])
    navigate({
      pathname: PATH.products,
      search: createSearchParams({
        ...config,
        names: data.name,
        sortBy: SORT_BY.TopSelling
      }).toString()
    })
  })
  return { onSubmitSearch, register }
}
