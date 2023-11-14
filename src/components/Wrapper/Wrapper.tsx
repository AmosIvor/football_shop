import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

export default function Wrapper({ children }: Props) {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}
