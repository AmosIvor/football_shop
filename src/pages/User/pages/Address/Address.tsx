import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import deliveryApi from '~/apis/delivery.api'
import ModalAddress from '~/components/Modal/ModalAddress'
import { MODAL } from '~/constants/modal'
import { AppContext } from '~/contexts/app.context'
import { Customer } from '~/types/customer.type'
import { DeliveryResponse } from '~/types/delivery.type'

export default function Address() {
  const { profile } = useContext(AppContext)
  const [isVisibile, setIsVisible] = useState<boolean>(false)
  const [typeModal, setTypeModal] = useState<string>(MODAL.new)
  const [dataAddress, setDataAddress] = useState<DeliveryResponse | undefined>(undefined)

  const idCustomer = (profile as Customer).id

  // get addresses
  const { data: addressesData, refetch } = useQuery({
    queryKey: ['addresses'],
    queryFn: () => deliveryApi.getAddresses(idCustomer)
  })

  // set default address
  const setDefaultMutation = useMutation({
    mutationFn: deliveryApi.setDefault
  })

  // delete address
  const deleteAddressMutation = useMutation({
    mutationFn: deliveryApi.deleteAddress
  })

  console.log('list addresses: ', addressesData)

  const handleShowModalNew = () => {
    setIsVisible(true)
    setTypeModal(MODAL.new)
  }

  const handleShowModalUpdate = (address: DeliveryResponse) => {
    setDataAddress(address)
    setIsVisible(true)
    setTypeModal(MODAL.update)
  }

  const handleSetDefaultAddress = (priority: number) => {
    setDefaultMutation.mutate(
      { idCustomer: (profile as Customer).id, priority },
      {
        onSuccess: () => {
          refetch()
        }
      }
    )
  }

  const handleDeleteAddress = (priority: number) => {
    deleteAddressMutation.mutate(
      { idCustomer: (profile as Customer).id, priority },
      {
        onSuccess: () => {
          refetch()
        }
      }
    )
  }

  return (
    <div className='rounded-sm bg-white px-8 py-5 text-lg font-normal text-black shadow'>
      {/* Header */}
      <div className='just flex items-start justify-between border-b border-b-gray-200 pb-3'>
        <div className=''>
          <h1 className='capitalized text-2xl font-semibold text-black'>Địa chỉ của tôi</h1>
          <div className='pb-2 pt-1 text-base text-gray-700'>Cập nhật thông tin địa chỉ để nhận hàng sớm hơn</div>
        </div>
        <button
          className='mt-1 hidden items-center bg-football-primary py-3 text-white hover:bg-football-primary/90 sm:flex sm:px-4 md:pl-3 md:pr-4 lg:px-4 xl:pl-6 xl:pr-8'
          onClick={handleShowModalNew}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5 sm:mr-0 md:mr-2 lg:mr-0 xl:mr-2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
          <span className='sm:hidden md:inline-block lg:hidden xl:inline-block'>Thêm mới địa chỉ</span>
        </button>
      </div>

      {/* Body */}
      <div className='pt-3'>
        {/* address list */}
        {addressesData &&
          addressesData.data.length > 0 &&
          addressesData.data.map((address, index) => (
            <div className='flex flex-col border-b border-b-football-gray7A/40 py-7 sm:flex-row' key={index}>
              <div className='flex flex-col text-base xs:w-auto sm:w-[66%] md:w-[70%] md:text-lg lg:w-[66%] lg:text-base xl:w-[78%] xl:text-lg laptopXS:w-[80%]'>
                <div className='flex items-center'>
                  <span>{address.name}</span>
                  <div className='mx-4 h-4 w-[1px] bg-football-gray7A/40'></div>
                  <span className='text-football-gray7A'>{address.phone}</span>
                </div>

                <div className='mt-[2px] line-clamp-1 text-football-gray7A'>{address.address}</div>
                {address.priority === 1 && (
                  <div className='mt-1 flex items-center text-[#27ae60]'>
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
              </div>
              <div className='mt-2 flex flex-col gap-y-3 text-base xs:mt-2 xs:w-auto xs:flex-row xs:flex-wrap xs:justify-between xs:gap-x-2 xs:gap-y-3 sm:mt-0 sm:w-[34%] sm:flex-col sm:flex-nowrap sm:justify-start sm:gap-0 md:w-[30%] lg:w-[34%] xl:w-[22%] laptopXS:w-[20%]'>
                <div className='mb-0 flex items-center text-football-primary xs:justify-end sm:mb-2 sm:justify-end'>
                  <button
                    className='grow border border-football-gray7A/50 bg-transparent px-2 py-1 text-football-primary hover:text-football-primary/90 xs:w-[84px] xs:grow-0 sm:w-auto sm:border-none'
                    onClick={() => handleShowModalUpdate(address)}
                  >
                    Cập nhật
                  </button>
                  <button
                    className='ml-3 grow border border-football-gray7A/50 bg-transparent px-2 py-1 text-football-primary hover:text-football-primary/90 xs:w-[84px] xs:grow-0 sm:w-auto sm:border-none'
                    onClick={() => handleDeleteAddress(address.priority)}
                  >
                    Xoá
                  </button>
                </div>
                {address.priority !== 1 && (
                  <div className='flex flex-wrap xs:justify-end'>
                    <button
                      className='grow border border-football-gray7A/50 bg-white py-1 hover:text-black/90 xs:grow-0 xs:px-2 sm:px-3 md:px-4 lg:px-2 xl:px-4'
                      onClick={() => handleSetDefaultAddress(address.priority)}
                    >
                      Thiết lập mặc định
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

        <button
          className='mt-5 flex w-full items-center justify-center bg-football-primary py-3 text-white hover:bg-football-primary/90 sm:hidden'
          onClick={handleShowModalNew}
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
      <ModalAddress
        isVisible={isVisibile}
        setIsVisible={setIsVisible}
        dataAddress={dataAddress}
        setDataAddress={setDataAddress}
        typeModal={typeModal}
        refetch={refetch}
      />
    </div>
  )
}
