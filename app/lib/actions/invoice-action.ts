'use server'

import { z } from 'zod'
import { dbConnect } from '../mongodb'
import { InvoiceModel } from '@/models'
import { revalidatePath } from 'next/cache'

export type ErrorState<T> = Partial<Record<keyof T, string[] | undefined>>

export type State<T> = {
  success: boolean
  errors?: ErrorState<T>
  message?: string
}

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
