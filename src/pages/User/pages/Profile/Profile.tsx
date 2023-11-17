import DateSelect from '../../components/DateSelect'

export default function Profile() {
  return (
    <div className='rounded-sm bg-white px-8 py-5 text-lg font-normal text-black shadow'>
      {/* Header */}
      <div className='border-b border-b-gray-200'>
        <h1 className='capitalized text-2xl font-semibold text-black'>Tài khoản của tôi</h1>
        <div className='pb-2 pt-1 text-base text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>

      {/* Form */}
      <form className='mt-8 flex flex-row items-start'>
        {/* Information */}
        <div className='flex-grow pr-12'>
          {/* Email */}
          <div className='flex flex-row flex-wrap items-center'>
            <div className='captialized w-[20%] truncate pt-3 text-right'>Email</div>
            <div className='w-[80%] pl-8'>
              <div className='pt-3 font-semibold text-football-gray7A'>amosivor@gmail.com</div>
            </div>
          </div>

          {/* Name */}
          <div className='mt-2 flex flex-row flex-wrap items-center'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Tên</div>
            <div className='w-[80%] pl-8 pt-3 text-black'>
              <div className=''>
                <input
                  type='text'
                  className='w-full rounded-sm border border-gray-300 px-3 py-2 text-lg outline-none focus:border-football-primary focus:shadow-sm focus:ring-transparent'
                  placeholder='Tên'
                />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className='mt-4 flex flex-row flex-wrap items-center'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Số điện thoại</div>
            <div className='w-[80%] pl-8 pt-3 text-black'>
              <div className=''>
                <input
                  type='text'
                  className='w-full rounded-sm border border-gray-300 px-3 py-2 text-lg outline-none focus:border-football-primary focus:shadow-sm focus:ring-transparent'
                  placeholder='Số điện thoại'
                />
                {/* <div className='mt-1 min-h-[20px] text-sm text-red-600'>Error when you try to enter</div> */}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className='mt-4 flex flex-row flex-wrap items-center'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'>Địa chỉ</div>
            <div className='w-[80%] pl-8 pt-3 text-black'>
              <div className=''>
                <input
                  type='text'
                  className='w-full rounded-sm border border-gray-300 px-3 py-2 text-lg outline-none focus:border-football-primary focus:shadow-sm focus:ring-transparent'
                  placeholder='Địa chỉ'
                />
              </div>
            </div>
          </div>

          {/* Date Select */}
          <DateSelect />

          {/* Button Save */}
          <div className='mt-4 flex flex-row flex-wrap'>
            <div className='w-[20%] truncate pt-3 text-right capitalize'></div>
            <div className='w-[80%] pl-8 pt-3 text-black'>
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