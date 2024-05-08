'use server'

import { z } from 'zod'
import { dbConnect } from '../mongodb'
import { InvoiceModel } from '@/models'
import { revalidatePath } from 'next/cache'

const ITEMS_PER_PAGE = 6

const InvoiceSchema = z.object({
  id: z.string(),
  account: z.string(),
})

export async function updateInvoiceById(formData: FormData) {
  const validateFields = InvoiceSchema.safeParse({
    ...Object.fromEntries(formData),
  })

  if (!validateFields.success) {
    return {
      success: false,
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing fields, failed to save a Invoice',
    }
  }

  const { id, account } = validateFields.data

  await dbConnect()

  await InvoiceModel.findOneAndUpdate(
    { _id: id },
    {
      account,
    },
    {
      new: true,
    }
  )

  revalidatePath('/')

  return {
    success: true,
    message: 'Invoice has benn updated',
  }
}

export async function fetchAccountById(id: string) {
  try {
    await dbConnect()
    const data = await InvoiceModel.findById(id).populate([
      'issuer',
      'receiver',
    ])
    // return JSON.stringify(data)
    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error(`Failed to fetch payable account ${id}`)
  }
}

export async function fetchInvoices(
  query: string,
  currentPage: number,
  accountType: string = 'PAYABLE'
) {
  await dbConnect()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  const regex = { $regex: '.*' + query.toUpperCase() + '.*' }
  const numberValue = query ? query.match(/\d/g)?.join('') : 0

  try {
    const queryM = {
      $or: [
        { serie: regex },
        { dteNumber: regex },
        { amount: Number(numberValue) },
        { iva: Number(numberValue) },
        { state: regex },
      ],
      accountType,
    }

    const data = await InvoiceModel.find(
      queryM,
      {},
      {
        sort: {
          date: -1,
        },
        limit: ITEMS_PER_PAGE,
        skip: offset,
      }
    ).populate(['issuer', 'receiver'])

    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch payable accounts')
  }
}
