'use client'

import { createUser } from '@/app/lib/actions/users'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { Button } from '../Button'
import Input from '../Input'

export default function CreateUserForm() {
        const initialState = { success: false, message: '', errors: undefined }

        const [state, dispatch] = useFormState(createUser, initialState)

        return (
                <form action={dispatch}>
                        <div className='rounded-md bg-gray-50 p-4 md:p-6'>
                                {/* Name */}
                                <Input name='name' id='name' icon='pencil' placeholder='Enter a name' label='Name' />

                                {/* Useer */}
                                <Input name='user' id='user' icon='user-icon' placeholder='Enter a user' label='User' />

                                {/* Email */}
                                <Input name='email' type='email' id='email' icon='at-symbol' placeholder='Enter a email' label='Email' />

                                {/* Password */}
                                <Input name='password' type='password' id='password' icon='lock-closed' placeholder='Enter a password' label='Password' />

                                <div id='' aria-live='polite' aria-atomic='true'>
                                        {state.success && (
                                                <p className='mt-2 text-sm text-green-500'>{state.message}</p>
                                        )}
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
