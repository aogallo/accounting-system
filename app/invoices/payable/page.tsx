import {
  CreatePayableAccount,
  UploadPayableAccountFile,
} from '@/app/ui/buttons'
import { lusitana } from '@/app/ui/fonts'

import InvoiceTable from '@/app/ui/invoices/InvoiceTable'

type Props = {
  searchParams?: {
    query?: string
    page?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const query = searchParams?.query || ''

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Payable Accounts</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        {/* <Search placeholder="Search invoices..." /> */}
        <CreatePayableAccount />
        <UploadPayableAccountFile />
      </div>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
      <InvoiceTable query={''} currentPage={0} />
      {/* </Suspense> */}
      {/* <div className="mt-5 flex w-full justify-center"> */}
      {/*   <Pagination totalPages={totalPages} /> */}
      {/* </div> */}
    </div>
  )
}
