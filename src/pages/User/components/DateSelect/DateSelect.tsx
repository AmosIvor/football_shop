import { range } from 'lodash'
import { useEffect, useState } from 'react'

interface Props {
  onChange?: (value: Date) => void
  value?: Date
  errorMessage?: string
}

export default function DateSelect({ value, onChange, errorMessage }: Props) {
  const [date, setDate] = useState({
    date: value?.getDate() || 1,
    month: value?.getMonth() || 0,
    year: value?.getFullYear() || 1990
  })

  useEffect(() => {
    if (value) {
      setDate({
        date: value.getDate(),
        month: value.getMonth(),
        year: value.getFullYear()
      })
    }
  }, [setDate, value])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: valueFromSelect, name } = event.target
    const newDate = {
      date: value?.getDate() || date.date,
      month: value?.getMonth() || date.month,
      year: value?.getFullYear() || date.year,
      [name]: Number(valueFromSelect)
    }
    setDate(newDate)
    onChange && onChange(new Date(newDate.year, newDate.month, newDate.date))
  }

  return (
    <div className='mt-[10px] flex flex-col flex-wrap xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:mt-[10px] xl:flex-col laptopXS:mt-3 laptopXS:flex-row 2xl:mt-3 2xl:flex-col laptop:mt-3 laptop:flex-row'>
      <div className='truncate capitalize xs:mt-0 xs:w-auto xs:text-left sm:mt-[9px] sm:w-[24%] sm:text-right md:mt-[9px] md:w-[22%] md:text-right lg:mt-[9px] lg:w-[23%] lg:text-right xl:mt-0 xl:w-auto xl:text-left laptopXS:mt-[9px] laptopXS:w-[22%] laptopXS:text-right 2xl:mt-0 2xl:w-auto 2xl:text-left laptop:mt-[9px] laptop:w-[22%] laptop:text-right'>
        Ngày sinh
      </div>
      <div className='mt-[6px] w-auto pl-0 text-black xs:w-auto xs:pl-0 sm:mt-0 sm:w-[76%] sm:pl-7 md:mt-0 md:w-[78%] md:pl-8 lg:mt-0 lg:w-[77%] lg:pl-7 xl:mt-[6px] xl:w-auto xl:pl-0 laptopXS:mt-0 laptopXS:w-[78%] laptopXS:pl-7 2xl:mt-2 2xl:w-auto 2xl:pl-0 laptop:mt-0 laptop:w-[78%] laptop:pl-8'>
        <div className='flex justify-between'>
          <select
            name='date'
            onChange={handleChange}
            value={value?.getDate() || date.date}
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
            name='month'
            onChange={handleChange}
            value={value?.getMonth() || date.month}
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
            name='year'
            onChange={handleChange}
            value={value?.getFullYear() || date.year}
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

        {/* error */}
        <div className='mt-1 min-h-[24px] text-base text-red-600'>{errorMessage}</div>
      </div>
    </div>
  )
}
