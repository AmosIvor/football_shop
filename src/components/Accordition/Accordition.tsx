import classNames from 'classnames'
import { useState } from 'react'

interface Props {
  title: string
  content: string
}

export default function Accordition({ title, content }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleToggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      className={classNames('group w-full cursor-pointer text-lg font-normal text-black', {
        'is-active pb-10': isActive,
        '': !isActive
      })}
      onClick={handleToggleActive}
      aria-hidden='true'
    >
      {/* Main Title */}
      <div className='flex items-center text-football-blue11'>
        {/* title */}
        <div className='w-full font-semibold'>{title}</div>

        {/* chevrons up */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5 group-[.is-active]:hidden'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
        </svg>

        {/* chevrons down */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='hidden h-5 w-5 group-[.is-active]:inline-block'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      {/* content hidden */}
      <div className='mt-2 max-h-0 overflow-hidden text-justify group-[.is-active]:max-h-min'>{content}</div>
    </div>
  )
}
