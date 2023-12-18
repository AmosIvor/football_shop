type Role = 'Customer' | 'Admin'

export interface Customer {
  id: string
  name: string
  phone: string
  male: boolean
  address: string
  dateBirth: string
  avatar: string
  email?: string
  role?: Role
}
