import qs from 'qs'
import { useSearchParams } from 'react-router-dom'

export default function useQueryParams() {
  const [searchParams] = useSearchParams()
  const parsedQueryParams = qs.parse(new URLSearchParams(searchParams).toString())
  return parsedQueryParams
}
