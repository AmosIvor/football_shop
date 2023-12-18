import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import Input from '~/components/Input'
import InputNumber from '~/components/InputNumber'
import VARIANT from '~/constants/variant'

interface Props {
  isVisible: boolean
  handleSubmit: () => void
  handleCancel: () => void
}

const root = document.getElementById('root') as HTMLElement

export default function ModalAddress({ isVisible, handleSubmit }: Props) {
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
                      <div className='mb-3 text-2xl font-semibold uppercase text-football-primary'>Địa chỉ mới</div>
                      <div className='mb-4 mt-4 w-full text-lg'>
                        <div>
                          <div className='mb-2'>Họ và tên</div>
                          <Input placeholder='Họ và tên' />
                        </div>

                        <div className='mt-1'>
                          <div className='mb-2'>Số điện thoại</div>
                          <InputNumber placeholder='Số điện thoại' />
                        </div>

                        <div className='mt-1'>
                          <div className='mb-2'>Địa chỉ</div>
                          <Input placeholder='Địa chỉ' />
                        </div>
                        <div className='mt-[6px] flex items-center'>
                          <input
                            id='checkbox-default'
                            type='checkbox'
                            className='-mt-[2px] h-5 w-5 cursor-pointer bg-white text-football-primary'
                          />
                          <label htmlFor='checkbox-default' className='ml-4'>
                            Đặt làm địa chỉ mặc định
                          </label>
                        </div>
                      </div>
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
                      Thêm địa chỉ
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
