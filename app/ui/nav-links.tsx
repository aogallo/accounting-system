'use client'

import {
  BanknotesIcon,
  CalculatorIcon,
  CircleStackIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'

type LinksType = {
  name: string
  href: string
  icon: typeof HomeIcon
}

const links: LinksType[] = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Payable Invoices',
    href: '/invoices/payable',
    icon: CreditCardIcon,
  },
  {
    name: 'Receivable Invoices',
    href: '/invoices/receivable',
    icon: BanknotesIcon,
  },
  {
    name: 'Register',
    href: '/register',
    icon: UserIcon,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: CircleStackIcon,
  },
  {
    name: 'Purchase orders',
    href: '/purchase-order',
    icon: CalculatorIcon,
  },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              { 'bg-sky-100 text-blue-600': pathname === link.href }
            )}
          >
            <LinkIcon className='w-6' />{' '}
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
