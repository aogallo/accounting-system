export function InvoceTableSkeleton() {
  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          {/* <div className='md:hidden'> TODO: for mobile skeleton</div> */}
        </div>
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
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function TableRowSkeleton() {
  return (
    <tr className='w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'>
      {/* Date */}
      <td className='whitespace-nowrap px-3 py-3'>
        <div className='h-6 w-32 rounded bg-gray-100'></div>
      </td>
      {/* Serie */}
      <td className='whitespace-nowrap px-3 py-3'>
        <div className='h-6 w-32 rounded bg-gray-100'></div>
      </td>
      {/* Numero del DTE */}
      <td className='whitespace-nowrap px-3 py-3'>
        <div className='h-6 w-32 rounded bg-gray-100'></div>
      </td>
      {/* Receptor  */}
      <td className='whitespace-nowrap px-3 py-3'>
        <div className='h-6 w-32 rounded bg-gray-100'></div>
      </td>
      {/* Monto */}
      <td className='whitespace-nowrap px-3 py-3'>
        <div className='h-6 w-32 rounded bg-gray-100'></div>
      </td>
      {/* IVA */}
      <td className='whitespace-nowrap px-3 py-3'>
        <div className='h-6 w-32 rounded bg-gray-100'></div>
      </td>
      {/* Estado */}
      <td className='whitespace-nowrap px-3 py-3'>
        <div className='h-6 w-32 rounded bg-gray-100'></div>
      </td>
      {/* Acciones */}
      <td className='whitespace-nowrap py-3 pl-6 pr-3'>
        <div className='flex justify-end gap-3'>
          <div className='h-[38px] w-[38px] rounded bg-gray-100'></div>
          <div className='h-[38px] w-[38px] rounded bg-gray-100'></div>
        </div>
      </td>
    </tr>
  )
}
