'use client'

import { createUser } from '@/app/lib/actions/users'
import { useToast } from '@/components/ui/use-toast'
import { useAction } from 'next-safe-action/hooks'
import Link from 'next/link'
import { Button } from '../Button'
import Input from '../Input'

export default function CreateUserForm() {
  const { toast } = useToast()
  const { execute, result, isExecuting, status } = useAction(createUser, {
    onSettled: ({ result, input }) => {
      console.log('onSettled', result, input)
      toast({
        title: result.data?.message,
        description: result.data?.message,
        variant: result.data?.success ? 'default' : 'destructive',
      })
    },
  })

  console.log(status)

  return (
    <>
      <form action={execute}>
        <div className='rounded-md bg-gray-50 p-4 md:p-6'>
          {/* Name */}
          <Input
            name='name'
            id='name'
            icon='pencil'
            placeholder='Enter a name'
            label='Name'
            errors={result.validationErrors?.name}
          />

          {/* Useer */}
          <Input
            name='user'
            id='user'
            icon='user-icon'
            placeholder='Enter a user'
            label='User'
            errors={result.validationErrors?.user}
          />

          {/* Email */}
          <Input
            name='email'
            type='email'
            id='email'
            icon='at-symbol'
            placeholder='Enter a email'
            label='Email'
            errors={result.validationErrors?.email}
          />

          {/* Password */}
          <Input
            name='password'
            type='password'
            id='password'
            icon='lock-closed'
            placeholder='Enter a password'
            label='Password'
            errors={result.validationErrors?.password}
          />
        </div>
        <div className='mt-6 flex justify-end gap-4'>
          <Link
            href='/dashboard/invoices'
            className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
          >
            Cancel
          </Link>
          <Button
            type='submit'
            aria-disabled={isExecuting}
            isLoading={isExecuting}
          >
            Create User
          </Button>
        </div>
      </form>
    </>
  )
}
