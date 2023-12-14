import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import VARIANT from '~/constants/variant'
import ProductRatingMedium from './components/ProductRatingMedium'

interface Props {
  isVisible: boolean
  handleSubmit: () => void
  handleCancel: () => void
}

const root = document.getElementById('root') as HTMLElement

export default function ModalRating({ isVisible, handleSubmit }: Props) {
  return createPortal(
    <div className={`relative z-10 font-Nunito ${isVisible ? 'visible' : 'invisible'}`}>
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
                <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className='px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:flex-col sm:items-center'>
                      <div className='mb-3 text-2xl font-semibold uppercase text-football-primary'>
                        Đánh giá sản phẩm
                      </div>
                      <ProductRatingMedium />
                      <div className='mb-7 mt-6 flex w-full flex-row gap-x-6 rounded-[4px] border border-football-gray7A p-3 text-lg font-semibold text-black'>
                        <div className='w-[24%] bg-gray-200'>
                          <div className='relative pt-[100%]'>
                            <img
                              src='https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                              alt=''
                              className='absolute left-0 top-0 h-full w-full object-cover'
                            />
                          </div>
                        </div>
                        <div className='flex w-[66%] flex-col justify-between font-normal'>
                          <span className='truncate'>
                            Manchester City Manchester City Manchester City Manchester City{' '}
                          </span>
                          <span className=''>Size: M</span>
                          <span>Số lượng: 1</span>
                        </div>
                      </div>
                      <textarea
                        id='message'
                        rows={5}
                        className='mb-2 block w-full rounded-[4px] border border-football-gray7A bg-white p-3 text-lg font-normal text-black focus:border-football-primary'
                        placeholder='Hãy nêu cảm nghĩ của bạn về sản phẩm ...'
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='mb-4 px-4 font-Nunito text-lg font-normal text-white sm:flex sm:gap-x-10 sm:px-6'>
                    <button
                      className='w-full rounded-sm border border-football-gray7A/80 bg-white py-2 text-black hover:bg-football-gray7A/5'
                      onClick={handleSubmit}
                    >
                      Huỷ
                    </button>
                    <button
                      className='w-full rounded-sm border border-transparent bg-football-primary py-2 hover:bg-football-primary/90'
                      onClick={handleSubmit}
                    >
                      Đánh giá
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    root
  )
}
