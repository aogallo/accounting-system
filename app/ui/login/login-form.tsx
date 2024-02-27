'use client'

import {
  ExclamationCircleIcon,
  KeyIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '../Button'
import { authenticate } from '../../lib/actions'

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  return (
    <section className='m-auto mt-20 h-14 w-96 rounded-md bg-gray-50 '>
      <h2 className='text-center text-sm font-medium'> Login</h2>
      <form action={dispatch}>
        <div className='rounded-md bg-gray-50 p-4 md:p-6'>
          {/*Email*/}
          <div className='mb-4'>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              User
            </label>
            <div className='relative mt-2 rounded-md'>
              <div className='relative'>
                <input
                  id='user'
                  name='user'
                  type='text'
                  placeholder='test@gmail.com'
                  className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                  aria-describedby='email-error'
                />
                <UserIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              </div>
            </div>
          </div>

          {/*Password*/}
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='mb-2 block text-sm font-medium'
            >
              Password
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                required
                minLength={6}
                aria-describedby='password-error'
              />
              <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <LoginButton />
          <div
            className='flex h-8 items-end space-x-1'
            aria-live='polite'
            aria-atomic='true'
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                <p className='text-sm text-red-500'>{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </form>
    </section>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()
  return (
    <Button className='w-full justify-center' aria-disabled={pending}>
      Login
    </Button>
  )
}
