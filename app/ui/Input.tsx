import clsx from 'clsx'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { iconsAvailable } from './icons'

type InputProps = {
  label?: string
  icon?: keyof typeof iconsAvailable
  errors?: string[]
  className?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({
  label,
  name,
  icon,
  placeholder = '',
  errors,
  className: classNameInput = '',
  ...props
}: InputProps) => {
  const classNameBuild = clsx(
    'peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500',
    classNameInput
  )

  return (
    <>
      <div className='mb-4'>
        {label && (
          <label htmlFor={name} className='mb-2 block text-sm font-medium '>
            {label}
          </label>
        )}
        <div className='relative mt-2 rounded-md'>
          <div className='relative'>
            <input
              name={name}
              placeholder={placeholder}
              className={classNameBuild}
              aria-describedby={`${name}-error`}
              {...props}
            />
          </div>
          {icon && iconsAvailable[icon]}
        </div>
      </div>
      <div id={`${name}-error`} aria-live='polite' aria-atomic='true'>
        {errors &&
          errors.map((error) => (
            <p className='my-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}
      </div>
    </>
  )
}

export default Input
