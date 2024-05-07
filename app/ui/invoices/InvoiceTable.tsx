import { fetchInvoices } from '@/app/lib/actions'
import { TableProps } from '@/app/lib/definitions'
import { UpdateInvoice } from '../buttons'
import {
  formatCurrency,
  formatDateToLocal,
  formatString,
} from '@/app/lib/utils'

export default async function InvoiceTable({
  query,
  currentPage,
  accountType,
}: TableProps) {
  const invoices = await fetchInvoices(query, currentPage, accountType)

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='bg-gray-60 rounded-lg p-2 md:pt-0'>
          <table className='hidden min-w-full text-gray-900 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  {' '}
                  Fecha
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Serie
                </th>
                <th scope='col' className='px-2 py-5 font-medium'>
                  Numero del DTE
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Receptor
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Monto
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  IVA
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Estado
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {invoices?.map((invoice) => {
                return (
                  <tr
                    key={invoice._id.toString()}
                    className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                  >
                    <td className='whitespace-nowrap py-3 '>
                      {formatDateToLocal(invoice.date)}
                    </td>
                    <td className='whitespace-nowrap  py-3'>{invoice.serie}</td>
                    <td className='whitespace-nowrap  py-3 pl-6'>
                      {invoice.dteNumber}
                    </td>
                    <td className='whitespace-nowrap py-3 '>
                      {formatString(
                        `${invoice.receiver.nit}-${invoice.receiver.name}`,
                        20
                      )}
                    </td>
                    <td className='whitespace-nowrap py-3'>
                      {formatCurrency(invoice.amount)}
                    </td>
                    <td className='whitespace-nowrap py-3 '>
                      {formatCurrency(invoice.iva)}
                    </td>
                    <td className='whitespace-nowrap py-3 '>{invoice.state}</td>
                    <td className='whitespace-nowrap py-3 '>
                      <div className='flex justify-end gap-3'>
                        <UpdateInvoice id={invoice.id} />
                        {/* <DeleteInvoice id={invoice.id} /> */}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
