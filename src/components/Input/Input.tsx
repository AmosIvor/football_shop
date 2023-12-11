import { InputHTMLAttributes } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
interface Props<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<T>
  nameInput?: keyof T
}

export default function Input<T extends FieldValues>({
  errorMessage,
  classNameInput = 'w-full rounded-sm border border-gray-300 px-3 py-2 text-lg outline-none placeholder:text-football-gray7A/80 focus:border-football-primary focus:shadow-sm focus:ring-transparent',
  classNameError = 'mt-1 min-h-[24px] text-base text-red-600',
  className,
  nameInput,
  register,
  ...rest
}: Props<T>) {
  const registerResult = register && nameInput ? register(String(nameInput) as Path<T>) : {}
  return (
    <div className={className}>
      <input className={classNameInput} {...rest} {...registerResult} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
