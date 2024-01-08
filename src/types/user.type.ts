type Role = 'Customer' | 'Admin'

export interface User {
  id: string
  role: Role
  name: string
  email: string
}

export interface UserUpdateRequestType {
  id?: string
  name?: string
  phone?: string
  address?: string
  dateBirth?: string
  avatar?: string
}

export interface UserPassword {
  email: string
  old: string
  newPw: string
}
