'use client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import BaseForm from '../BaseForm'
import Input from '../Input'

type OrderLines = {
  quantity: number
  product: string
  price: number
}

export default function CreatePurchaseOrder() {
  const defaultData: OrderLines[] = [
    { quantity: 10, product: 'camisa', price: 12 },
  ]
  const columnHelper = createColumnHelper<OrderLines>()
  const columns = [
    columnHelper.accessor('quantity', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('product', {
      cell: (info) => info.getValue(),
      header: 'Product',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('price', {
      cell: (info) => info.getValue(),
      header: 'Price',
      footer: (info) => info.column.id,
    }),
  ]

  const [data, setData] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <BaseForm>
        <Input
          label='Customer'
          name='customer'
          type='text'
          placeholder='Enter a customer'
          icon='user-icon'
        />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </BaseForm>
    </>
  )
}
