import Pagination from '@/app/ui/Pagination'
import {
  CreatePayableAccount,
  UploadPayableAccountFile,
} from '@/app/ui/buttons'
import { lusitana } from '@/app/ui/fonts'

import InvoiceTable from '@/app/ui/invoices/InvoiceTable'
import { InvoceTableSkeleton } from '@/app/ui/invoices/InvoiceTableSkeleton'
import Search from '@/app/ui/search'
import { Suspense } from 'react'

export type PageProps = {
  searchParams?: {
    query?: string
    page?: string
  }
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || ''

  const currentPage = Number(searchParams?.page) || 1

  const totalPages = 100

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Payable Invoices</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder='Search invoices...' />
        <CreatePayableAccount />
        <UploadPayableAccountFile />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoceTableSkeleton />}>
        <InvoiceTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
