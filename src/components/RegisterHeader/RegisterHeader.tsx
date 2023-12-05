import { Link, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <div className='flex w-full justify-center bg-white pb-5'>
      <div className='asir-container'>
        <div className='mt-6'>
          <Link to='/' className='text-[28px] font-bold text-football-primary md:text-[30px] xl:text-[34px]'>
            <span className='text-football-blue11'>HVPP </span>
            <span>Sports</span>
          </Link>
          <span className='ml-10 text-[20px] font-semibold text-black md:text-[24px] xl:text-[28px]'>
            {isRegister ? 'Đăng ký' : 'Đăng nhập'}
          </span>
        </div>
      </div>
    </div>
  )
}
