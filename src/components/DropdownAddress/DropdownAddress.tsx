import { DistrictResponse, ProvinceResponse, WardResponse } from '~/types/address.type'
import DropdownMenuNotArrow from '../DropdownMenuNotArrow'
import classNames from 'classnames'

interface Props {
  title?: string
  maxHeight?: string
  addressData?: ProvinceResponse[] | DistrictResponse[] | WardResponse[]
  onChange?: (value: number) => void
  value?: string
  errorMessage?: string
}

export default function DropdownAddress({
  maxHeight = 'max-h-44',
  title = 'Tỉnh/Thành phố',
  addressData = [],
  onChange,
  value,
  errorMessage
}: Props) {
  const handleClick = (addressIndex: number) => () => {
    onChange && onChange(addressIndex)
  }

  return (
    <div className='w-full'>
      <div className='mb-2'>{title}</div>

      <DropdownMenuNotArrow
        zIndex='z-30'
        renderPopover={
          <div
            className={`flex ${maxHeight} w-[222px] flex-col overflow-y-auto scroll-smooth rounded-sm border border-gray-200 bg-white shadow-md`}
          >
            {addressData &&
              addressData.length > 0 &&
              addressData.map((item, index) => (
                <button
                  className={classNames(
                    'flex items-start bg-white px-3 py-[6px] hover:bg-white hover:text-football-primary',
                    {
                      'text-football-primary': value === item.name,
                      '': !(value === item.name)
                    }
                  )}
                  key={index}
                  onClick={handleClick(index)}
                >
                  {item.name}
                </button>
              ))}
          </div>
        }
      >
        <div
          className={classNames(
            'capitalizey mb-5 flex w-full cursor-pointer items-center justify-between border border-gray-300 bg-white px-3 py-2 text-lg  hover:border-football-primary',
            {
              'text-football-gray7A/80': value === title,
              'text-black': !(value === title)
            }
          )}
        >
          <span>{value}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-[18px] w-[18px]'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </div>
      </DropdownMenuNotArrow>
    </div>
  )
}
