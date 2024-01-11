export const DELIVERY_METHOD = {
  normal: 'NORMAL',
  express: 'EXPRESS'
}
export const deliveryMethodList = Object.values(DELIVERY_METHOD)

export interface Shipping {
  [key: string]: number
}

export const SHIPPING: Shipping = {
  express: 45000,
  normal: 30000
}

export const ORDER_STATUS = {
  all: 0,
  pending: 1,
  packaging: 2,
  delivering: 3,
  completed: 4
}

export const PAYMENT_METHOD = {
  cash: 'cash',
  vnpay: 'vnpay'
}
export const paymentMethodList = Object.values(PAYMENT_METHOD)

export const PAYMENT_CONTENT = {
  cash: 'Thanh toán khi nhận hàng',
  vnpay: 'Thay toán bằng ví vnpay'
}

export const orderStatusList = ['All', 'Pending', 'Packaging', 'Delivering', 'Completed']

export const ORDER_INFOR = [
  {
    status: 'All',
    statusVI: 'Tất cả',
    textColor: 'text-black',
    svg: `<svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='-mt-[2px] mr-2 h-5 w-5 stroke-black xs:mr-3'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
  </svg>`
  },
  {
    status: 'Pending',
    statusVI: 'Chờ xác nhận',
    textColor: 'text-black',
    svg: ``
  },
  {
    status: 'Packaging',
    statusVI: 'Đang đóng gói',
    textColor: 'text-black',
    svg: `<svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='-mt-[2px] mr-2 h-5 w-5 stroke-black xs:mr-3'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
  </svg>`
  },
  {
    status: 'Delivering',
    statusVI: 'Đang giao',
    textColor: 'text-football-primary',

    svg: ``
  },
  {
    status: 'Completed',
    statusVI: 'Đã giao',
    textColor: 'text-[#27ae60]',
    svg: ``
  }
]

// <svg
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 24 24'
//             strokeWidth={1.5}
//             stroke='currentColor'
//             className='-mt-[2px] mr-2 h-5 w-5 stroke-[#cd151c] xs:mr-3'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
//             />
//           </svg>
