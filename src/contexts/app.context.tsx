import { createContext, useState } from 'react'
import { Customer } from '~/types/customer.type'
import { getAccessTokenFromLocalStorage, getProfileFromLocalStorage } from '~/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: Customer | null
  setProfile: React.Dispatch<React.SetStateAction<Customer | null>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLocalStorage()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLocalStorage(),
  setProfile: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)

  const [profile, setProfile] = useState<Customer | null>(initialAppContext.profile)

  // const reset = () => {
  //   setIsAuthenticated(false)
  //   setProfile(null)
  // }

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
