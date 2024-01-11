import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import deliveryApi from '~/apis/delivery.api'
import orderApi from '~/apis/order.api'
import ModalPaymentAddress from '~/components/Modal/ModalPaymentAddress'
import {
  DELIVERY_METHOD,
  PAYMENT_CONTENT,
  PAYMENT_METHOD,
  SHIPPING,
  deliveryMethodList,
  paymentMethodList
} from '~/constants/order'
import PATH from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { Customer } from '~/types/customer.type'
import { DeliveryResponse } from '~/types/delivery.type'
import { OrderRequest } from '~/types/order.type'
import { ExtendedPurchase } from '~/types/purchase.type'
import { formatCurrency } from '~/utils/utils'

export default function Payment() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const location = useLocation()
  const { profile } = useContext(AppContext)
  const [isVisibleModalAddress, setIsVisibleModalAddress] = useState<boolean>(false)
  const [currentAddress, setCurrentAddress] = useState<DeliveryResponse | null>(null)
  const [currentPayMethod, setCurrentPaymethod] = useState<string>(PAYMENT_METHOD.cash)
  const [currentDelivery, setCurrentDelivery] = useState<string>(DELIVERY_METHOD.normal)

  const idCustomer = (profile as Customer).id
  const selectedProducts = location.state.selectedProducts as ExtendedPurchase[]

  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((result, current) => result + current.product.price * current.quantity, 0)
  }, [selectedProducts])

  const shippingPrice = useMemo(() => {
    if (DELIVERY_METHOD.normal === currentDelivery) {
      return SHIPPING.normal
    } else if (DELIVERY_METHOD.express === currentDelivery) {
      return SHIPPING.express
    } else {
      return 0
    }
  }, [currentDelivery])

  // get addresses
  const { data: addressesData, refetch } = useQuery({
    queryKey: ['addresses'],
    queryFn: () => deliveryApi.getAddresses(idCustomer)
  })

  // order
  const createOrderMutation = useMutation({
    mutationFn: orderApi.createOrder
  })

  useEffect(() => {
    if (addressesData) {
      setCurrentAddress(addressesData.data[0])
    }
  }, [addressesData])

  const handleChangeDeliveryMethod = (method: string) => {
    setCurrentDelivery(method)
  }

  const handleChangePayMethod = (method: string) => {
    setCurrentPaymethod(method)
  }

  const handleChangeAddress = () => {
    setIsVisibleModalAddress(true)
  }

  const handleSetAddress = (value: number) => {
    if (addressesData) {
      setCurrentAddress(addressesData?.data[value])
    }
  }

  const handleSubmitOrder = () => {
    console.log('submit order')
    const formatSelectedProducts = selectedProducts.map((product) => ({
      productID: product.productID,
      size: product.size,
      quantity: product.quantity
    }))
    const newOrder: OrderRequest = {
      customerID: (profile as Customer).id,
      address: (currentAddress as DeliveryResponse).address,
      phone: (profile as Customer).phone,
      deliveryMethod: currentDelivery,
      name: (profile as Customer).name,
      note: '',
      payMethod: currentPayMethod,
      shipping: shippingPrice,
      voucherID: '',
      value: totalPrice + shippingPrice,
      selectedProducts: formatSelectedProducts
    }

    createOrderMutation.mutate(newOrder, {
      onSuccess: (data) => {
        console.log('data respons: ', data)
        queryClient.invalidateQueries({ queryKey: ['carts'] })
        navigate(PATH.cart)
      }
    })
  }

  return (
    <div className='bg-football-grayF6 py-6'>
      <div className='asir-container'>
        <h1 className='text-lg font-bold uppercase text-football-primary'>Thanh toán</h1>
      </div>

      <div className='mx-auto w-full px-0 sm:px-7 md:w-[90%] md:px-4 lg:w-[84%] xl:w-[78%]'>
        <div className='grid grid-cols-12 gap-4'>
          {/* Left Contents */}
          <div className='col-span-12 text-lg font-normal text-black 2xl:col-span-9'>
            {/* Purchases */}
            <div className='mt-4 rounded-[4px] bg-white px-3 py-3 text-lg text-black shadow-sm sm:px-5'>
              {/* Title */}
              <div className='grid grid-cols-12 gap-3 px-5'>
                <div className='col-span-12 flex items-center sm:col-span-9 md:col-span-6 lg:col-span-5'>
                  <span className='-ml-1 text-football-gray7A/80 sm:-ml-5 lg:text-lg xl:text-xl'>Sản phẩm</span>
                </div>

                <div className='gap-3 text-base text-football-gray7A/50 sm:col-span-3 sm:flex sm:items-center sm:justify-end md:col-span-6 md:grid md:grid-cols-9 md:items-center md:justify-items-center lg:col-span-7 lg:grid-cols-10 xl:text-lg'>
                  <div className='hidden lg:col-span-2 lg:inline-block'>
                    <span className=''>Kích thước</span>
                  </div>
                  <div className='hidden md:col-span-3 md:inline-block lg:col-span-3'>Đơn giá</div>
                  <div className='hidden md:col-span-3 md:inline-block lg:col-span-2'>Số lượng</div>
                  <div className='hidden justify-self-end sm:col-span-5 sm:inline-block md:col-span-3 lg:col-span-3'>
                    Thành tiền
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className='my-4'>
                {selectedProducts.length !== 0 &&
                  selectedProducts.map((item, index) => (
                    <div
                      className='mt-3 grid grid-cols-12 gap-3 border border-gray-200 p-4 text-base sm:p-5 xl:text-lg'
                      key={index + 1000}
                    >
                      <div className='col-span-12 flex items-center sm:col-span-9 md:col-span-6 lg:col-span-5'>
                        <div className='mr-3 h-[140px] w-[100px] shrink-0 overflow-hidden rounded-[4px] shadow-sm xs:h-[160px] xs:w-[120px] sm:h-[140px] sm:w-[100px] md:h-[100px] md:w-[75px] lg:h-[65px] lg:w-[65px]'>
                          <img
                            src={item.product.urlThumb}
                            alt={item.product.name}
                            className='h-full w-full object-cover'
                          />
                        </div>
                        <div className='flex h-[140px] flex-grow flex-col justify-between xs:h-[160px] sm:h-[140px] md:h-[100px] lg:h-auto'>
                          <span className=''>{item.product.name}</span>
                          <div className='flex flex-col'>
                            <span className='mb-2 md:mb-0 lg:hidden'>Kích thước: {item.size.replace('Size', '')}</span>
                            <span className='mb-2 hidden xs:inline-block sm:hidden'>
                              Đơn giá: {formatCurrency(item.product.price)}đ
                            </span>
                            <div className='flex flex-col xs:flex-row xs:items-center xs:justify-between md:hidden'>
                              <span className='mb-2 xs:mb-0'>Số lượng: {item.quantity}</span>
                              <div className='flex items-center'>
                                <span className='mr-2 xs:hidden'>Thành tiền:</span>
                                <span className='font-semibold text-football-primary sm:hidden'>
                                  {formatCurrency(item.product.price * item.quantity)}đ
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='hidden gap-3 sm:col-span-3 sm:flex sm:flex-col sm:items-end md:col-span-6 md:grid md:grid-cols-9 md:items-start md:justify-items-center lg:col-span-7 lg:grid-cols-10 lg:items-center'>
                        <div className='hidden lg:col-span-2 lg:inline-block'>
                          <span className=''>{item.size.replace('Size', '')}</span>
                        </div>
                        <div className='hidden md:col-span-3 md:inline-block lg:col-span-3'>
                          {formatCurrency(item.product.price)}đ
                        </div>
                        <div className='hidden md:col-span-3 md:inline-block lg:col-span-2'>{item.quantity}</div>
                        <div className='justify-self-end font-semibold text-football-primary sm:col-span-10 md:col-span-3 lg:col-span-3'>
                          {formatCurrency(item.quantity * item.product.price)}đ
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Payment */}
            <div className='mt-4 rounded-[4px] bg-white px-7 py-3 text-lg text-black shadow-sm sm:px-5'>
              <div className='flex flex-col gap-3 px-5'>
                <h1 className='-ml-4 text-xl font-semibold text-football-gray7A xs:-ml-5'>Phương thức thanh toán</h1>

                <div className='-ml-4 sm:ml-0'>
                  {paymentMethodList.map((item, index) => (
                    <div className='mb-4 flex items-start xs:items-center' key={index}>
                      <input
                        id={`${item}`}
                        type='radio'
                        name='payment-method'
                        className='mt-[6px] h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent xs:mt-0'
                        checked={currentPayMethod === item}
                        onChange={() => handleChangePayMethod(item)}
                      />
                      <label htmlFor='default-radio-1' className='ml-3'>
                        {item === PAYMENT_METHOD.cash && PAYMENT_CONTENT.cash}
                        {item === PAYMENT_METHOD.vnpay && PAYMENT_CONTENT.vnpay}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className='mt-4 rounded-[4px] bg-white px-7 py-3 text-lg text-black shadow-sm sm:px-5'>
              <div className='flex flex-col gap-3 px-5'>
                <h1 className='-ml-4 text-xl font-semibold text-football-gray7A xs:-ml-5'>Phương thức vận chuyển</h1>

                <div className='-ml-4 sm:ml-0'>
                  {deliveryMethodList.map((item, index) => (
                    <div className='mb-4 flex items-start xs:items-center' key={index}>
                      <input
                        id={`${item}`}
                        type='radio'
                        name='delivery-method'
                        className='mt-[6px] h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent xs:mt-0'
                        checked={currentDelivery === item}
                        onChange={() => handleChangeDeliveryMethod(item)}
                      />
                      <label htmlFor='default-radio-1' className='ml-3'>
                        Đơn vị vận chuyển {item === DELIVERY_METHOD.normal && DELIVERY_METHOD.normal}
                        {item === DELIVERY_METHOD.express && DELIVERY_METHOD.express}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className='col-span-12 text-lg font-normal text-black 2xl:col-span-3'>
            <div className='mt-4 rounded-[4px] bg-white px-7 pb-4 pt-3 shadow-sm sm:px-5 2xl:px-4 laptop:px-5'>
              <div className='flex items-center justify-between'>
                <span className='text-xl font-semibold text-football-gray7A'>Giao tới</span>
                <button className='flex bg-transparent text-center text-football-primary' onClick={handleChangeAddress}>
                  Thay đổi
                </button>
              </div>
              {currentAddress && (
                <>
                  <div className='my-3 flex items-center'>
                    <span className='font-semibold'>{currentAddress.name}</span>
                    <div className='mx-4 h-[12px] w-[1px] bg-gray-300'></div>
                    <span className='font-semibold'>{currentAddress.phone}</span>
                  </div>
                  <div className='text-football-gray7A'>{currentAddress.address}</div>
                  {currentAddress.priority === 1 && (
                    <div className='mt-2 flex items-center text-[#27ae60]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='-mt-[0.5px] h-4 w-4 stroke-[#27ae60]'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                        />
                      </svg>
                      <span className='ml-[6px] text-base'>Địa chỉ mặc định</span>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className='mt-4 rounded-[4px] bg-white px-7 pb-4 pt-3 shadow-sm sm:px-5 2xl:px-4 laptop:px-5'>
              <span className='text-xl font-semibold text-football-gray7A'>HVPP Sports khuyến mãi</span>
              <button className='mb-1 mt-3 flex items-center bg-transparent text-football-primary'>
                <svg width={24} height={24} className='fill-football-primary' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M14.8 8L16 9.2 9.2 16 8 14.8 14.8 8zM4 4h16c1.11 0 2 .89 2 2v4a2 2 0 000 4v4c0 1.11-.89 2-2 2H4a2 2 0 01-2-2v-4c1.11 0 2-.89 2-2a2 2 0 00-2-2V6a2 2 0 012-2zm0 2v2.54a3.994 3.994 0 010 6.92V18h16v-2.54a3.994 3.994 0 010-6.92V6H4zm5.5 2c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11 8 10.33 8 9.5 8.67 8 9.5 8zm5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z'
                    className='fill-inherit'
                  />
                </svg>
                <span className='ml-3 2xl:ml-2 laptop:ml-3'>Chọn khuyến mãi phù hợp</span>
              </button>
            </div>

            <div className='mt-4 flex flex-col items-center rounded-[4px] bg-white px-7 pb-4 pt-4 shadow-sm sm:px-5 2xl:px-4 laptop:px-5'>
              <div className='flex w-full items-center justify-between text-lg font-normal text-football-gray7A 2xl:font-semibold'>
                <span className='flex w-auto items-center justify-start sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] xl:justify-end 2xl:w-[50%] 2xl:justify-start'>
                  Tổng tiền hàng
                </span>
                <span className='flex w-auto items-center justify-end text-xl sm:w-[35%] md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-[50%]'>
                  {formatCurrency(totalPrice)}đ
                </span>
              </div>
              <div className='mt-3 flex w-full items-center justify-between text-lg font-normal text-football-gray7A xl:mt-2 2xl:mt-0 2xl:font-semibold'>
                <span className='flex w-auto items-center justify-start sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] xl:justify-end 2xl:w-[50%] 2xl:justify-start'>
                  Khuyến mãi
                </span>
                <span className='flex w-auto items-center justify-end text-xl sm:w-[35%] md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-[50%]'>
                  - 0đ
                </span>
              </div>
              <div className='mt-3 flex w-full items-center justify-between text-lg font-normal text-football-gray7A xl:mt-2 2xl:mt-0 2xl:font-semibold'>
                <span className='flex w-auto items-center justify-start sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] xl:justify-end 2xl:w-[50%] 2xl:justify-start'>
                  Phí vận chuyển
                </span>
                <span className='flex w-auto items-center justify-end text-xl sm:w-[35%] md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-[50%]'>
                  {formatCurrency(shippingPrice)}đ
                </span>
              </div>

              <div className='my-5 h-[1px] w-full bg-gray-300/50'></div>

              <div className='flex w-full items-end justify-between font-medium 2xl:font-semibold'>
                <span className='mb-[1px] flex w-auto items-center justify-start text-xl text-football-gray7A sm:w-[65%] sm:justify-end md:w-[70%] lg:w-[74%] xl:w-[78%] 2xl:w-auto 2xl:justify-start'>
                  Thanh toán
                </span>
                <span className='flex w-auto items-center justify-end text-2xl font-semibold text-football-primary sm:w-[35%] sm:text-3xl md:w-[30%] lg:w-[26%] xl:w-[22%] 2xl:w-auto 2xl:text-2xl'>
                  {formatCurrency(totalPrice + shippingPrice)}đ
                </span>
              </div>
            </div>

            <div className='mt-4 flex flex-col-reverse items-center rounded-[4px] bg-white px-7 py-4 shadow-sm sm:flex-row sm:justify-between sm:px-5 2xl:mt-0 2xl:bg-transparent 2xl:px-0 2xl:pb-0 2xl:pt-4'>
              <Link
                to={PATH.cart}
                className='mt-4 flex items-center text-lg font-normal text-football-primary sm:mt-0 2xl:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='mr-2 h-4 w-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
                Quay trở lại giỏ hàng
              </Link>
              <button
                className='flex w-full items-center justify-center bg-football-primary px-6 py-2 text-lg uppercase text-white shadow hover:bg-football-primary/90 sm:w-52 2xl:w-full'
                onClick={() => handleSubmitOrder()}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <ModalPayment isVisible={isVisible} handleSubmit={hideModal} handleCancel={hideModal} /> */}
      <ModalPaymentAddress
        isVisible={isVisibleModalAddress}
        setIsVisible={setIsVisibleModalAddress}
        addresses={addressesData?.data || []}
        onChange={handleSetAddress}
      />
    </div>
  )
}
