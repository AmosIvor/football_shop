import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useContext } from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import orderApi from '~/apis/order.api'
import { ORDER_STATUS, orderStatusList } from '~/constants/order'
import PATH from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import useQueryParams from '~/hooks/useQueryParams'
import { Customer } from '~/types/customer.type'
import ProductHistory from '../../components/ProductHistory'

const purchaseTabs = [
  { status: ORDER_STATUS.all, name: 'Tất cả' },
  { status: ORDER_STATUS.pending, name: 'Chờ xác nhận' },
  { status: ORDER_STATUS.packaging, name: 'Đang đóng gói' },
  { status: ORDER_STATUS.delivering, name: 'Đang giao' },
  { status: ORDER_STATUS.completed, name: 'Đã giao' }
  // { status: ORDER_STATUS.cancelled, name: 'Đã hủy' }
]

export default function HistoryPurchase() {
  const { profile } = useContext(AppContext)

  const idCustomer = (profile as Customer).id
  const queryParams: { status?: string } = useQueryParams()
  const status: number = Number(queryParams.status) || ORDER_STATUS.all

  const { data: historyPurchaseData } = useQuery({
    queryKey: ['history-purchases', status],
    queryFn: () => orderApi.getOrders(idCustomer, status)
  })

  console.log('data history', historyPurchaseData)

  const purchaseTabsLink = purchaseTabs.map((tab) => (
    <Link
      key={tab.status}
      to={{
        pathname: PATH.historyPurchase,
        search: createSearchParams({
          status: String(tab.status)
        }).toString()
      }}
      className={classNames(
        'md:first:grow-1 md:last:grow-1 flex w-auto flex-shrink-0 items-center justify-center border-b-2 border-transparent bg-white px-5 py-3 text-center hover:text-football-primary userScreenS:flex-1 userScreenS:px-0 lg:w-auto lg:flex-auto lg:flex-shrink-0 lg:px-5 xl:flex-1 xl:px-0',
        {
          'border-b-2 border-b-football-primary text-football-primary': status === tab.status,
          'border-transparent text-black': status !== tab.status
        }
      )}
    >
      {tab.name}
    </Link>
  ))

  return (
    <div className='bg-transparent'>
      {/* Header */}
      <div className='sticky top-0 flex overflow-x-auto scroll-smooth rounded-t-sm bg-white text-base text-black shadow-sm scrollbar-hide sm:flex sm:flex-nowrap sm:overflow-auto sm:text-lg lg:overflow-x-scroll xl:overflow-auto'>
        {purchaseTabsLink}
      </div>

      {/* Body */}
      <div className='bg-transparent text-base text-black sm:text-lg'>
        {/* ProductList */}
        {status === 0 &&
          historyPurchaseData?.data.map((item, index) => (
            <ProductHistory idPurchase={item.id} status={item.status} key={index} />
          ))}
      </div>
    </div>
  )
}
