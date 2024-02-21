'use client'

import {
  AtSymbolIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '../Button'
import { useFormState } from 'react-dom'
import { createUser } from '@/app/lib/actions/User'

export default function CreateUserForm() {
  const initialState = { message: '', errors: undefined }
  const [state, dispatch] = useFormState(createUser, initialState)

  return (
    <form action={dispatch}>
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        <div className='mb-4'>
          <label htmlFor='user' className='mb-2 block text-sm font-medium'>
            User
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='user'
                name='user'
                type='text'
                placeholder='Enter a user'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                aria-describedby='user-error'
              />
            </div>
            <UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
          </div>
        </div>
        <div id='user-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.user &&
            state.errors.user.map((error) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>
        <div className='mb-4'>
          <label htmlFor='user' className='mb-2 block text-sm font-medium'>
            Email
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='user@gmail.com'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                aria-describedby='email-error'
              />
            </div>
            <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
          </div>
        </div>
        <div id='email-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.email &&
            state.errors.email.map((error) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Password */}

        <div className='mb-4'>
          <label htmlFor='user' className='mb-2 block text-sm font-medium'>
            Password
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='password'
                name='password'
                type='password'
                placeholder='****'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                aria-describedby='password-error'
              />
            </div>
            <LockClosedIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
          </div>
        </div>
        <div id='password-error' aria-live='polite' aria-atomic='true'>
          {state.errors?.password ? (
            state.errors.password.map((error) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))
          ) : (
            <p className='mt-2 text-sm text-red-500'>{state.message}</p>
          )}
        </div>
        <div id='' aria-live='polite' aria-atomic='true'>
          {state.errors?.password &&
            state.errors.password.map((error) => (
              <p className='mt-2 text-sm text-red-500' key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href='/dashboard/invoices'
          className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>Create User</Button>
      </div>
    </form>
  )
}
