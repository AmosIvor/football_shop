import { Navigate, Outlet, useRoutes } from 'react-router-dom'
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
import UserLayout from './pages/User/layouts/UserLayout'
import Profile from './pages/User/pages/Profile'
import ChangePassword from './pages/User/pages/ChangePassword'
import HistoryPurchase from './pages/User/pages/HistoryPurchase'
import RatingProducted from './pages/User/pages/RatingProducted'
import Address from './pages/User/pages/Address'
import Voucher from './pages/User/pages/Voucher'
import DetailHistoryPurchase from './pages/User/pages/DetailHistoryPurchase'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.login} />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  console.log(isAuthenticated)
  return !isAuthenticated ? <Outlet /> : <Navigate to={PATH.home} />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: PATH.home,
      element: <ProtectedRoute />,
      children: [
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
        },
        {
          path: PATH.user,
          element: (
            <MainLayout>
              <UserLayout />
            </MainLayout>
          ),
          children: [
            {
              path: PATH.profile,
              element: <Profile />
            },
            {
              path: PATH.address,
              element: <Address />
            },
            {
              path: PATH.changePassword,
              element: <ChangePassword />
            },
            {
              path: PATH.historyPurchase,
              element: <HistoryPurchase />
            },
            {
              path: PATH.detailHistoryPurchase,
              element: <DetailHistoryPurchase />
            },
            {
              path: PATH.voucher,
              element: <Voucher />
            },
            {
              path: PATH.ratingProducted,
              element: <RatingProducted />
            }
          ]
        }
      ]
    },
    {
      path: PATH.home,
      element: <RejectedRoute />,
      children: [
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
        }
      ]
    },
    {
      path: PATH.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
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
    }
  ])
  return routeElements
}
