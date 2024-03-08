import {
  ArrowUpOnSquareIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const CreatePayableAccount = () => {
  return (
    <Link
      href={'/invoices/payable/create'}
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>Create Payable Account</span>
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export const UploadPayableAccountFile = () => {
  return (
    <Link
      href={'/invoices/payable/upload-file'}
      className='flex h-10 items-center rounded-lg bg-lime-600 px-4 text-sm font-medium text-white transition-colors hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>Upload File</span>
      <ArrowUpOnSquareIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export const UpdateInvoice = ({ id }: { id: string }) => (
  <Link
    href={`/invoices/payable/${id}/edit`}
    className='flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
  >
    <PencilIcon className='w-5' />
  </Link>
)
