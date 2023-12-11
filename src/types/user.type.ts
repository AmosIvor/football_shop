type Role = 'Customer' | 'Admin'

export interface User {
  id: string
  role: Role
  name: string
  email: string
}
