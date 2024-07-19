import Pagination from '@/components/Pagination'
import InvoiceTable from '@/components/invoices/InvoiceTable'
import { InvoceTableSkeleton } from '@/components/invoices/InvoiceTableSkeleton'
import Search from '@/components/search'
import TitlePage from '@/components/title-page'
import { Suspense } from 'react'
import { PageProps } from '../payable/page'

export default function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || ''

  const currentPage = Number(searchParams?.page) || 1

  const totalPages = 100

  return (
    <div className='w-full'>
      <TitlePage title='Receivable Invoices' />
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder='Search invoices...' />
        {/* <CreatePayableAccount /> */}
        {/* <UploadPayableAccountFile /> */}
      </div>
      <Suspense key={query + currentPage} fallback={<InvoceTableSkeleton />}>
        <InvoiceTable
          accountType='RECEIVABLE'
          query={query}
          currentPage={currentPage}
        />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
