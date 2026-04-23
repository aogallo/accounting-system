'use client'

import { createColumnHelper } from '@tanstack/react-table'
import { ChangeEvent, useState } from 'react'
import BaseForm from '../BaseForm'
import Input from '../Input'
import { Button } from '../Button'
import BasicTable from '../BasicTable'

type OrderLine = {
  quantity: number
  product: string
  price: number
  total: number
}

export default function CreatePurchaseOrder() {
  const defaultData: OrderLine[] = []
  const columnHelper = createColumnHelper<OrderLine>()
  const columns = [
    columnHelper.accessor('product', {
      cell: (info) => info.getValue(),
      header: 'Product',
    }),
    columnHelper.accessor('quantity', {
      cell: (info) => info.getValue(),
      header: 'Quantity',
    }),
    columnHelper.accessor('price', {
      cell: (info) => info.getValue(),
      header: 'Price',
    }),
    columnHelper.accessor('total', {
      cell: (info) => info.getValue(),
      header: 'Total',
    }),
  ]

  const [data, setData] = useState(() => [...defaultData])
  const [product, setProduct] = useState<OrderLine>({
    quantity: 0,
    product: '',
    price: 0,
    total: 0,
  })
  const [customer, setCustomer] = useState('')

  const handleAddProduct = (): void => {
    if (product) {
      setData([...data, { ...product }])
    }
  }

  const handleProductValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    let newTotalValue = 0

    if (name === 'quantity') {
      newTotalValue = parseInt(value || '0') * product.price
    }

    if (name === 'price') {
      newTotalValue = parseInt(value || '0') * product.quantity
    }

    setProduct({
      ...product,
      [name]: value,
      total: newTotalValue,
    })
  }

  return (
    <>
      <BaseForm>
        <Input
          label='Customer'
          name='customer'
          type='text'
          placeholder='Enter a customer'
          icon='user-icon'
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />

        <div className='flex flex-row gap-1'>
          <input
            name='product'
            className='h-10 basis-1/2 rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500'
            type='text'
            placeholder='Enter a product'
            value={product.product}
            onChange={handleProductValue}
          />
          <input
            name='quantity'
            className='h-10 basis-2/6 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
            type='text'
            placeholder='Enter a quantity'
            value={product.quantity}
            onChange={handleProductValue}
          />
          <input
            name='price'
            className='h-10 basis-2/6 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
            type='text'
            placeholder='Enter a price'
            value={product.price}
            onChange={handleProductValue}
          />
          <input
            name='total'
            className='h-10 basis-2/6 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
            type='text'
            value={product.total}
            readOnly
            onChange={handleProductValue}
          />
          <Button onClick={handleAddProduct}>Add</Button>
        </div>

        <BasicTable columns={columns} data={data} />
      </BaseForm>
    </>
  )
}
