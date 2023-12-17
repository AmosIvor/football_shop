import { useState } from 'react'
import InputNumber, { InputNumberProps } from '../InputNumber'

interface Props extends InputNumberProps {
  classNameWrapper?: string
  heightWrapper?: string
  widthButtonStyle?: string
  widthInputStyle?: string
  sizeIconStyle?: string
  max?: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  onFocusOut?: (value: number) => void
}

export default function QuantityController({
  classNameWrapper = 'ml-10',
  heightWrapper = 'h-10',
  widthButtonStyle = 'w-10',
  widthInputStyle = 'w-14',
  sizeIconStyle = 'h-4 w-4',
  max,
  onIncrease,
  onDecrease,
  onType,
  onFocusOut,
  value,
  ...rest
}: Props) {
  const [localValue, setLocalValue] = useState<number>(Number(value) || 1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(event.target.value)
    if (max !== undefined && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }

    onType && onType(_value)
    setLocalValue(_value)
  }

  const increase = () => {
    let _value = Number(value || localValue) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }

    onIncrease && onIncrease(_value)
    setLocalValue(_value)
  }

  const decrease = () => {
    let _value = Number(value || localValue) - 1
    if (_value < 1) {
      _value = 1
    }

    onDecrease && onDecrease(_value)
    setLocalValue(_value)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    onFocusOut && onFocusOut(Number(event?.target.value))
  }

  return (
    <div className={`flex items-center ${classNameWrapper}`}>
      <button
        className={`flex ${heightWrapper} ${widthButtonStyle} items-center justify-center rounded-l-sm border border-gray-300 text-gray-600`}
        onClick={decrease}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={sizeIconStyle}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
        </svg>
      </button>

      <InputNumber
        classNameInput={`${heightWrapper} ${widthInputStyle} border-b border-t border-gray-300 bg-transparent p-1 text-center outline-none focus:border-gray-300 focus:ring-transparent`}
        classNameError='hidden'
        onChange={handleChange}
        onBlur={handleBlur}
        value={value || localValue}
        {...rest}
      />

      <button
        className={`flex ${heightWrapper} ${widthButtonStyle} items-center justify-center rounded-r-sm border border-gray-300 text-gray-600`}
        onClick={increase}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={sizeIconStyle}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  )
}
