import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'

import VARIANT from '~/constants/variant'
import { AppContext } from '~/contexts/app.context'
import { DeliveryResponse } from '~/types/delivery.type'

interface Props {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  addresses: DeliveryResponse[]
  onChange: (value: number) => void
}

const root = document.getElementById('root') as HTMLElement

export default function ModalPaymentAddress({ isVisible, setIsVisible, addresses, onChange }: Props) {
  const [checkedIndex, setCheckedIndex] = useState<number>(0)
  const { profile } = useContext(AppContext)

  const handleChooseAddress = (addressIndex: number) => () => {
    setCheckedIndex(addressIndex)
  }

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onChange(checkedIndex)
    setIsVisible(false)
  }

  return createPortal(
    <div className={`relative z-30 font-Nunito ${isVisible ? 'visible' : 'invisible'}`}>
      <AnimatePresence>
        {/* bg */}
        {isVisible && (
          <motion.div initial='initial' animate='visible' exit='exit' variants={VARIANT.backdrop}>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </motion.div>
        )}
        {/* content */}
        {isVisible && (
          <motion.div initial='initial' animate='visible' exit='exit' variants={VARIANT.modal}>
            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
              <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                <form
                  className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl'
                  onSubmit={handleSubmitForm}
                >
                  <div className='px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className='min-h-[500px] sm:flex sm:flex-col  sm:items-center'>
                      <div className='mb-2 text-2xl font-semibold uppercase text-football-primary'>Địa chỉ của tôi</div>
                      <div className='mb-2 mt-4 max-h-[500px] w-full overflow-y-auto text-lg'>
                        {/* address */}
                        {addresses.length !== 0 &&
                          addresses.map((item, index) => (
                            <div
                              className='flex items-start border-t border-football-gray7A/30 p-2 first:border-t first:border-t-football-gray7A/30 last:border-b last:border-b-football-gray7A/30 xs:items-center'
                              key={index}
                            >
                              <input
                                id='default-radio-3'
                                type='radio'
                                name='default-radio'
                                className='mt-[6px] h-4 w-4 cursor-pointer border-gray-300 bg-white text-football-primary checked:bg-football-primary checked:transition-all checked:duration-200 checked:ease-in-out focus:ring-transparent xs:mt-0'
                                checked={checkedIndex === index}
                                onChange={handleChooseAddress(index)}
                              />
                              <label htmlFor='default-radio-3' className='ml-5 text-lg'>
                                <div className='flex items-center justify-between'>
                                  <div className='flex items-center'>
                                    <span className='font-semibold'>{item.name}</span>
                                    <div className='mx-4 h-[12px] w-[1px] bg-gray-300'></div>
                                    <span className='font-semibold'>{item.phone}</span>
                                  </div>
                                  <button className='text-football-primary hover:text-football-primary/90'>
                                    Cập nhật
                                  </button>
                                </div>
                                <div className='w-[70%] text-football-gray7A'>{item.address}</div>
                                {item.priority === 1 && (
                                  <div className='mt-0 flex items-center text-[#27ae60]'>
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
                              </label>
                            </div>
                          ))}
                      </div>
                      <button
                        className='mb-4 mr-auto mt-2 flex w-[50%] items-center justify-center border border-football-primary bg-white py-3 text-lg text-football-primary hover:bg-white/90 hover:text-football-primary/80'
                        onClick={() => {}}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='-mt-[1px] mr-2 h-5 w-5'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                        </svg>
                        <span className=''>Thêm mới địa chỉ</span>
                      </button>
                    </div>
                  </div>
                  <div className='mb-7 px-4 font-Nunito text-lg font-normal text-white sm:flex sm:gap-x-10 sm:px-6'>
                    <button
                      className='w-full rounded-sm border border-football-gray7A/80 bg-white py-2 text-black hover:bg-football-gray7A/5'
                      onClick={() => setIsVisible(false)}
                      type='button'
                    >
                      Huỷ
                    </button>
                    <button
                      className='w-full rounded-sm border border-transparent bg-football-primary py-2 hover:bg-football-primary/90'
                      type='submit'
                    >
                      Xác nhận
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    root
  )
}
