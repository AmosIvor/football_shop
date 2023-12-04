import Button from '~/components/Button'
import Input from '~/components/Input'

export default function Login() {
  return (
    <div className='asir-background'>
      <div className='asir-container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <Input className='mt-8' placeholder='Email' />
              <Input className='mt-2' placeholder='Password' />
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
