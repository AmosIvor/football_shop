import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Controller, useForm } from 'react-hook-form'
import addressApi from '~/apis/address.api'
import deliveryApi from '~/apis/delivery.api'
import DropdownAddress from '~/components/DropdownAddress'
import Input from '~/components/Input'
import InputNumber from '~/components/InputNumber'
import { MODAL } from '~/constants/modal'
import VARIANT from '~/constants/variant'
import { AppContext } from '~/contexts/app.context'
import { AddressType } from '~/types/address.type'
import { Customer } from '~/types/customer.type'
import { DeliveryRequest, DeliveryResponse } from '~/types/delivery.type'
import { AddressSchema, addressSchema } from '~/utils/rules'

interface Props {
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  typeModal?: string
  dataAddress?: DeliveryResponse
  setDataAddress?: React.Dispatch<React.SetStateAction<DeliveryResponse | undefined>>
  refetch: any
}

const initialAddress: AddressType = {
  province: 'Tỉnh/Thành phố',
  district: 'Quận/Huyện',
  ward: 'Phường/Xã'
}

type FormData = AddressSchema

const root = document.getElementById('root') as HTMLElement

export default function ModalAddress({
  isVisible,
  setIsVisible,
  typeModal = MODAL.new,
  dataAddress,
  setDataAddress,
  refetch
}: Props) {
  const { profile } = useContext(AppContext)
  const [address, setAddress] = useState<AddressType>({
    province: dataAddress?.address.split(', ')[3] || initialAddress.province,
    district: dataAddress?.address.split(', ')[2] || initialAddress.district,
    ward: dataAddress?.address.split(', ')[1] || initialAddress.ward
  })
  const [provinceCode, setProvinceCode] = useState<string>('')
  const [districtCode, setDistrictCode] = useState<string>('')
  const [defaultAddress, setDefaultAddress] = useState<boolean>(false)

  const titleModal = typeModal === MODAL.new ? 'Địa chỉ mới' : 'Cập nhật địa chỉ'

  const {
    register,
    control,
    formState: { isSubmitSuccessful },
    formState: { errors },
    handleSubmit,
    setValue,
    reset
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      default_address: false
    },
    resolver: yupResolver(addressSchema)
  })
  // provinces
  const { data: provincesData } = useQuery({
    queryKey: ['provinces'],
    queryFn: addressApi.getProvinces
  })

  // districts
  const { data: districtsData } = useQuery({
    queryKey: ['districts', provinceCode],
    queryFn: () => addressApi.getDistricts(provinceCode)
  })

  // wards
  const { data: wardsData } = useQuery({
    queryKey: ['wards', districtCode],
    queryFn: () => addressApi.getWards(districtCode)
  })

  useEffect(() => {
    if (dataAddress) {
      const addressArray = dataAddress.address.split(', ')

      const provinceRes = provincesData?.data.find((item) => item.name === addressArray[3])
      setProvinceCode(provinceRes?.code.toString() || '')

      // const districtRes = districtsData?.data.districts.find((item) => item.name === addressArray[2])
      // setDistrictCode(districtRes?.code.toString() || '')
      setAddress({
        province: addressArray[3],
        district: addressArray[2],
        ward: addressArray[1]
      })
      setValue('name', dataAddress.name)
      setValue('phone', dataAddress.phone)
      setValue('address', addressArray[0])
    }
  }, [dataAddress, setValue, provincesData])

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        phone: '',
        address: '',
        default_address: false
      })
      setAddress(initialAddress)
      setDefaultAddress(false)
      setDataAddress && setDataAddress(undefined)
      setIsVisible(false)
    }
  }, [isSubmitSuccessful, reset, setIsVisible, setDataAddress])

  // create delivery
  const createDeliveryMutation = useMutation({
    mutationFn: deliveryApi.createAddress
  })

  // update delivery
  const updateDeliveryMutation = useMutation({
    mutationFn: ({ priority, body }: { priority: number; body: DeliveryRequest }) =>
      deliveryApi.updateAddress(priority, body)
  })

  const handleChangeProvinces = (value: number) => {
    const nameAddress = provincesData?.data[value].name
    const codeAddress = provincesData?.data[value].code
    setAddress({
      province: nameAddress || initialAddress.province,
      district: initialAddress.district,
      ward: initialAddress.ward
    })
    setProvinceCode(codeAddress?.toString() || '')
  }

  const handleChangeDistrict = (value: number) => {
    const nameAddress = districtsData?.data.districts[value].name
    const codeAddress = districtsData?.data.districts[value].code
    setAddress((prev) => ({
      ...prev,
      district: nameAddress || initialAddress.district,
      ward: initialAddress.ward
    }))
    setDistrictCode(codeAddress?.toString() || '')
  }

  const handleChangeWard = (value: number) => {
    const nameAddress = wardsData?.data.wards[value].name
    setAddress((prev) => ({
      ...prev,
      ward: nameAddress || initialAddress.ward
    }))
  }

  const handleSubmitForm = handleSubmit((data) => {
    const addressRes = `${data.address}, ${address.ward}, ${address.district}, ${address.province}`
    setValue('address', addressRes)
    setValue('default_address', defaultAddress)
    // console.log(data)
    if (typeModal === MODAL.new) {
      createDeliveryMutation.mutate(
        {
          ...data,
          customerID: (profile as Customer).id
        },
        {
          onSuccess: () => {
            refetch()
          },
          onError: (error) => {
            console.log(error)
          }
        }
      )
    } else {
      updateDeliveryMutation.mutate(
        {
          priority: (dataAddress as DeliveryResponse).priority,
          body: {
            address: data.address,
            customerID: (profile as Customer).id,
            name: data.name,
            phone: data.phone
          }
        },
        {
          onSuccess: () => {
            refetch()
          }
        }
      )
    }
  })

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultAddress(event.target.checked)
  }

  const handleCancel = () => {
    reset({
      name: '',
      phone: '',
      address: '',
      default_address: false
    })
    setAddress(initialAddress)
    setDefaultAddress(false)
    setDataAddress && setDataAddress(undefined)
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
                  className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'
                  onSubmit={handleSubmitForm}
                >
                  <div className='px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:flex-col sm:items-center'>
                      <div className='mb-3 text-2xl font-semibold uppercase text-football-primary'>{titleModal}</div>
                      <div className='mb-4 mt-4 w-full text-lg'>
                        <div className='flex items-center gap-x-5'>
                          <div>
                            <div className='mb-2'>Họ và tên</div>
                            <Input
                              nameInput='name'
                              placeholder='Họ và tên'
                              register={register}
                              errorMessage={errors.name?.message}
                            />
                          </div>

                          <div>
                            <div className='mb-2'>Số điện thoại</div>
                            <Controller
                              control={control}
                              name='phone'
                              render={({ field }) => (
                                <InputNumber
                                  type='text'
                                  placeholder='Số điện thoại'
                                  errorMessage={errors.phone?.message}
                                  value={field.value}
                                  ref={field.ref}
                                  onChange={field.onChange}
                                />
                              )}
                            />
                          </div>
                        </div>

                        <div className='flex items-center gap-x-5'>
                          <DropdownAddress
                            addressData={provincesData?.data}
                            onChange={handleChangeProvinces}
                            value={address.province}
                          />
                          <DropdownAddress
                            title='Quận/Huyện'
                            addressData={districtsData?.data.districts}
                            onChange={handleChangeDistrict}
                            value={address.district}
                          />
                        </div>

                        <div className=' flex items-center gap-x-5'>
                          <DropdownAddress
                            maxHeight='max-h-36'
                            title='Phường/Xã'
                            addressData={wardsData?.data.wards}
                            onChange={handleChangeWard}
                            value={address.ward}
                          />
                          <div className='mt-2 w-full'>
                            <div className='mb-2'>Địa chỉ cụ thể</div>
                            <Input
                              nameInput='address'
                              placeholder='Địa chỉ'
                              register={register}
                              errorMessage={errors.address?.message}
                            />
                          </div>
                        </div>
                        <div className='mt-[6px] flex items-center'>
                          <input
                            id='checkbox-default'
                            type='checkbox'
                            className='-mt-[2px] h-5 w-5 cursor-pointer bg-white text-football-primary'
                            checked={defaultAddress}
                            onChange={handleCheck}
                          />
                          <label htmlFor='checkbox-default' className='ml-4'>
                            Đặt làm địa chỉ mặc định
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-7 px-4 font-Nunito text-lg font-normal text-white sm:flex sm:gap-x-10 sm:px-6'>
                    <button
                      className='w-full rounded-sm border border-football-gray7A/80 bg-white py-2 text-black hover:bg-football-gray7A/5'
                      onClick={handleCancel}
                      type='button'
                    >
                      Huỷ
                    </button>
                    <button
                      className='w-full rounded-sm border border-transparent bg-football-primary py-2 hover:bg-football-primary/90'
                      type='submit'
                    >
                      {typeModal === MODAL.new ? 'Thêm' : 'Cập nhật'} địa chỉ
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
