const PATH = {
  home: '/',
  login: '/login',
  register: '/register',
  logout: '/logout',
  products: '/products',
  productDetail: '/:nameId',
  cart: '/cart',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  historyPurchase: '/user/purchase'
} as const

export default PATH
