import {
  AtSymbolIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const classNameIcon =
  'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'

const iconsAvailable = {
  'user-icon': <UserIcon className={classNameIcon} />,
  'at-symbol': <AtSymbolIcon className={classNameIcon} />,
  'lock-closed': <LockClosedIcon className={classNameIcon} />,
}

type InputProps = {
  label?: string
  type: string
  name: string
  placeholder: string
  icon?: keyof typeof iconsAvailable
  errors?: Record<string, string[]>
  classNameInput?: string
}

const Input = ({
  label,
  type,
  name,
  icon,
  placeholder,
  errors,
  classNameInput = '',
}: InputProps) => {
  const classNameBuild = clsx(
    'peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500',
    classNameInput
  )

  return (
    <>
      <div className='mb-4'>
        {label && (
          <label htmlFor='user' className='mb-2 block text-sm font-medium '>
            {label}
          </label>
        )}
        <div className='relative mt-2 rounded-md'>
          <div className='relative'>
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              className={classNameBuild}
              aria-describedby={`${name}-error`}
            />
          </div>
          {icon && iconsAvailable[icon]}
        </div>
      </div>
      <div id={`${name}-error`} aria-live='polite' aria-atomic='true'>
        {errors?.user &&
          errors.user.map((error) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}
      </div>
    </>
  )
}

export default Input
