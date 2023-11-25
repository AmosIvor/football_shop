import Input from '~/components/Input'
import DateSelect from '../../components/DateSelect'

export default function Profile() {
  return (
    <div className='rounded-sm bg-white px-8 py-5 text-lg font-normal text-black shadow'>
      {/* Header */}
      <div className='border-b border-b-gray-200 pb-3'>
        <h1 className='capitalized text-2xl font-semibold text-black'>Tài khoản của tôi</h1>
        <div className='pb-2 pt-1 text-base text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>

      {/* Form */}
      <form className='mt-6 flex flex-col-reverse md:flex-row md:items-start'>
        {/* Information */}
        <div className='flex-grow pr-12'>
          {/* Email */}
          <div className='flex flex-row flex-wrap items-center'>
            <div className='captialized w-[20%] truncate text-right'>Email</div>
            <div className='w-[80%] pl-8'>
              <div className='font-semibold text-football-gray7A'>amosivor@gmail.com</div>
            </div>
          </div>

          {/* Name */}
          <div className='mt-6 flex flex-row flex-wrap'>
            <div className='mt-[9px] w-[20%] truncate text-right capitalize'>Tên</div>
            <div className='w-[80%] pl-8 text-black'>
              <Input placeholder='Tên' type='text' errorMessage='Hello' />
            </div>
          </div>

          {/* Phone */}
          <div className='mt-3 flex flex-row flex-wrap'>
            <div className='mt-[9px] w-[20%] truncate text-right capitalize'>Số điện thoại</div>
            <div className='w-[80%] pl-8 text-black'>
              <Input type='text' placeholder='Số điện thoại' />
            </div>
          </div>

          {/* Address */}
          <div className='mt-3 flex flex-row flex-wrap'>
            <div className='mt-[9px] w-[20%] truncate text-right capitalize'>Địa chỉ</div>
            <div className='w-[80%] pl-8 text-black'>
              <Input type='text' placeholder='Địa chỉ' errorMessage='Hello' />
            </div>
          </div>

          {/* Date Select */}
          <DateSelect />

          {/* Button Save */}
          <div className='mt-3 flex flex-row flex-wrap'>
            <div className='mt-[9px] w-[20%] truncate text-right capitalize'></div>
            <div className='w-[80%] pl-8 text-black'>
              <button
                className='flex h-[46px] items-center rounded-sm bg-football-primary px-6 text-lg text-white hover:bg-football-primary/90'
                type='submit'
              >
                Lưu
              </button>
            </div>
          </div>
        </div>

        {/* Upload Image */}
        <div className='flex justify-center border-l-gray-200 md:w-72 md:border-l'>
          <div className='flex flex-col items-center'>
            <div className='my-5 h-24 w-24'>
              <img
                src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='imageupload'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <input type='file' accept='.jpg,.jpeg,.png' className='hidden' />
            <button className='flex h-[46px] items-center justify-end rounded-sm border bg-white px-6 text-lg text-football-gray7A shadow-sm'>
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
