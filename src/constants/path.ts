const PATH = {
  home: '/',
  login: '/login',
  register: '/register',
  logout: '/logout',
  products: '/products',
  productDetail: '/:nameId',
  cart: '/cart',
  payment: '/payment',
  user: '/user',
  profile: '/user/profile',
  address: '/user/address',
  changePassword: '/user/password',
  voucher: '/user/voucher',
  historyPurchase: '/user/purchase',
  ratingProducted: '/user/rating',
  detailHistoryPurchase: '/user/purchase/order/:nameId'
} as const

export default PATH
