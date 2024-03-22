import { signOut } from '@/auth'
import auth from '@/middleware'
import { BuildingLibraryIcon, PowerIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default async function Home() {
  const session = await auth()
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p className='text-3xl'>Accouting System</p>
      <BuildingLibraryIcon className='h-28 w-28' />

      {session?.user ? (
        <form
          action={async () => {
            'use server'
            await signOut({
              redirectTo: '/login',
            })
          }}
        >
          <button className='flex w-full rounded-full border-2 border-black px-5 py-1 hover:bg-gray-200'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      ) : (
        <Link
          href={'/login'}
          className='rounded-full border-2 border-black px-5 py-1 hover:bg-gray-200'
        >
          LogIn
        </Link>
      )}
      <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
        <Link
          href={'/invoices/payable'}
          className='group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Payable Invoices{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Manage your Invoice Payable
          </p>
        </Link>

        <Link
          href={'/invoices/receivable'}
          className='group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Receivable Invoices{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Manage your Receivable Invoices
          </p>
        </Link>

        <Link
          href={'/dashboard'}
          className='group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Dashboard{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Have a whole view of your income and expenses
          </p>
        </Link>

        <Link
          href={'/reports'}
          className='group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Reports{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Create financials reports
          </p>
        </Link>
      </div>
    </main>
  )
}
