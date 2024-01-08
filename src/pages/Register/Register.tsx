import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import authApi, { RegisterRequest } from '~/apis/auth.api'
import Button from '~/components/Button'
import Input from '~/components/Input'
import PATH from '~/constants/path'
import { RegisterSchema, registerSchema } from '~/utils/rules'

type FormData = RegisterSchema

export default function Register() {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  // register mutation
  const registerAccountMutation = useMutation({
    mutationFn: (body: RegisterRequest) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log('data_register', data)
        navigate(PATH.login)
      },
      onError: () => {
        // console.log('error_register', error)~~~~
      }
    })
  })

  return (
    <div className='asir-background'>
      <div className='asir-container'>
        <div className='grid grid-cols-1 py-8 lg:grid-cols-5 lg:pb-32 lg:pr-10 lg:pt-8'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' noValidate onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                className='mt-8'
                type='text'
                nameInput='username'
                placeholder='Username'
                register={register}
                errorMessage={errors.username?.message}
              />
              <Input
                className='mt-2'
                type='email'
                nameInput='email'
                placeholder='Email'
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='text'
                nameInput='phone'
                placeholder='Phone'
                register={register}
                errorMessage={errors.phone?.message}
              />
              <Input
                className='mt-2'
                type='password'
                nameInput='password'
                placeholder='Password'
                register={register}
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                type='password'
                nameInput='confirm_password'
                placeholder='Confirm Password'
                register={register}
                errorMessage={errors.confirm_password?.message}
              />

              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex w-full items-center justify-center bg-football-primary px-2 py-4 text-center text-lg uppercase text-white hover:bg-football-primary/80'
                  isLoading={registerAccountMutation.isPending}
                  disabled={registerAccountMutation.isPending}
                >
                  Đăng ký
                </Button>
              </div>

              <div className='mt-6 flex items-center justify-center'>
                <span className='text-lg font-normal text-football-gray7A/60'>Bạn đã có tài khoản?</span>
                <Link to={PATH.login} className='ml-2 text-football-primary'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
