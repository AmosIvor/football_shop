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

export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}

export const rateSale = (original: number, sale: number) => {
  return Math.round(((original - sale) / original) * 100) + '%'
}

const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i,${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i,')
  return arr[arr.length - 1]
}

export const getSize = (sizeString: string) => {
  return sizeString.split(': ')[1]
}

export const handleDate = (date: Date) => {
  const dateFormat = new Date(date)
  const newDate = new Date(dateFormat.getTime() + 7 * 60 * 60 * 1000)
  return newDate
}

export function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
