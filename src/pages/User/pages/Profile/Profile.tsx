import Input from '~/components/Input'
import DateSelect from '../../components/DateSelect'
import { useContext } from 'react'
import { AppContext } from '~/contexts/app.context'
import { ProfileSchema, profileSchema } from '~/utils/rules'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputNumber from '~/components/InputNumber'

type FormData = ProfileSchema

export default function Profile() {
  const { setProfile } = useContext(AppContext)
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      avatar: '',
      date_of_birth: new Date(1990, 0, 1)
    },
    resolver: yupResolver(profileSchema)
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='rounded-sm bg-white px-7 py-5 text-lg font-normal text-black shadow xs:px-8'>
      {/* Header */}
      <div className='border-b border-b-gray-200 pb-3'>
        <h1 className='capitalized text-2xl font-semibold text-black'>Tài khoản của tôi</h1>
        <div className='pb-2 pt-1 text-base text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>

      {/* Form */}
      <form className='mt-6 flex flex-col-reverse xl:flex-row xl:items-start' onSubmit={onSubmit}>
        {/* Information */}
        <div className='mt-8 flex-grow sm:pr-6 md:pr-8 lg:pr-6 xl:mt-0 laptop:pr-12'>
          {/* Email */}
          <div className='flex flex-row flex-wrap items-center'>
            <div className='captialized w-auto truncate text-left sm:w-[24%] sm:text-right md:w-[22%] md:text-right lg:w-[23%] lg:text-right xl:text-left laptopXS:w-[22%] laptopXS:text-right 2xl:text-left laptop:w-[22%] laptop:text-right'>
              Email
            </div>
            <div className='2xl:pl-15 xl:pl-15 w-auto pl-10 sm:w-[76%] sm:pl-7 md:w-[78%] md:pl-8 lg:w-[77%] lg:pl-7 laptopXS:w-[78%] laptopXS:pl-7 laptop:w-[78%] laptop:pl-8'>
              <div className='font-semibold text-football-gray7A'>amosivor@gmail.com</div>
            </div>
          </div>

          {/* Name */}
          <div className='mt-6 flex flex-col flex-wrap xs:flex-col sm:mt-7 sm:flex-row md:flex-row lg:mt-7 lg:flex-row xl:mt-6 xl:flex-col laptopXS:mt-7 laptopXS:flex-row 2xl:mt-6 2xl:flex-col laptop:mt-7 laptop:flex-row'>
            <div className='truncate capitalize xs:mt-0 xs:w-auto xs:text-left sm:mt-[9px] sm:w-[24%] sm:text-right md:mt-[9px] md:w-[22%] md:text-right lg:mt-[9px] lg:w-[23%] lg:text-right xl:mt-0 xl:w-auto xl:text-left laptopXS:mt-[9px] laptopXS:w-[22%] laptopXS:text-right 2xl:mt-0 2xl:w-auto 2xl:text-left laptop:mt-[9px] laptop:w-[22%] laptop:text-right'>
              Họ tên
            </div>
            <div className='mt-[6px] w-auto pl-0 text-black xs:w-auto xs:pl-0 sm:mt-0 sm:w-[76%] sm:pl-7 md:mt-0 md:w-[78%] md:pl-8 lg:mt-0 lg:w-[77%] lg:pl-7 xl:mt-[6px] xl:w-auto xl:pl-0 laptopXS:mt-0 laptopXS:w-[78%] laptopXS:pl-7 2xl:mt-2 2xl:w-auto 2xl:pl-0 laptop:mt-0 laptop:w-[78%] laptop:pl-8'>
              <Input nameInput='name' placeholder='Họ và tên' register={register} errorMessage={errors.name?.message} />
            </div>
          </div>

          {/* Phone */}
          <div className='mt-[10px] flex flex-col flex-wrap xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:mt-[10px] xl:flex-col laptopXS:mt-3 laptopXS:flex-row 2xl:mt-3 2xl:flex-col laptop:mt-3 laptop:flex-row'>
            <div className='truncate capitalize xs:mt-0 xs:w-auto xs:text-left sm:mt-[9px] sm:w-[24%] sm:text-right md:mt-[9px] md:w-[22%] md:text-right lg:mt-[9px] lg:w-[23%] lg:text-right xl:mt-0 xl:w-auto xl:text-left laptopXS:mt-[9px] laptopXS:w-[22%] laptopXS:text-right 2xl:mt-0 2xl:w-auto 2xl:text-left laptop:mt-[9px] laptop:w-[22%] laptop:text-right'>
              Số điện thoại
            </div>
            <div className='mt-[6px] w-auto pl-0 text-black xs:w-auto xs:pl-0 sm:mt-0 sm:w-[76%] sm:pl-7 md:mt-0 md:w-[78%] md:pl-8 lg:mt-0 lg:w-[77%] lg:pl-7 xl:mt-[6px] xl:w-auto xl:pl-0 laptopXS:mt-0 laptopXS:w-[78%] laptopXS:pl-7 2xl:mt-2 2xl:w-auto 2xl:pl-0 laptop:mt-0 laptop:w-[78%] laptop:pl-8'>
              {/* <Input type='text' placeholder='Số điện thoại' errorMessage='Hello' /> */}
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

          {/* Address */}
          <div className='mt-[10px] flex flex-col flex-wrap xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:mt-[10px] xl:flex-col laptopXS:mt-3 laptopXS:flex-row 2xl:mt-3 2xl:flex-col laptop:mt-3 laptop:flex-row'>
            <div className='truncate capitalize xs:mt-0 xs:w-auto xs:text-left sm:mt-[9px] sm:w-[24%] sm:text-right md:mt-[9px] md:w-[22%] md:text-right lg:mt-[9px] lg:w-[23%] lg:text-right xl:mt-0 xl:w-auto xl:text-left laptopXS:mt-[9px] laptopXS:w-[22%] laptopXS:text-right 2xl:mt-0 2xl:w-auto 2xl:text-left laptop:mt-[9px] laptop:w-[22%] laptop:text-right'>
              Địa chỉ
            </div>
            <div className='mt-[6px] w-auto pl-0 text-black xs:w-auto xs:pl-0 sm:mt-0 sm:w-[76%] sm:pl-7 md:mt-0 md:w-[78%] md:pl-8 lg:mt-0 lg:w-[77%] lg:pl-7 xl:mt-[6px] xl:w-auto xl:pl-0 laptopXS:mt-0 laptopXS:w-[78%] laptopXS:pl-7 2xl:mt-2 2xl:w-auto 2xl:pl-0 laptop:mt-0 laptop:w-[78%] laptop:pl-8'>
              <Input
                nameInput='address'
                placeholder='Địa chỉ'
                register={register}
                errorMessage={errors.address?.message}
              />
            </div>
          </div>

          {/* Date Select */}
          <Controller
            control={control}
            name='date_of_birth'
            render={({ field }) => (
              <DateSelect onChange={field.onChange} value={field.value} errorMessage={errors.date_of_birth?.message} />
            )}
          />

          {/* Button Save */}
          <div className='mt-3 flex sm:flex-wrap sm:justify-start xl:justify-center laptopXS:justify-start 2xl:justify-center laptop:justify-start'>
            <div className='mt-[9px] hidden truncate capitalize sm:inline-block sm:w-[24%] md:w-[22%] lg:w-[23%] xl:w-auto laptopXS:w-[22%] 2xl:w-auto laptop:w-[22%]'></div>
            <div className='flex w-full pl-0 text-black sm:w-[76%] sm:flex-none sm:pl-7 md:w-[78%] md:pl-8 lg:w-[77%] lg:pl-7 xl:w-auto xl:pl-0 laptopXS:w-[78%] laptopXS:pl-7 2xl:w-auto 2xl:pl-0 laptop:w-[78%] laptop:pl-8'>
              <button
                className='flex h-[46px] grow items-center justify-center rounded-sm bg-football-primary px-6 text-lg text-white hover:bg-football-primary/90 sm:grow-0 sm:justify-start'
                type='submit'
              >
                Lưu
              </button>
            </div>
          </div>
        </div>

        {/* Upload Image */}
        <div className='flex justify-center xl:w-72 xl:border-l xl:border-l-gray-200'>
          <div className='flex flex-col items-center'>
            <div className='my-2 h-24 w-24 xl:my-5'>
              <img
                src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='imageupload'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <input type='file' accept='.jpg,.jpeg,.png' className='hidden' />
            <button className='flex h-[46px] w-auto items-center justify-center rounded-sm border bg-white px-6 text-lg text-football-gray7A shadow-sm'>
              Chọn ảnh
            </button>
            <div className='mt-3 text-base text-football-gray7A/80'>
              <div>Dung lượng file tối đa 1MB</div>
              <div>Định dạng: .JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
