import Input from '~/components/Input'

export default function ChangePassword() {
  return (
    <div className='rounded-sm bg-white px-8 py-5 text-lg font-normal text-black shadow'>
      {/* Header */}
      <div className='border-b border-b-gray-200 pb-3'>
        <h1 className='capitalized text-2xl font-semibold text-black'>Đổi mật khẩu</h1>
        <div className='pb-2 pt-1 text-base text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>

      {/* Old Password */}
      <form className='mt-8 flex flex-row items-start'>
        <div className='flex-grow pr-12'>
          {/* Password */}
          <div className='flex flex-row flex-wrap'>
            <div className='mt-[9px] w-[22%] truncate text-right capitalize'>Mật khẩu cũ</div>
            <div className='w-[78%] pl-8'>
              <Input type='text' placeholder='Mật khẩu cũ' />
            </div>
          </div>

          {/* New Password */}
          <div className='mt-3 flex flex-row flex-wrap'>
            <div className='mt-[9px] w-[22%] truncate text-right capitalize'>Mật khẩu mới</div>
            <div className='w-[78%] pl-8'>
              <Input type='text' placeholder='Mật khẩu mới' />
              {/* <div className='mt-1 min-h-[20px] text-sm text-red-600'></div> */}
            </div>
          </div>

          {/* Confirm Password */}
          <div className='mt-3 flex flex-row flex-wrap'>
            <div className='mt-[9px] w-[22%] truncate text-right capitalize'>Xác nhận mật khẩu</div>
            <div className='w-[78%] pl-8'>
              <Input type='text' placeholder='Nhập lại mật khẩu mới' errorMessage='Hello' />
            </div>
          </div>

          {/* Button Save */}
          <div className='mt-3 flex flex-row flex-wrap'>
            <div className='w-[22%] truncate text-right capitalize'></div>
            <div className='w-[78%] pl-8 text-black'>
              <button
                className='flex h-[46px] items-center rounded-sm bg-football-primary px-6 text-lg text-white hover:bg-football-primary/90'
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
