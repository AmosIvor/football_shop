import axios, { AxiosError } from 'axios'
import HttpStatusCode from '~/constants/httpStatusCode.enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

// type predicate
export function isAxiosLoginError<FormError>(error: unknown): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    (error.response?.status === HttpStatusCode.UnprocessableEntity ||
      error.response?.status === HttpStatusCode.Unauthorized)
  )
}
