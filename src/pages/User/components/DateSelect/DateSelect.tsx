import { range } from 'lodash'

export default function DateSelect() {
  return (
    <div className='mt-4 flex flex-row flex-wrap items-center'>
      <div className='capitialized w-[20%] truncate pt-3 text-right'>Ngày sinh</div>
      <div className='w-[80%] pl-8 pt-3 text-black'>
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
      </div>
    </div>
  )
}
