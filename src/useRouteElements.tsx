import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import PATH from './constants/path'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Payment from './pages/Payment'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: PATH.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: PATH.login,
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: PATH.register,
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: PATH.products,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: PATH.productDetail,
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: PATH.cart,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: PATH.payment,
      element: (
        <MainLayout>
          <Payment />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
