import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import Input from '~/components/Input'
import PATH from '~/constants/path'

export default function Register() {
  return (
    <div className='asir-background'>
      <div className='asir-container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <Input className='mt-8' placeholder='Username' />
              <Input className='mt-2' placeholder='Password' />
              <Input className='mt-2' placeholder='Password' />
              <Input className='mt-2' placeholder='Confirm Password' />

              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex w-full items-center justify-center bg-football-primary px-2 py-4 text-center text-lg uppercase text-white hover:bg-football-primary/80'
                  isLoading={false}
                  disabled={false}
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
