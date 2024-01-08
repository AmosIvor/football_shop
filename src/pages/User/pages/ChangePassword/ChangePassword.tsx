import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import authApi from '~/apis/auth.api'
import userApi from '~/apis/user.api'
import Input from '~/components/Input'
import { AppContext } from '~/contexts/app.context'
import { UserPassword } from '~/types/user.type'
import { PasswordSchema, passwordSchema } from '~/utils/rules'

type FormData = PasswordSchema

export default function ChangePassword() {
  const { profile } = useContext(AppContext)
  const emailUser = profile?.email as string
  const {
    register,
    formState: { errors },
    formState: { isSubmitSuccessful },
    reset,
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(passwordSchema)
  })

  // change password
  const changePasswordMutation = useMutation({
    mutationFn: (body: UserPassword) => authApi.changePassword(body)
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [reset, isSubmitSuccessful])

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    changePasswordMutation.mutate(
      {
        email: emailUser,
        oldPassword: body.old_password as string,
        newPassword: body.password as string
      },
      {
        onSuccess: (data) => {
          console.log('data change', data)
        },
        onError: (error) => {
          console.log(error)
        }
      }
    )
  })

  return (
    <div className='rounded-sm bg-white px-8 py-5 text-lg font-normal text-black shadow'>
      {/* Header */}
      <div className='border-b border-b-gray-200 pb-3'>
        <h1 className='capitalized text-2xl font-semibold text-black'>Đổi mật khẩu</h1>
        <div className='pb-2 pt-1 text-base text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>

      {/* Old Password */}
      <form className='mt-8 flex flex-row items-start' onSubmit={onSubmit}>
        <div className='flex-grow md:pr-6 lg:pr-0 laptopXS:pr-12'>
          {/* Old Password */}
          <div className='mt-[10px] flex flex-col flex-wrap xs:flex-col sm:flex-col md:flex-row lg:flex-col xl:mt-[10px] xl:flex-row laptop:mt-3 laptop:flex-row'>
            <div className='truncate capitalize xs:mt-0 xs:w-auto xs:text-left sm:mt-0 sm:w-auto sm:text-left md:mt-[9px] md:w-[30%] md:text-right lg:mt-0 lg:w-auto lg:text-left xl:mt-[9px] xl:w-[22%] xl:text-right 2xl:mt-[9px] laptop:mt-[9px] laptop:w-[22%] laptop:text-right'>
              Mật khẩu cũ
            </div>
            <div className='mt-[6px] w-auto pl-0 text-black xs:w-auto xs:pl-0 sm:mt-[6px] sm:w-auto sm:pl-0 md:mt-0 md:w-[70%] md:pl-8 lg:mt-[6px] lg:w-auto lg:pl-0 xl:mt-0 xl:w-[78%] xl:pl-7 2xl:mt-0 laptop:mt-0 laptop:w-[78%] laptop:pl-8'>
              <Input
                nameInput='old_password'
                type='password'
                placeholder='Mật khẩu cũ'
                register={register}
                errorMessage={errors.old_password?.message}
              />
            </div>
          </div>

          {/* New Password */}
          <div className='mt-[10px] flex flex-col flex-wrap xs:flex-col sm:flex-col md:flex-row lg:flex-col xl:mt-[10px] xl:flex-row laptop:mt-3 laptop:flex-row'>
            <div className='truncate capitalize xs:mt-0 xs:w-auto xs:text-left sm:mt-0 sm:w-auto sm:text-left md:mt-[9px] md:w-[30%] md:text-right lg:mt-0 lg:w-auto lg:text-left xl:mt-[9px] xl:w-[22%] xl:text-right 2xl:mt-[9px] laptop:mt-[9px] laptop:w-[22%] laptop:text-right'>
              Mật khẩu mới
            </div>
            <div className='mt-[6px] w-auto pl-0 text-black xs:w-auto xs:pl-0 sm:mt-[6px] sm:w-auto sm:pl-0 md:mt-0 md:w-[70%] md:pl-8 lg:mt-[6px] lg:w-auto lg:pl-0 xl:mt-0 xl:w-[78%] xl:pl-7 2xl:mt-0 laptop:mt-0 laptop:w-[78%] laptop:pl-8'>
              <Input
                nameInput='password'
                type='password'
                placeholder='Mật khẩu mới'
                register={register}
                errorMessage={errors.password?.message}
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className='mt-[10px] flex flex-col flex-wrap xs:flex-col sm:flex-col md:flex-row lg:flex-col xl:mt-[10px] xl:flex-row laptop:mt-3 laptop:flex-row'>
            <div className='truncate capitalize xs:mt-0 xs:w-auto xs:text-left sm:mt-0 sm:w-auto sm:text-left md:mt-[9px] md:w-[30%] md:text-right lg:mt-0 lg:w-auto lg:text-left xl:mt-[9px] xl:w-[22%] xl:text-right 2xl:mt-[9px] laptop:mt-[9px] laptop:w-[22%] laptop:text-right'>
              Xác nhận mật khẩu
            </div>
            <div className='mt-[6px] w-auto pl-0 text-black xs:w-auto xs:pl-0 sm:mt-[6px] sm:w-auto sm:pl-0 md:mt-0 md:w-[70%] md:pl-8 lg:mt-[6px] lg:w-auto lg:pl-0 xl:mt-0 xl:w-[78%] xl:pl-7 2xl:mt-0 laptop:mt-0 laptop:w-[78%] laptop:pl-8'>
              <Input
                nameInput='confirm_password'
                type='password'
                placeholder='Xác nhận mật khẩu'
                register={register}
                errorMessage={errors.confirm_password?.message}
              />
            </div>
          </div>

          {/* Button Save */}
          <div className='mt-3 flex sm:flex-wrap sm:justify-center md:justify-start lg:justify-center xl:justify-start'>
            <div className='mt-[9px] hidden truncate capitalize sm:inline-block sm:w-auto md:w-[30%] lg:w-auto xl:w-[22%]'></div>
            <div className='flex w-full pl-0 text-black sm:w-auto sm:flex-none sm:pl-0 md:w-[70%] md:pl-8 lg:w-auto lg:pl-0 xl:w-[78%] xl:pl-7 laptop:w-[78%] laptop:pl-8'>
              <button
                className='flex h-[46px] grow items-center justify-center rounded-sm bg-football-primary px-6 text-lg text-white hover:bg-football-primary/90 sm:grow-0 sm:justify-start'
                type='submit'
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
