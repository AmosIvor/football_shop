import { range } from 'lodash'

export default function DateSelect() {
  return (
    <div className='mt-3 flex flex-row flex-wrap'>
      <div className='capitialized mt-[9px] w-[20%] truncate text-right'>Ngày sinh</div>
      <div className='w-[80%] pl-8 text-black'>
        <div className='flex justify-between'>
          <select
            name='date'
            className='h-[46px] w-[32%] cursor-pointer border border-gray-300 px-3 hover:border-football-primary focus:border-football-primary'
          >
            <option disabled>Ngày</option>
            {range(1, 32).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            name='date'
            className='h-[46px] w-[32%] cursor-pointer border border-gray-300 px-3 hover:border-football-primary focus:border-football-primary'
          >
            <option disabled>Tháng</option>
            {range(0, 12).map((item) => (
              <option value={item} key={item}>
                {item + 1}
              </option>
            ))}
          </select>

          <select
            name='date'
            className='h-[46px] w-[32%] cursor-pointer border border-gray-300 px-3 hover:border-football-primary focus:border-football-primary'
          >
            <option disabled>Năm</option>
            {range(1990, 2024).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className='mt-1 min-h-[24px] text-base text-red-600'></div>
      </div>
    </div>
  )
}
