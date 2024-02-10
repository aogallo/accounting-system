import { fetchAccount } from '@/app/lib/actions'
import { TableProps } from '@/app/lib/definitions'

export default async function AccountTable({ query, currentPage }: TableProps) {
  const accounts = await fetchAccount('', 1)

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='bg-gray-60 rounded-lg p-2 md:pt-0'>
          <div className='md:hidden'>
            <table className='hidden min-w-full text-gray-900 md:table'>
              <thead className='rounded-lg text-left text-sm font-normal'>
                <tr>
                  <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                    {' '}
                    Fecha
                  </th>
                  <th scope='col' className='px-3 py-5 font-medium'>
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className=''></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
