import { fetchAccount } from '@/app/lib/actions'
import { TableProps } from '@/app/lib/definitions'
import { UpdateInvoice } from '../buttons'
import { formatDateToLocal } from '@/app/lib/utils'

export default async function AccountTable({ query, currentPage }: TableProps) {
  const accounts = await fetchAccount('', 1)
  console.log(accounts)

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
                  Número de autorización
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Tipo
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Serie
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Numero del DTE
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Nit del receptor
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Nombre del receptor
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Moneda
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Monto
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Estado
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Fecha de anulación
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  IVA
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {accounts?.map((account) => (
                <tr
                  key={account.id}
                  className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {formatDateToLocal(account.date)}
                  </td>
                  <td className='whitespace-break-spaces py-3 pl-6 pr-3'>
                    {account.authorizationNumber}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.type}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.serie}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.dteNumber}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.receiverId}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.receiverName}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.currency}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.amount}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.state}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.cancellationDate}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    {account.iva}
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex justify-end gap-3'>
                      <UpdateInvoice id={account.id} />
                      {/* <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
