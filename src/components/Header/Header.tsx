import { Link, useMatch } from 'react-router-dom'
import PATH from '~/constants/path'
import Popover from '../Popover'
import PopoverNotArrow from '../PopoverNotArrow'
import { useContext, useState } from 'react'
import Menu from '../Menu'
import classNames from 'classnames'
import { AppContext } from '~/contexts/app.context'
import { useMutation } from '@tanstack/react-query'
import authApi from '~/apis/auth.api'
import PopoverUser from '../PopoverUser'

export default function Header() {
  const { isAuthenticated, setIsAuthenticated, profile, setProfile } = useContext(AppContext)
  const [openClub, setOpenClub] = useState<boolean>(false)
  const [openNation, setOpenNation] = useState<boolean>(false)
  const [openUser, setOpenUser] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const cartMatch = useMatch('/cart')
  const isCart = Boolean(cartMatch)

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    // it will auto navigate
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
    setOpenUser(false)
  }

  const showModal = () => {
    setIsVisible(true)
  }

  const hideModal = () => {
    // console.log('into')
    setIsVisible(false)
  }

  const onClickMC = () => {
    console.log('clicked')
  }

  return (
    <div className='flex w-full justify-center bg-gradient-to-b from-football-primary/20 to-white pb-[11px]'>
      <div className='asir-container'>
        <div className='lg:gap-15 mt-5 flex items-center justify-between gap-10 md:justify-start xl:gap-20'>
          <Link to='/' className='text-[28px] font-bold text-football-primary md:text-[30px] xl:text-[34px]'>
            <span className='text-football-blue11'>HVPP </span>
            <span>Sports</span>
          </Link>

          <div className='hidden h-[38px] grow rounded-md bg-white md:flex xl:h-[44px]'>
            <input
              type='text'
              className='flex w-[100%] items-center rounded rounded-bl-md rounded-tl-md border-none pl-6 pr-3 text-base font-normal outline-none lg:text-lg'
              placeholder='Tìm kiếm'
            />
            <button className='rounded-br-md rounded-tr-md border-none bg-football-primary px-7'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5'>
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>

          <Popover
            placement='bottom-end'
            renderPopover={
              <div className='relative w-[210px] rounded-sm border border-gray-200 bg-white shadow-md'>
                <div className='flex flex-col items-start p-2'>
                  <button className='flex w-full items-start px-3 py-2 hover:text-football-primary'>Tiếng Việt</button>
                  <button className='mt-2 flex w-full items-start px-3 py-2 hover:text-football-primary'>
                    English
                  </button>
                </div>
              </div>
            }
          >
            <div className='flex cursor-pointer items-center justify-end text-football-blue11'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-[6px] h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>

              <span className='hidden font-semibold capitalize lg:inline-block'>Tiếng Việt</span>
              <span className='inline-block font-semibold capitalize lg:hidden'>VI</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='ml-2 h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
              </svg>
            </div>
          </Popover>
        </div>

        <div className='navbar-container mt-5 flex items-center justify-between font-semibold capitalize text-football-blue11'>
          <div className='left-container flex  items-center gap-4 lg:gap-6 xl:gap-10'>
            <button className='inline-block text-football-blue11 lg:hidden' onClick={showModal}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>
            <Link to={PATH.products} className='asir-item-new-arrival hidden text-[#cd151c] lg:inline-block'>
              Hàng mới về
            </Link>

            {/* Club team */}
            <PopoverNotArrow
              className=''
              placement='bottom'
              open={openClub}
              setOpen={setOpenClub}
              renderPopover={
                <div className='grid grid-cols-12 gap-x-6 border border-gray-200 bg-white px-8 py-6 shadow-md lg:px-6 laptopXS:px-10'>
                  <div className='col-span-9 grid grid-cols-12 gap-x-10 gap-y-8 xl:col-span-9 xl:gap-y-8 2xl:col-span-9 2xl:gap-x-10 2xl:gap-y-12'>
                    {Array(6)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          className='col-span-4 flex flex-col gap-y-2 text-base font-normal capitalize xl:col-span-4 laptopXS:col-span-3 2xl:col-span-3'
                          key={index}
                        >
                          <div className='mb-[6px] font-semibold uppercase'>Premier League</div>
                          <div className='truncate'>Manchester City Citi</div>
                          <div className='truncate'>Manchester City</div>
                          <div className='truncate'>Manchester City</div>
                          <Link to={PATH.home} className='truncate hover:text-football-primary' onClick={onClickMC}>
                            Manchester City
                          </Link>
                        </div>
                      ))}
                  </div>
                  <div className='col-span-3 xl:col-span-3 2xl:col-span-3'>
                    <div className='relative h-full w-full flex-shrink-0 overflow-hidden rounded-md shadow-md'>
                      <img
                        src='https://plus.unsplash.com/premium_photo-1701713781709-966e8f4c5920?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt=''
                        className='absolute left-0 top-0 h-full w-full object-cover'
                      />
                    </div>
                  </div>
                </div>
              }
            >
              <Link
                to={PATH.products}
                className={classNames('asir-top-menu-item hidden lg:inline-block', {
                  'text-football-primary after:w-full': openClub,
                  '': !openClub
                })}
              >
                Câu lạc bộ
              </Link>
            </PopoverNotArrow>

            {/* Nation Team */}
            <PopoverNotArrow
              className=''
              open={openNation}
              setOpen={setOpenNation}
              placement='bottom'
              renderPopover={
                <div className='grid grid-cols-12 gap-x-6 border border-gray-200 bg-white px-8 py-6 shadow-md lg:px-6 laptopXS:px-10'>
                  <div className='col-span-9 grid grid-cols-12 gap-x-10 gap-y-8 xl:col-span-9 xl:gap-y-8 2xl:col-span-9 2xl:gap-x-10 2xl:gap-y-12'>
                    {Array(6)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          className='col-span-4 flex flex-col gap-y-2 text-base font-normal capitalize xl:col-span-4 laptopXS:col-span-3 2xl:col-span-3'
                          key={index}
                        >
                          <div className='mb-[6px] font-semibold uppercase'>Premier League</div>
                          <div className='truncate'>Manchester City Citi</div>
                          <div className='truncate'>Manchester City</div>
                          <div className='truncate'>Manchester City</div>
                          <div className='truncate'>Manchester City</div>
                        </div>
                      ))}
                  </div>
                  <div className='col-span-3 xl:col-span-3 2xl:col-span-3'>
                    <div className='relative h-full w-full flex-shrink-0 overflow-hidden rounded-md shadow-md'>
                      <img
                        src='https://plus.unsplash.com/premium_photo-1701713781709-966e8f4c5920?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt=''
                        className='absolute left-0 top-0 h-full w-full object-cover'
                      />
                    </div>
                  </div>
                </div>
              }
            >
              <Link
                to={PATH.products}
                className={classNames('asir-top-menu-item hidden lg:inline-block', {
                  'text-football-primary after:w-full': openNation,
                  '': !openNation
                })}
              >
                Đội tuyển quốc gia
              </Link>
            </PopoverNotArrow>
          </div>
          <div className='right-container x flex items-center justify-end gap-8 lg:gap-6 xl:gap-10'>
            {!isCart && (
              <Popover
                placement='bottom'
                renderPopover={
                  <div className='relative w-[400px] rounded-sm border border-gray-200 bg-white shadow-md'>
                    <div className='p-3'>
                      <div className='font-normal capitalize text-football-gray7A/80'>Sản phẩm mới thêm</div>
                      <div className='mt-3'>
                        {/* List products */}
                        <div className='mt-2 flex items-start py-2 hover:bg-gray-100'>
                          <div className='w-13 h-16 flex-shrink-0'>
                            <img
                              src='https://img.ws.mms.shopee.com.my/247e19d54d939e36a748946c6ebeacd4'
                              alt='shirt'
                              className='h-full w-full object-cover'
                            />
                          </div>
                          <div className='ml-2 flex h-16 flex-grow flex-col items-start justify-between'>
                            {/* first row */}
                            <div className='flex w-full flex-row items-center justify-between'>
                              <div className='line-clamp-1 grow'>
                                Manchester City 22/23 Manchester Manchester City 22/23 Manchester Manchester City 22/23
                                Manchester
                              </div>
                              <button className='ml-8 flex items-center bg-transparent'>
                                <svg
                                  width={20}
                                  height={21}
                                  className='fill-football-gray7A'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M8 4h4a2 2 0 10-4 0zM6.5 4a3.5 3.5 0 117 0h5.75a.75.75 0 110 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0113.026 21H6.974a3.75 3.75 0 01-3.733-3.389L2.07 5.5H.75a.75.75 0 010-1.5H6.5zm2 4.75a.75.75 0 00-1.5 0v7.5a.75.75 0 101.5 0v-7.5zM12.25 8a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0v-7.5a.75.75 0 01.75-.75zm-7.516 9.467a2.25 2.25 0 002.24 2.033h6.052a2.25 2.25 0 002.24-2.033L16.424 5.5H3.576l1.158 11.967z'
                                    className='fill-inherit'
                                  />
                                </svg>
                              </button>
                            </div>

                            {/* second row */}
                            <div className='flex w-full items-center justify-between'>
                              <span className='text-base'>Số lượng: 1</span>
                              <span className='text-lg text-football-primary'>đ200.000</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* cart */}
                      <div className='mt-5 flex items-center justify-between'>
                        <div className='text-sm capitalize text-football-gray7A/80'>
                          <span>14 Thêm vào giỏ hàng</span>
                        </div>
                        <Link
                          to={PATH.cart}
                          className='rounded-sm bg-football-primary px-4 py-1 capitalize text-white hover:bg-football-primary/90'
                        >
                          Xem giỏ hàng
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              >
                <Link to={PATH.cart} className='flex items-center'>
                  <div className='relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='relative h-6 w-6 stroke-football-blue11'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                      />
                    </svg>
                    <div className='absolute left-[11px] top-[-5px] rounded-full bg-football-primary px-[8px] py-[1px] text-xs'>
                      1
                    </div>
                  </div>
                  <span className='ml-[14px] hidden lg:inline-block'>Giỏ hàng</span>
                </Link>
              </Popover>
            )}
            {!isAuthenticated && (
              <Link to={PATH.login} className='flex items-center'>
                <div className='flex h-[24px] w-[24px] items-center justify-center'>
                  <img
                    src='https://bizweb.dktcdn.net/100/438/408/themes/919724/assets/icon-user.svg?1699408922234'
                    alt=''
                    className='h-full w-full object-cover'
                  />
                </div>
                <span className='ml-2 hidden xl:inline-block'>Đăng ký / Đăng nhập</span>
              </Link>
            )}

            {isAuthenticated && (
              <PopoverUser
                open={openUser}
                setOpen={setOpenUser}
                placement='bottom'
                renderPopover={
                  <div className='flex flex-col rounded-sm border border-gray-200 bg-white shadow-md'>
                    <Link
                      to={PATH.profile}
                      className='bg-white px-6 py-3 hover:bg-white hover:text-football-primary'
                      onClick={() => setOpenUser(false)}
                    >
                      Tài khoản của tôi
                    </Link>
                    <Link
                      to={PATH.historyPurchase}
                      className='bg-white px-6 py-3 hover:bg-white hover:text-football-primary'
                      onClick={() => setOpenUser(false)}
                    >
                      Đơn mua
                    </Link>
                    <button
                      onClick={handleLogout}
                      className='bg-white px-6 py-3 text-left hover:bg-white hover:text-football-primary'
                    >
                      Đăng xuất
                    </button>
                  </div>
                }
              >
                <Link to={PATH.profile} className='flex items-center'>
                  <div className='h-[24px] w-[24px] overflow-hidden rounded-full'>
                    <img src={profile?.avatar} alt={profile?.name} className='h-full w-full object-cover' />
                  </div>
                  <span className='ml-2 hidden normal-case lg:inline-block'>{profile?.name}</span>
                </Link>
              </PopoverUser>
            )}
          </div>
        </div>
      </div>
      <Menu isVisible={isVisible} handleSubmit={hideModal} />
    </div>
  )
}
