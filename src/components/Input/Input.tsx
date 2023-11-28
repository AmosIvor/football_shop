import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  errorMessage,
  classNameInput = 'w-full rounded-sm border border-gray-300 px-3 py-2 text-lg outline-none placeholder:text-football-gray7A/80 focus:border-football-primary focus:shadow-sm focus:ring-transparent',
  classNameError = 'mt-1 min-h-[24px] text-base text-red-600',
  className,
  ...rest
}: Props) {
  return (
    <div className={className}>
      <input className={classNameInput} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
