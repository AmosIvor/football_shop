import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import authApi from '~/apis/auth.api'
import Button from '~/components/Button'
import Input from '~/components/Input'
import PATH from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { User } from '~/types/user.type'
import { ErrorResponse } from '~/types/utils.type'
import { LoginSchema, loginSchema } from '~/utils/rules'
import { isAxiosLoginError } from '~/utils/utils'

type FormData = LoginSchema

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  // login mutation
  const loginMutation = useMutation({
    mutationFn: (body: FormData) => authApi.loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        console.log('data_login', data)
        setIsAuthenticated(true)
        const user: User = omit(data.data.data, ['access_token'])
        setProfile(user)
        navigate(PATH.home)
      },
      onError: (error) => {
        // console.log('error_login', error)
        if (isAxiosLoginError<ErrorResponse>(error)) {
          const formError = error.response?.data
          if (formError) {
            setError('password', {
              message: 'Email hoặc mật khẩu bị sai',
              type: 'Server'
            })
          }
        }
      }
    })
  })

  return (
    <div className='asir-background'>
      <div className='asir-container'>
        <div className='grid grid-cols-1 py-32 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                className='mt-8'
                type='text'
                placeholder='Email'
                nameInput='email'
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='password'
                placeholder='Password'
                nameInput='password'
                register={register}
                errorMessage={errors.password?.message}
              />
              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex w-full items-center justify-center bg-football-primary px-2 py-4 text-center text-lg uppercase text-white hover:bg-football-primary/80'
                  isLoading={false}
                  disabled={false}
                >
                  Đăng nhập
                </Button>
              </div>

              <div className='mt-6 flex items-center justify-center'>
                <span className='text-lg font-normal text-football-gray7A/60'>Bạn chưa có tài khoản?</span>
                <Link to={PATH.register} className='ml-2 text-football-primary'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
